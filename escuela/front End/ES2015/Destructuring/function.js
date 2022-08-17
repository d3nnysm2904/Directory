const order = {
  variety: "green",
  teaName: "silver needle",
  origin: "taiwan",
  price: 12.99,
  hasCaffeine: true,
  ///quantity:4
};

// function checkout (tea) {
//     const { price , quantity } =tea

//     return price *quantity
// }

// this is the same but we donts use anything other than price and quantity  and assuming there is not quantity we set it to qty

//quan
function checkout({ quantity: qty = 2, price }) {
  return qty * price;
}

const longJumpResults = ["Tammy", "Jessica", "Violet"];
const swimMeetResults = ["Japan", "France", "Chile"];

//this is based on index position

function awardMedals([gold, silver, bronze]) {
  return {
    gold,
    silver,
    bronze,
  };
}
