// GET: '/api/messages/:userId?rec=:recipientId'
// Response:

export default {
  body: {
    messages: [
      {
        text: 'I\'m headed to Fort Collins, do you not understand how to use this app?',
        message_id: 11113,
        sender_id: 12345,
        recipient_id: 12346,
        timestamp: 'datetime', // TODO: change to accurate postgresql timestamp output
      },
      {
        text: 'Sure, where are you headed to?',
        message_id: 11112,
        sender_id: 12346,
        recipient_id: 12345,
        timestamp: 'datetime', // TODO: change to accurate postgresql timestamp output
      },
      {
        text: 'Hey, can you give me a ride?',
        message_id: 11111,
        sender_id: 12345,
        recipient_id: 12346,
        timestamp: 'datetime', // TODO: change to accurate postgresql timestamp output
      },
    ],
  },
};
