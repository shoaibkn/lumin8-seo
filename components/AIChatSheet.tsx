"use client";

import type React from "react";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function AIChatSheet({ seoReportId }: { seoReportId: string }) {
  const [input, setInput] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, sendMessage, status } = useChat({
    id: seoReportId,
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input, metadata: { seoReportId } });
      setInput("");
    }
  };

  const isTyping = status === "submitted";

  return (
    <>
      {/* Chat Widget */}
      {isExpanded && (
        <div
          className="fixed max-h-[50%] bottom-16 sm:bottom-20 right-4 sm:right-6 z-50 w-[90%] mx-auto md:w-[500px] h-full sm:h-[600px]
          bg-card rounded-2xl shadow-lg border-0 sm:border border-border flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 sm:p-5 bg-primary text-primary-foreground rounded-t-none sm:rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-base">AI Assistant</h3>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "w-2 h-2 rounded-full",
                      isTyping ? "bg-accent animate-pulse" : "bg-chart-2",
                    )}
                  ></div>
                  <p className="text-xs opacity-80">
                    {isTyping ? "Thinking..." : "Online"}
                  </p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => setIsExpanded(false)}
              size="icon"
              variant="ghost"
              className="sm:hidden h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-background"
          >
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                👋 Hi! Ask me anything about your SEO report.
              </div>
            )}

            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] sm:max-w-[85%] px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm shadow-sm",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-muted-foreground border border-border rounded-bl-none",
                  )}
                >
                  {message.parts.map((part, i) => {
                    if (part.type === "tool-web_search") {
                      switch (part.state) {
                        case "input-streaming":
                        case "input-available":
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className="flex items-center gap-2 text-sm"
                            >
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Searching the web...</span>
                            </div>
                          );
                        case "output-available":
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className="text-sm font-medium"
                            >
                              ✓ Finished web search
                            </div>
                          );
                        case "output-error":
                          return (
                            <div
                              key={`${message.id}-${i}`}
                              className="text-sm text-destructive"
                            >
                              ✗ Web search failed: {part.errorText}
                            </div>
                          );
                      }
                    }
                    if (part.type === "text") {
                      return (
                        <div
                          key={`${message.id}-${i}`}
                          className="leading-relaxed"
                        >
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              p: ({ children }) => (
                                <p className="mb-3 last:mb-0">{children}</p>
                              ),
                              ul: ({ children }) => (
                                <ul className="mb-3 pl-4 space-y-1">
                                  {children}
                                </ul>
                              ),
                              ol: ({ children }) => (
                                <ol className="mb-3 pl-4 space-y-1">
                                  {children}
                                </ol>
                              ),
                              li: ({ children }) => (
                                <li className="text-sm">{children}</li>
                              ),
                              a: ({ children, href }) => (
                                <a
                                  href={href}
                                  className="text-accent underline cursor-pointer hover:opacity-80 transition-opacity"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {children}
                                </a>
                              ),
                              h1: ({ children }) => (
                                <h1 className="text-lg font-semibold mb-2 mt-4 first:mt-0">
                                  {children}
                                </h1>
                              ),
                              h2: ({ children }) => (
                                <h2 className="text-base font-semibold mb-2 mt-3 first:mt-0">
                                  {children}
                                </h2>
                              ),
                              h3: ({ children }) => (
                                <h3 className="text-sm font-semibold mb-1 mt-2 first:mt-0">
                                  {children}
                                </h3>
                              ),
                              strong: ({ children }) => (
                                <strong className="font-semibold">
                                  {children}
                                </strong>
                              ),
                              em: ({ children }) => (
                                <em className="italic">{children}</em>
                              ),
                              code: ({ children }) => (
                                <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono text-card-foreground">
                                  {children}
                                </code>
                              ),
                              pre: ({ children }) => (
                                <pre className="bg-muted p-2 rounded text-xs overflow-x-auto mb-3 text-card-foreground">
                                  {children}
                                </pre>
                              ),
                            }}
                          >
                            {part.text}
                          </ReactMarkdown>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted border border-border rounded-lg rounded-bl-none px-4 py-3 max-w-[85%]">
                  <div className="flex items-center gap-1">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span className="text-sm text-muted-foreground">
                      AI is thinking...
                    </span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 sm:p-5 border-t border-border bg-card">
            <form onSubmit={handleSubmit} className="flex gap-2 sm:gap-3">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about your report..."
                className="flex-1 h-10 sm:h-11 bg-background border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm sm:text-base"
                disabled={isTyping}
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim() || isTyping}
                className="h-10 sm:h-11 w-10 sm:w-11 text-primary-foreground px-4 bg-primary rounded-lg shadow-sm hover:opacity-90 transition-opacity"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 mb-0 right-4 sm:right-4 z-50 p-2 flex flex-row gap-2 rounded-lg bg-card/75 backdrop-blur border border-border sm:mb-4">
        <Button
          onClick={() => {
            setIsExpanded(!isExpanded);
            console.log("AI clicked");
          }}
          size={"icon"}
          className={`h-12 w-12 bg-primary text-primary-foreground hover:opacity-90 transition-opacity`}
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </Button>
      </div>
    </>
  );
}
