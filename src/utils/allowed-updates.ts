import { Update } from "@grammyjs/types"

const allowedUpdates: ReadonlyArray<Exclude<keyof Update, "update_id">> = [
  "message",
]

export default allowedUpdates
