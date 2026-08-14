'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleContactFormSubmission } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader2, CheckCircle, AlertCircle, Send } from 'lucide-react';
import MagneticButton from '@/components/ui/MagneticButton';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ResponseState = {
  type: 'success' | 'error';
  message: string;
} | null;

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ResponseState>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setResponse(null);
    try {
      const result = await handleContactFormSubmission(values);
      setResponse({ type: 'success', message: result.response });
      form.reset();
    } catch (e) {
      setResponse({ type: 'error', message: 'An unexpected error occurred. Please try again later.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-400">Your Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter your name" 
                    {...field} 
                    className="h-12 bg-zinc-950/60 border-zinc-900 focus-visible:ring-[#FF7A00]/40 text-zinc-100 placeholder-zinc-600 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-xs text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-400">Your Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="name@example.com" 
                    {...field} 
                    className="h-12 bg-zinc-950/60 border-zinc-900 focus-visible:ring-[#FF7A00]/40 text-zinc-100 placeholder-zinc-600 rounded-xl"
                  />
                </FormControl>
                <FormMessage className="text-xs text-rose-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="space-y-1.5">
                <FormLabel className="text-xs uppercase font-mono font-bold tracking-widest text-zinc-400">Message</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell me about your project or opportunity..." 
                    {...field} 
                    rows={5} 
                    className="bg-zinc-950/60 border-zinc-900 focus-visible:ring-[#FF7A00]/40 text-zinc-100 placeholder-zinc-600 rounded-xl resize-none"
                  />
                </FormControl>
                <FormMessage className="text-xs text-rose-500" />
              </FormItem>
            )}
          />

          <MagneticButton range={30} strength={0.2} className="w-full">
            <Button 
              type="submit" 
              disabled={loading} 
              className="w-full h-12 rounded-full bg-[#FF7A00] text-white font-bold text-sm hover:bg-[#E85D04] transition-all duration-300 shadow-lg shadow-[#FF7A00]/10 hover:shadow-[#FF7A00]/35 flex items-center justify-center gap-2"
              data-cursor-text="send"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="h-4 w-4" />
                </>
              )}
            </Button>
          </MagneticButton>

        </form>
      </Form>

      {response && (
        <div className={`mt-4 p-4 rounded-xl border flex items-start gap-3 transition-all ${
          response.type === 'success' 
            ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
            : 'bg-rose-500/5 border-rose-500/20 text-rose-400'
        }`}>
          {response.type === 'success' ? (
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          <div>
            <h5 className="font-bold text-sm">
              {response.type === 'success' ? 'Message Sent!' : 'Submission Error'}
            </h5>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              {response.message}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
