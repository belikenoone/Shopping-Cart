import React, { useContext } from "react";
import CartContext from "../store/CartContext";
import {
  Typography,
  Container,
  ListItemButton,
  List,
  ListSubheader,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";
export default function Cart() {
  const { cart, increaseQty, decreaseQty } = useContext(CartContext);
  const cartTotal = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.qty;
  }, 0);
  return (
    <div>
      {cart.length > 0 ? (
        <Container>
          <List
            sx={{ bgcolor: "background.paper" }}
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Cart Items
              </ListSubheader>
            }
          >
            {cart.map((item) => (
              // <Typography variant="h4" align="center">
              //   {item.title}
              // </Typography>
              <ListItemButton>
                <ListItemText
                  primary={item.title}
                  secondary={`$${item.price}`}
                />
                <ListItemIcon
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Button variant="outlined" onClick={() => increaseQty(item)}>
                    +
                  </Button>
                  <Typography>{item.qty}</Typography>
                  <Button variant="outlined" onClick={() => decreaseQty(item)}>
                    -
                  </Button>
                </ListItemIcon>
              </ListItemButton>
              //   <ListItem>{item.title}</ListItem>
            ))}
            <Typography variant="h4" px={2} align="center">
              The total is: ${cartTotal}
            </Typography>
          </List>
        </Container>
      ) : (
        <Typography variant="h2" align="center" py={2}>
          Cart is empty
        </Typography>
      )}
    </div>
  );
}
