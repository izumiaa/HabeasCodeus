import { z } from 'zod'

//the schema specifies that a valid chat message object should have three properties
export const MessageSchema = z.object({
  id: z.string(),
  text: z.string(),
  isUserMessage: z.boolean(),
})

//validator for an array of messages
export const MessageArraySchema = z.array(MessageSchema)

export type Message = z.infer<typeof MessageSchema>