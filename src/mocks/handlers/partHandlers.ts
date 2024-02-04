import { http, HttpResponse } from "msw";

export const partHandlers = [
  http.get("/api/parts/:id", ({ params }) => {
    return HttpResponse.json({
      id: params.id,
      name: "Part " + params.id,
      description: "This is mocked part " + params.id,
    });
  }),
];
