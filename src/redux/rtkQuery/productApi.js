import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../api/index";

const ENUMS = {
  products: "products",
  categoryId: "category_id",
};

export const productAPI = createApi({
  reducerPath: "api/productAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Products"],
    }),
    getAllCategories: builder.query({
      query: () => "categories",
      providesTags: ["Category"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `${ENUMS.products}/${id}`,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${ENUMS.products}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `categories/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),

    createProduct: builder.mutation({
      query: (product) => ({
        url: ENUMS.products,
        method: "POST",
        body: {
          ...product,
          date_added: new Date().toISOString().split("T")[0],
        },
      }),
      invalidatesTags: ["Products"],
    }),
    createCategory: builder.mutation({
      query: (categories) => ({
        url: "categories",
        method: "POST",
        body: {
          ...categories,
          date_added: new Date().toISOString().split("T")[0],
        },
      }),
      invalidatesTags: ["Category"],
    }),

    partialUpdateProduct: builder.mutation({
      query: (product) => ({
        url: `${ENUMS.products}/${product.id}`,
        method: "PATCH",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),

    partialUpdateCategory: builder.mutation({
      query: (categories) => ({
        url: `categories/${categories.id}`,
        method: "PATCH",
        body: categories,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetAllCategoriesQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useDeleteCategoryMutation,
  useCreateProductMutation,
  useCreateCategoryMutation,
  usePartialUpdateProductMutation,
  usePartialUpdateCategoryMutation,
} = productAPI;
