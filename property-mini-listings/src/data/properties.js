import apartment from "../assets/apartment.jpg";
import villa from "../assets/villa.jpg";
import penthouse from "../assets/penthouse.jpg";
import cottage from "../assets/cottage.jpg";

export default [
  {
    id: 1,
    title: "Luxury Beach Apartment",
    location: "Camps Bay",
    price: 3200,
    type: "Apartment",
    available: true,
    image: apartment,
  },
  {
    id: 2,
    title: "Ocean View Villa",
    location: "Clifton",
    price: 6500,
    type: "Villa",
    available: false,
    image: villa,
  },
  {
    id: 3,
    title: "Modern City Loft",
    location: "Sea Point",
    price: 2800,
    type: "Loft",
    available: true,
    image: penthouse,
  },
  {
    id: 4,
    title: "Cozy Cottage",
    location: "Constantia",
    price: 2100,
    type: "Cottage",
    available: true,
    image: cottage,
  },
];
