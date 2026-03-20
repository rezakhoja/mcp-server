export default function handler(req, res) {
  res.status(200).json({
    tools: [
      {
        name: "hello",
        description: "Simple test tool",
        input_schema: {
          type: "object",
          properties: {
            name: { type: "string" }
          },
          required: ["name"]
        }
      }
    ]
  });
}
