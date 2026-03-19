export default function handler(req, res) {
  res.status(200).json({
    tools: [
      {
        name: "hello",
        description: "Says hello",
        input_schema: {
          type: "object",
          properties: {}
        }
      }
    ]
  });
}
