import supabase from "./supabase";
export default async function sendMessage(newMessage) {
  const { data, error } = await supabase
    .from("messages")
    .insert([newMessage])
    .select();
  if (error) throw new Error("Error sending message");
  return data;
}
