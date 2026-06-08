import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "wordpress-mcp",
  version: "1.0.0"
});

server.tool(
  "hello",
  "Simple test tool",
  {},
  async () => {
    return {
      content: [
        {
          type: "text",
          text: "Hello from WordPress MCP!"
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();

await server.connect(transport);