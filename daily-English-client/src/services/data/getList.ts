// @ts-ignore: alias错误
import { request } from "@/utils/api.ts";

export interface getResponse {
  download_url: string;
  git_url: string;
  html_url: string;
  name: string;
  path: string;
  sha: string;
  size: number;
  type: string;
  url: string;
}
export async function get(): Promise<getResponse[]> {
  return request("/daily-punch");
}
