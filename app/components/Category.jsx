import React, { useState } from 'react';

function CategoryForm({ onSave, onCancel, categories }) {
  const [category, setCategory] = useState('');
  const [editingCategoryId, setEditingCategoryId] = useState(null);
  const [editedCategory, setEditedCategory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      console.error('Category is empty.');
      return;
    }

    //const newCategoryId = categories.length + 1; 

    //onSave({ id: newCategoryId, category: category });
    console.log(category);
    onSave(category);

    setCategory('');
  };

  const handleEditCategory = (categoryId) => {
    const categoryToEdit = categories.find((category) => category.id === categoryId);
    if (categoryToEdit) {
      setEditingCategoryId(categoryId);
      setEditedCategory(categoryToEdit.category);
    }
  };

  const handleSaveEditedCategory = () => {
    if (!editedCategory) {
      console.error('Edited category is empty.');
      return;
    }
    
    setEditingCategoryId(null);
    setEditedCategory('');
  };

  const handleDeleteCategory = (categoryId) => {
    deleteCategoryFromServer(categoryId)
      .then(() => {
        const updatedCategories = categories.filter(category => category.id !== categoryId);
        setCategories(updatedCategories);
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Category Name:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button type="submit" className="button">
          ADD
        </button>
        <button
          className="button"
          onClick={onCancel}
          style={{ backgroundColor: "red", marginLeft: "2px" }}
        >
          Cancel
        </button>
      </div>
      <div>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>
              {editingCategoryId === category.id ? (
                <div>
                  <input
                    type="text"
                    value={editedCategory}
                    onChange={(e) => setEditedCategory(e.target.value)}
                  />
                  <button onClick={handleSaveEditedCategory}>Save</button>
                </div>
              ) : (
                <div>
                  {category.category}
                  <button
                    onClick={() => handleEditCategory(category.id)}
                    style={{ marginLeft: "8px" }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(category.id)}
                    style={{ marginLeft: "8px", color: "red" }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default CategoryForm;



