export const color = [
  "White",
  "Black",
  "Grey",
  "Beige",
  "Brown",
  "Pink",
  "Red",
  "Orange",
  "Yellow",
  "Green",
  "Blue",
  "Purple",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "grey", label: "Grey" },
      { value: "beige", label: "Beige" },
      { value: "brown", label: "Brown" },
      { value: "pink", label: "Pink" },
      { value: "red", label: "Red" },
      { value: "orange", label: "Orange" },
      { value: "yellow", label: "Yellow" },
      { value: "green", label: "Green" },
      { value: "blue", label: "Blue" },
      { value: "purple", label: "Purple" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "160-399", label: "PKR 160 To 399" },
      { value: "400-999", label: "PKR 400 To 999" },
      { value: "1000-1999", label: "PKR 1000 To 1999" },
      { value: "2000-2999", label: "PKR 2000 To 2999" },
      { value: "4000-4999", label: "PKR 4000 To 4999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      {
        value: "10",
        label: "10% and Above",
      },
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "70", label: "70% and Above" },
      { value: "80", label: "80% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "oit_of_stock", label: "Out of Stock" },
    ],
  },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
