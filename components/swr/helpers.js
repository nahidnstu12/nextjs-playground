import useSWR from "swr";
import { useRouter } from "next/router";

export function useUsers(page, limit, search) {
  let url = `/users?_sort=createdAt&_order=desc`;
  if (search) {
    url = `${url}&q=${search}`;
  } else {
    url = `${url}&_page=${page}&_limit=${limit}`;
  }

  const { data, error, mutate } = useSWR(url);

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}

export function useUser(id) {
  const { data, error } = useSWR(id ? `/users/${id}` : null);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export const getQueryUrl = () => {
  const router = useRouter();
  const { query } = router;
  let page = Number(query.page) >= 1 ? Number(query.page) : 1;
  let limit = Number(query.limit) >= 10 ? Number(query.limit) : 10;
  let search = query.search || "";

  return {
    router,
    page,
    limit,
    search,
  };
};
