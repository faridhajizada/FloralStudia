import React, { useState } from "react";
import {
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  usePartialUpdateProductMutation,
} from "../../../redux/rtkQuery/productApi";

function GetCategories() {
  const { data: products, error, isLoading } = useGetAllCategoriesQuery();
  const [deleteProduct] = useDeleteCategoryMutation();
  const [createProduct] = useCreateCategoryMutation();
  const [updateProduct] = usePartialUpdateProductMutation();

  const [productForm, setProductForm] = useState({
    id: null,
    title: "",
    price: "",
    category_id: "",
    discount: "",
    status: "",
    rating: "",
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка загрузки продуктов.</p>;

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Вы уверены, что хотите удалить этот продукт?"
    );
    if (!confirmed) return;

    try {
      await deleteProduct(id).unwrap();
      console.log("Продукт успешно удален");
    } catch (error) {
      console.error("Не удалось удалить продукт:", error);
    }
  };

  const handleEdit = (product) => {
    setProductForm(product);
    setIsEditing(true);
  };

  const handleFormChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (isEditing) {
        await updateProduct(productForm).unwrap();
        console.log("Продукт успешно обновлен");
      } else {
        await createProduct(productForm).unwrap();
        console.log("Продукт успешно добавлен");
      }
      resetForm();
    } catch (error) {
      console.error("Не удалось сохранить продукт:", error);
    }
  };

  const resetForm = () => {
    setProductForm({
      id: null,
      title: "",
      price: "",
      category_id: "",
      discount: "",
      status: "",
      rating: "",
      image: "",
    });
    setIsEditing(false);
  };

  return (
    <div>
      <div className="container">
        <h1 className="text-center my-4">Список продуктов</h1>

        <form className="mb-4">
          <div className="form-group">
            <label>Название</label>
            <input
              type="text"
              name="title"
              value={productForm.title}
              onChange={handleFormChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Цена</label>
            <input
              type="number"
              name="price"
              value={productForm.price}
              onChange={handleFormChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>ID Категории</label>
            <input
              type="number"
              name="category_id"
              value={productForm.category_id}
              onChange={handleFormChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Скидка</label>
            <input
              type="number"
              name="discount"
              value={productForm.discount}
              onChange={handleFormChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Статус</label>
            <input
              type="text"
              name="status"
              value={productForm.status}
              onChange={handleFormChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Рейтинг</label>
            <input
              type="number"
              name="rating"
              value={productForm.rating}
              onChange={handleFormChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Ссылка на изображение</label>
            <input
              type="text"
              name="image"
              value={productForm.image}
              onChange={handleFormChange}
              className="form-control"
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={handleSave}
          >
            {isEditing ? "Обновить продукт" : "Добавить продукт"}
          </button>
          {isEditing && (
            <button
              type="button"
              className="btn btn-secondary ml-2"
              onClick={resetForm}
            >
              Отмена
            </button>
          )}
        </form>

        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Название</th>
              <th scope="col">Цена</th>
              <th scope="col">ID Категории</th>
              <th scope="col">Скидка</th>
              <th scope="col">Статус</th>
              <th scope="col">Рейтинг</th>
              <th scope="col">Изображение</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, indx) => (
              <tr key={indx}>
                <th>{product.id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.category_id}</td>
                <td>{product.discount}</td>
                <td>{product.status}</td>
                <td>{product.rating}</td>
                <td>
                  {product.image ? (
                    <>
                      <img
                        src={`${product.image}`}
                        alt={product.title}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </>
                  ) : (
                    <p>Нет изображения</p>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Удалить
                  </button>
                  <button
                    className="btn btn-primary ml-2"
                    onClick={() => handleEdit(product)}
                  >
                    Редактировать
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetCategories;
