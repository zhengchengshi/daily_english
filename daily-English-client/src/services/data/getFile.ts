// @ts-ignore: alias错误
import { request } from "@/utils/api.ts";
interface getRequest {
  file: string;
}
export interface getResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}
export async function get(params: getRequest): Promise<getResponse> {
  try {
    return request(`/daily-punch/${params}?ref=main`);
  } catch (error) {
    console.error(error);
  }
}
