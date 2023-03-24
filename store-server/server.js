// sk_test_51MOZoZCETHr9JijnEloBvAb9PeGP5KAka9sE8yGrVGDREm8GnK8eKAnk8QdRaHpHOmrx0uAYly4QpXUrcnIl1k5C00BWTPeSnM;
// coffe price_1MOZt6CETHr9JijnYN0JeTa7
// sunglasses price_1MOZuQCETHr9JijnQGhM3Fyo
// camera price_1MOZvOCETHr9JijnJYotG7jS

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MOZoZCETHr9JijnEloBvAb9PeGP5KAka9sE8yGrVGDREm8GnK8eKAnk8QdRaHpHOmrx0uAYly4QpXUrcnIl1k5C00BWTPeSnM"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
