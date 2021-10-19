exports.getMessages = `
SELECT array(
  SELECT jsonb_build_object(
    'text', text,
    'message_id', messageId,
    'sender_id', senderId,
    'recipent_id', recipentId,
    'timestamp', timestamp
  )
  FROM messages 
  WHERE recipent_id = $1 
  AND sender_id = $2 
  UNION ALL 
  SELECT * 
  FROM messages 
  WHERE recipent_id = $2 
  AND sender_id = $1;
)`;
