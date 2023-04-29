import { MicroCMSQueries, createClient } from "microcms-js-sdk";

const client = createClient({
    serviceDomain: import.meta.env.SERVICE_DOMAIN,
    apiKey: import.meta.env.API_KEY,
});

export const getBlogs = async (queries: MicroCMSQueries) => {
    return await client.get({endpoint: "blog", queries });
};

export const getBlogDetail = async (blogId: string, queries?: MicroCMSQueries) => {
    return await client.getListDetail({endpoint: "blog", contentId: blogId, queries });
};