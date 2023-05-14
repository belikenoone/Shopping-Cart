import React, { useContext } from "react";
import image1 from "../../assets/image-1.jpg";
import image2 from "../../assets/image-2.jpg";
import image3 from "../../assets/image-3.jpg";
import image4 from "../../assets/image-4.jpg";
import image5 from "../../assets/image-5.jpg";
import image6 from "../../assets/image-6.jpg";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import CartContext from "../../store/CartContext";
export default function ProductContainer({ theme }) {
  const products_data = [
    { id: 1, title: "Brown Boots", image: image1, qty: 1, price: 500 },
    { id: 2, title: "White Sneakers", image: image2, qty: 1, price: 700 },
    { id: 3, title: "Yellow Robe", image: image3, qty: 1, price: 1200 },
    { id: 4, title: "Blue Girl's Denim", image: image4, qty: 1, price: 2500 },
    { id: 5, title: "Pink Bow Tie", image: image5, qty: 1, price: 300 },
    { id: 6, title: "Winter Scarf", image: image6, qty: 1, price: 800 },
  ];
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <Grid
      container
      spacing={2}
      justifyItems={"center"}
      alignItems={"center"}
      mt={4}
      width={"90%"}
      mx={"auto"}
    >
      {products_data.map((prod) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={prod.id}>
          <Card
            sx={{
              bgcolor: `${theme === "dark" ? "primary" : "#2C3A47"}`,
            }}
          >
            <CardMedia component={"img"} image={prod.image} height={"200"} />
            <CardContent>
              <Typography variant="h5" color={"white"}>
                {prod.title}
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography color={"white"} fontWeight={"bold"}>
                ${prod.price}
              </Typography>
              {!cart.some((item) => item.id === prod.id) ? (
                <Button variant="contained" onClick={() => addToCart(prod)}>
                  Add To Cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ bgcolor: "red", "&:hover": { bgcolor: "red" } }}
                  onClick={() => removeFromCart(prod)}
                >
                  Remove From Cart
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
