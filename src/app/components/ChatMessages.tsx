"use client";

import { MessagesContext } from "@/context/messages";
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes, useContext } from "react";
import MarkdownLite from "./MarkdownLite";
import { retrieveCategory } from "../matchingAlgo";

// send category result to be used in ChatInput.tsx

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  //messages is an array containing all messages in the convo
  const { messages } = useContext(MessagesContext);
  const inverseMessages = [...messages].reverse();
  // console.log("length of messages", messages.length);
  // console.log(messages);

  // messages look like this:
  // [
  //   { id: 'bjgma39OroC-ON5J23pRd', text: 'Hello, how can I help you?', isUserMessage: false },
  //   { id: '1rMSDfVwGODsqRHG0cUUi', isUserMessage: false, text: 'As an AI language model, I do not have access to personalized legal advice. However, I can provide general information and assist with legal questions to the best of my knowledge.' },
  //   { id: 'inkTMprfILM0V6fGOxjnr', isUserMessage: true, text: 'what is the law' },
  //   { id: '4fd0q7u6fOVDt57l4Pxvr', isUserMessage: false, text: 'The law is a system of rules and regulations that govern society. It is enforced by governmental bodies, such as courts, judges, lawyers, and other legal professionals.' }
  // ];

  // create an array of just the 'text' strings
  const textArray: string[] = messages.map((message) => message.text);
  // console.log(textArray);
  // call the function retrieveLawyers which will recommend lawyers based on category matching
  const promptsCategory = retrieveCategory(textArray);
  localStorage.setItem("categoryToExport", JSON.stringify(promptsCategory));
  // console.log(promptsCategory);

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch",
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map((message) => {
        return (
          <div className="chat-message" key={`${message.id}-${message.id}`}>
            <div
              className={cn("flex items-end", {
                "justify-end": message.isUserMessage,
              })}
            >
              <div
                className={cn(
                  "flex flex-col space-y-2 text-sm max-w-xs mx-2 overflow-x-hidden",
                  {
                    "order-1 items-end": message.isUserMessage,
                    "order-2 items-start": !message.isUserMessage,
                  }
                )}
              >
                <p
                  className={cn("px-4 py-2 rounded-lg", {
                    "bg-blue-600 text-white": message.isUserMessage,
                    "bg-gray-200 text-gray-900": !message.isUserMessage,
                  })}
                >
                  <MarkdownLite text={message.text} />
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatMessages;
