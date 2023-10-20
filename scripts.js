start = document.getElementById("startBtn");
titleBox = document.getElementById("title_box");
newRecipe = document.getElementById("recipe");
dinnerTitle = document.getElementById("dinnerTitle");
dinnerDesc = document.getElementById("desc");
dinnerImg = document.getElementById("food_img");
tryAgain = document.getElementById("tryAgain");
linkHref = document.getElementById("youtubeLink");
confirmBtn = document.getElementById("confirm");

link = "https://www.youtube.com/results?search_query="
newName = ""
currentNumber = ""




start.onclick = () => {
    titleBox.style.display = "none";
    recipe.style.display = "block";
    dinnerTitle.classList.add("run-animation");
    dinnerDesc.classList.add("run-animation");
    confirmBtn.classList.add("run-animation");
    getRecipe();
}

// Attach an event listener to the "Try Again" button
tryAgain.onclick = () => {
    dinnerTitle.preventDefault;
    dinnerDesc.preventDefault;
    confirmBtn.preventDefault;
  
    
    dinnerTitle.classList.remove("run-animation");
    dinnerDesc.classList.remove("run-animation");
    confirmBtn.classList.remove("run-animation");

    void dinnerTitle.offsetWidth;
    void dinnerDesc.offsetWidth;
    void confirmBtn.offsetWidth;

    dinnerTitle.classList.add("run-animation");
    dinnerDesc.classList.add("run-animation");
    confirmBtn.classList.add("run-animation");
    getRecipe();
};

function getRecipe() {
    const randomRecipeNumber = String(Math.floor(Math.random() * 200) + 1);
    if(currentNumber == randomRecipeNumber){
        getRecipe()
    }
    else{
        currentNumber = randomRecipeNumber;
        const { name, description, image } = dinnerOptions[randomRecipeNumber];

        const newName = name.split(' ').join('+');
        linkHref.href = link + newName;
        
        dinnerTitle.innerHTML = name;
        dinnerDesc.innerHTML = description;
        dinnerImg.src = image;
    }
  }



const dinnerOptions = {
        "1": {
            name: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish featuring a creamy sauce made with eggs, cheese, pancetta, and black pepper.",
            image: "images/SCarbonara.jpg"
        },
        "2": {
            name: "Chicken Alfredo",
            description: "A creamy pasta dish with tender pieces of chicken, served in a rich Alfredo sauce with fettuccine noodles.",
            image: "images/CAlfredo.jpg"
        },
        "3": {
            name: "Beef Stroganoff",
            description: "Tender strips of beef cooked in a creamy mushroom sauce and typically served over egg noodles or rice.",
            image: "images/BStroganoff.jpg"
        },
        "4": {
            name: "Shrimp Scampi",
            description: "Delicious shrimp sautéed in garlic, butter, and white wine, often served over linguine or angel hair pasta.",
            image: "images/SScampi.avif"
        },
        "5": {
            name: "BBQ Ribs",
            description: "Succulent ribs coated with barbecue sauce and slow-cooked until they're tender and flavorful.",
            image: "images/BBQRibs.avif"
        },
        "6": {
            name: "Tacos",
            description: "A Mexican favorite featuring seasoned meat, fresh toppings, and tortillas for a customizable meal.",
            image: "images/Tacos.avif"
        },
        "7": {
            name: "Chicken Fajitas",
            description: "Sliced chicken and colorful bell peppers cooked with fajita seasoning, perfect for assembling in tortillas.",
            image: "images/CFajitas.avif"
        },
        "8": {
            name: "Vegetable Stir-Fry",
            description: "A healthy and vibrant dish with a variety of fresh vegetables stir-fried in a savory sauce.",
            image: "images/VStirfry.avif"
        },
        "9": {
            name: "Baked Salmon",
            description: "Salmon fillets baked with herbs, lemon, and butter for a simple and nutritious seafood meal.",
            image: "images/BSalmon.avif"
        },
        "10": {
            name: "Margherita Pizza",
            description: "A classic Italian pizza topped with tomatoes, mozzarella, fresh basil, and olive oil.",
            image: "images/MPizza.avif"
        },
        "11": {
            name: "Beef Tacos",
            description: "A hearty taco filling made with seasoned ground beef, perfect for taco night.",
            image: "images/beefTacos.avif"
        },
        "12": {
            name: "Teriyaki Chicken",
            description: "Chicken marinated in a sweet and savory teriyaki sauce, grilled or pan-fried to perfection.",
            image: "images/chickenTeryaki.avif"
        },
        "13": {
            name: "Chicken Parmesan",
            description: "Breaded chicken cutlets topped with marinara sauce and melted cheese, often served over spaghetti.",
            image: "images/chickenParm.avif"
        },
        "14": {
            name: "Beef and Broccoli",
            description: "Sliced beef and broccoli florets stir-fried in a flavorful sauce, typically served with rice.",
            image: "images/beefBroccoli.avif"
        },
        "15": {
            name: "Mushroom Risotto",
            description: "A creamy Italian rice dish cooked with mushrooms, wine, and cheese, known for its rich and earthy flavors.",
            image: "images/mushroomRisotto.avif"
        },
        "16": {
            name: "Cheese-Burger",
            description: "An American classic with a cheesy topped beef patty served between 2 buns. Put whatever topings on that you'd like.",
            image: "images/cheeseburger.jpeg"
        },
        "17": {
            name: "Lemon Garlic Shrimp",
            description: "Plump shrimp cooked in a lemony garlic butter sauce, great for serving over pasta or rice.",
            image: "images/lemonShrimp.avif"
        },
        "18": {
            name: "Vegetarian Chili",
            description: "A hearty and flavorful chili made with beans, vegetables, and a blend of spices, suitable for vegetarians.",
            image: "images/veggieChili.avif"
        },
        "19": {
            name: "Greek Salad",
            description: "A refreshing salad featuring cucumbers, tomatoes, olives, feta cheese, and a tangy vinaigrette.",
            image: "images/greekSalad.avif"
        },
        "20": {
            name: "Roast Chicken",
            description: "A whole chicken roasted to golden perfection, often seasoned with herbs and served with roasted vegetables.",
            image: "images/roastChicken.avif"
        },
        "21": {
            name: "Beef and Mushroom Stew",
            description: "A hearty stew made with tender beef chunks, mushrooms, and a rich broth, perfect for a cozy dinner.",
            image: "images/beefStew.avif"
        },
        "22": {
            name: "Vegetable Curry",
            description: "A flavorful and spicy curry with a variety of vegetables, served with rice or naan bread.",
            image: "images/vegetableCurry.avif"
        },
        "23": {
            name: "Tofu Stir-Fry",
            description: "A vegetarian stir-fry with tofu, crisp vegetables, and a savory stir-fry sauce.",
            image: "images/tofuStirfry.avif"
        },
        "24": {
            name: "Sausage and Peppers",
            description: "Sliced sausage links cooked with bell peppers and onions, often served in a sandwich or over rice.",
            image: "images/sausageNPeppers.avif"
        },
        "25": {
            name: "Pesto Pasta",
            description: "Pasta tossed in a creamy pesto sauce made from fresh basil, garlic, pine nuts, and Parmesan cheese.",
            image: "images/pestoPasta.avif"
        },
        "26": {
            name: "Caprese Salad",
            description: "A simple and elegant salad with ripe tomatoes, fresh mozzarella, basil leaves, and balsamic glaze.",
            image: "images/capreseSalad.avif"
        },
        "27": {
            name: "Tofu Scramble",
            description: "A vegan breakfast option made with scrambled tofu, vegetables, and seasonings for a satisfying morning meal.",
            image: "images/tofuScramble.avif"
        },
        "28": {
            name: "Pad Thai",
            description: "A classic Thai stir-fry noodle dish featuring rice noodles, shrimp or chicken, and a tangy tamarind sauce.",
            image: "images/padThai.avif"
        },
        "29": {
            name: "Beef and Noodle Soup",
            description: "A comforting soup with tender beef, noodles, and flavorful broth, perfect for cold days.",
            image: "images/beefNoodleSoup.avif"
        },
        "30": {
            name: "Sushi Rolls",
            description: "Delicious rolls made with sushi rice, seafood, vegetables, and seaweed, often served with soy sauce and wasabi.",
            image: "images/sushiRolls.avif"
        },
        "31": {
            name: "Spaghetti Bolognese",
            description: "A classic Italian pasta dish with a rich and savory meat sauce, often served over spaghetti.",
            image: "images/spaghettiBolognese.avif"
        },
        "32": {
            name: "Baked Ziti",
            description: "A baked pasta dish with ziti noodles, marinara sauce, ricotta cheese, and melted mozzarella on top.",
            image: "images/bakedZiti.webp"
        },
        "33": {
            name: "Chicken Pot Pie",
            description: "A comforting and hearty pie filled with tender chunks of chicken and vegetables in a creamy sauce.",
            image: "images/chickenPotPie.webp"
        },
        "34": {
            name: "Lemon Herb Roast Chicken",
            description: "A succulent roast chicken with a lemon and herb seasoning, resulting in a flavorful and aromatic dish.",
            image: "images/lemonHerbRoastChicken.webp"
        },
        "35": {
            name: "Cilantro Lime Rice",
            description: "Fragrant and zesty rice cooked with cilantro and lime, an excellent side dish for various meals.",
            image: "images/cilantroLimeRice.webp"
        },
        "36": {
            name: "Tuna Salad",
            description: "A classic salad made with canned tuna, mayonnaise, and various mix-ins, often used in sandwiches or on a bed of greens.",
            image: "images/tunaSalad.webp"
        },
        "37": {
            name: "Beef and Rice Casserole",
            description: "A baked casserole with seasoned ground beef, rice, and vegetables, often topped with cheese.",
            image: "images/beefRiceCasserole.webp"
        },
        "38": {
            name: "Ratatouille",
            description: "A colorful and flavorful French dish made with eggplant, zucchini, tomatoes, and herbs.",
            image: "images/ratatouille.webp"
        },
        "39": {
            name: "Greek Souvlaki",
            description: "Marinated and grilled skewers of meat, often served with pita bread, yogurt sauce, and vegetables.",
            image: "images/greekSouvlaki.webp"
        },
        "40": {
            name: "Chicken Quesadillas",
            description: "Tortillas filled with chicken, cheese, and various toppings, toasted until the cheese melts.",
            image: "images/chickenQuesadillas.webp"
        },
        "41": {
            name: "Eggplant Parmesan",
            description: "Slices of eggplant breaded and fried, then layered with marinara sauce and melted cheese.",
            image: "images/eggplantParm.webp"
        },
        "42": {
            name: "Beef and Cheese Enchiladas",
            description: "Tortillas filled with seasoned beef and cheese, smothered in enchilada sauce and baked to perfection.",
            image: "images/beefEnchiladas.webp"
        },
        "43": {
            name: "Sesame Chicken",
            description: "Crispy chicken pieces tossed in a sweet and savory sesame sauce, a favorite in Chinese-American cuisine.",
            image: "images/sesameChicken.webp"
        },
        "44": {
            name: "Veggie Burger",
            description: "A plant-based burger patty served on a bun with lettuce, tomatoes, and condiments.",
            image: "images/veggieBurger.webp"
        },
        "45": {
            name: "Caesar Salad",
            description: "A classic salad made with romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
            image: "images/caesarSalad.webp"
        },
        "46": {
            name: "Tomato Soup",
            description: "A comforting and creamy tomato soup, perfect for pairing with grilled cheese sandwiches.",
            image: "images/tomatoSoup.webp"
        },
        "47": {
            name: "Spinach and Feta Stuffed Chicken",
            description: "Chicken breasts filled with a mixture of spinach and feta cheese, then baked until tender and cheesy.",
            image: "images/spinachFetaChicken.webp"
        },
        "48": {
            name: "Beef and Vegetable Skewers",
            description: "Chunks of beef and assorted vegetables threaded onto skewers and grilled for a flavorful meal.",
            image: "images/beefVeggieSkewers.webp"
        },
        "49": {
            name: "Black Bean Soup",
            description: "A hearty and wholesome soup made with black beans, vegetables, and a blend of spices.",
            image: "images/blackBeanSoup.webp"
        },
        "50": {
            name: "Teriyaki Salmon",
            description: "Salmon fillets marinated in a sweet and savory teriyaki sauce, grilled or baked to perfection.",
            image: "images/teryakiSalmon.webp"
        },
        "51": {
            name: "Stuffed Bell Peppers",
            description: "Bell peppers filled with a mixture of ground meat, rice, vegetables, and seasonings, baked to perfection.",
            image: "images/stuffedBellPeppers.webp"
        },
        "52": {
            name: "Hawaiian Pizza",
            description: "A pizza topped with ham, pineapple, and cheese, delivering a sweet and savory flavor combination.",
            image: "images/hawainPizza.webp"
        },
        "53": {
            name: "Grilled Shrimp Skewers",
            description: "Shrimp marinated in a zesty sauce and threaded onto skewers for a quick and flavorful grilling experience.",
            image: "images/shrimpSkewers.webp"
        },
        "54": {
            name: "Beef and Mushroom Stir-Fry",
            description: "Tender strips of beef and mushrooms stir-fried in a savory sauce, perfect with steamed rice.",
            image: "images/beefMushroomStirfry.webp"
        },
        "55": {
            name: "Honey Glazed Ham",
            description: "A succulent ham glazed with honey and spices, a classic choice for holiday dinners.",
            image: "images/honeyGlazedHam.webp"
        },
        "56": {
            name: "Chicken Tenders",
            description: "Crispy and tender chicken strips, perfect for dipping into your favorite sauces.",
            image: "images/chickenTenders.avif"
        },
        "57": {
            name: "Mango Salsa Chicken",
            description: "Grilled chicken breasts topped with a fresh and fruity mango salsa for a burst of flavor.",
            image: "images/mangoSalsaChicken.webp"
        },
        "58": {
            name: "Garlic Butter Shrimp Pasta",
            description: "Luscious pasta dish with plump shrimp, garlic, butter, and a hint of lemon for a delightful meal.",
            image: "images/garlicButterShrimpPasta.webp"
        },
        "59": {
            name: "Cajun Jambalaya",
            description: "A spicy and flavorful Louisiana dish with rice, shrimp, sausage, chicken, and Creole spices.",
            image: "images/cajunJambalaya.webp"
        },
        "60": {
            name: "Lentil Soup",
            description: "A hearty soup made with lentils, vegetables, and seasonings, providing a warm and satisfying meal.",
            image: "images/lentilSoup.webp"
        },
        "61": {
            name: "Baked Cod",
            description: "Cod fillets baked with herbs and lemon, resulting in a light and delicious seafood dish.",
            image: "images/bakedCod.webp"
        },
        "62": {
            name: "Caprese Stuffed Avocado",
            description: "Halved avocados filled with fresh mozzarella, tomatoes, basil, and balsamic glaze for a healthy appetizer or side.",
            image: "images/capreseStuffedAvocado.webp"
        },
        "63": {
            name: "Chili Con Carne",
            description: "A spicy chili with ground beef, beans, tomatoes, and chili seasonings, great for warming up on chilly days.",
            image: "images/chiliConCarne.webp"
        },
        "64": {
            name: "Baked Pork Chops",
            description: "Pork chops seasoned and baked to perfection, creating a simple and delicious meal.",
            image: "images/bakedPorkChops.webp"
        },
        "65": {
            name: "Vegetable Lasagna",
            description: "Layered lasagna with vegetables, ricotta, mozzarella, and marinara sauce, a vegetarian delight.",
            image: "images/veggieLasagna.webp"
        },
        "66": {
            name: "Orange Chicken",
            description: "Crispy chicken pieces coated in a tangy and sweet orange sauce, inspired by Chinese-American cuisine.",
            image: "images/orangeChicken.webp"
        },
        "67": {
            name: "Cilantro Lime Shrimp",
            description: "Shrimp marinated in cilantro, lime, and garlic, pan-seared for a zesty and flavorful dish.",
            image: "images/cilantroLimeShrimp.webp"
        },
        "68": {
            name: "Egg Fried Rice",
            description: "Flavorful fried rice with eggs, vegetables, and soy sauce, a popular side dish or main course.",
            image: "images/eggFriedRice.webp"
        },
        "69": {
            name: "Meatball Subs",
            description: "Savory meatballs in marinara sauce, served in a sub sandwich with melted cheese.",
            image: "images/meatballSub.webp"
        },
        "70": {
            name: "Cauliflower Rice Bowl",
            description: "A low-carb bowl with cauliflower rice, protein, and colorful vegetables, drizzled with your choice of sauce.",
            image: "images/cauliflowerRiceBowl.webp"
        },
        "71": {
            name: "Chimichurri Steak",
            description: "Grilled steak topped with a zesty chimichurri sauce made with parsley, garlic, and vinegar.",
            image: "images/chimichurriSteak.webp"
        },
        "72": {
            name: "Quinoa Salad",
            description: "A healthy salad with cooked quinoa, vegetables, and a vinaigrette dressing for a light and nutritious meal.",
            image: "images/quinoaSalad.webp"
        },
        "73": {
            name: "Seafood Pasta",
            description: "It's a delectable dish that combines a medley of fresh seafood, such as shrimp, clams, mussels, or scallops, with al dente pasta in a rich and savory sauce. ",
            image: "images/seafoodPasta.webp"
        },
        "74": {
            name: "Butter Chicken",
            description: "Creamy and flavorful Indian curry with tender pieces of chicken, best served with naan or rice.",
            image: "images/butterChicken.webp"
        },
        "75": {
            name: "Shrimp Curry",
            description: "Succulent shrimp cooked in a fragrant blend of spices and creamy coconut milk, creating a delectable and spicy culinary experience.",
            image: "images/shrimpCurry.webp"
        },
        "76": {
            name: "Dumplings",
            description: "Dough typically filled with a variety of ingredients such as ground meat, vegetables, or sweet fillings, steamed, boiled, or fried to perfection.",
            image: "images/dumplings.webp"
        },
        "77": {
            name: "Phó",
            description: "A fragrant Vietnamese noodle soup known for its aromatic broth, tender slices of beef or chicken, fresh herbs, and rice noodles.",
            image: "images/pho.webp"
        },
        "78": {
            name: "Goulash",
            description: "A hearty Hungarian stew made with beef, paprika, and assorted vegetables, often served with noodles.",
            image: "images/goulash.webp"
        },
        "79": {
            name: "Garlic Butter Steak",
            description: "Juicy steaks seared in a garlic butter sauce, delivering a simple yet delicious dining experience.",
            image: "images/garlicButterSteak.webp"
        },
        "80": {
            name: "Chickpea Curry",
            description: "A flavorful curry made with chickpeas, tomatoes, and a blend of spices, ideal for a meatless meal.",
            image: "images/chickpeaCurry.webp"
        },
        "81": {
            name: "Taco Salad",
            description: "A salad inspired by tacos, featuring seasoned meat, lettuce, cheese, tomatoes, and dressing.",
            image: "images/tacoSalad.webp"
        },
        "82": {
            name: "Fried Chicken Sandwich",
            description: "Batterd and fried piece of chicken in between 2 buns with any topings you like.",
            image: "images/friedChickenSandwich.webp"
        },
        "83": {
            name: "Lobster Bisque",
            description: "A creamy and luxurious soup made with lobster meat, often served as an appetizer.",
            image: "images/lobsterBisque.webp"
        },
        "84": {
            name: "Pineapple Fried Rice",
            description: "Fried rice with pineapple, shrimp, and a medley of vegetables, offering a sweet and savory combination.",
            image: "images/pineappleFriedRice.webp"
        },
        "85": {
            name: "Sausage and Pepper Sandwich",
            description: "Sliced sausages sautéed with bell peppers and onions wrapped up in a hoagie roll.",
            image: "images/sausagePeppersSandwich.webp"
        },
        "86": {
            name: "Stuffed Mushrooms",
            description: "Mushroom caps filled with a savory mixture of breadcrumbs, herbs, and cheese, baked to perfection.",
            image: "images/stuffedMushrooms.webp"
        },
        "87": {
            name: "Chicken Francese",
            description: "Chicken cutlets dipped in a light, lemony egg batter, sautéed to a golden perfection, and finished off with a drizzle of zesty lemon butter sauce.",
            image: "images/chickenFrancese.webp"
        },
        "88": {
            name: "Teriyaki Beef",
            description: "Thinly sliced beef marinated in a sweet teriyaki sauce, often served over rice.",
            image: "images/teryakiBeef.webp"
        },
        "89": {
            name: "Lentil Curry",
            description: "A spicy and aromatic curry made with lentils, tomatoes, and a blend of Indian spices.",
            image: "images/lentilCurry.webp"
        },
        "90": {
            name: "Baked Potato",
            description: "A baked potato served with your choice of toppings, such as sour cream, cheese, and chives.",
            image: "images/bakedPotato.webp"
        },
        "91": {
            name: "Peach Glazed Salmon",
            description: "Salmon fillets glazed with a peach sauce for a sweet and tangy flavor profile.",
            image: "images/peachGlazedSalmon.webp"
        },
        "92": {
            name: "Mongolian Beef",
            description: "Sliced beef cooked with green onions in a savory soy-based sauce, inspired by Chinese cuisine.",
            image: "images/mongolianBeef.webp"
        },
        "93": {
            name: "Cauliflower Alfredo",
            description: "Creamy alfredo sauce served over roasted cauliflower for a low-carb alternative to pasta.",
            image: "images/cauliflowerAlfredo.webp"
        },
        "94": {
            name: "Salmon Poke Bowl",
            description: "A refreshing and healthy bowl with marinated salmon, rice, and a variety of toppings.",
            image: "images/salmonPokeBowl.webp"
        },
        "95": {
            name: "Tempura Shrimp",
            description: "A delectable Japanese dish featuring succulent, lightly battered shrimp that's deep-fried to a crispy golden brown.",
            image: "images/tempuraShrimp.webp"
        },
        "96": {
            name: "BBQ Pulled Pork",
            description: "Slow-cooked and tender pulled pork, seasoned and smothered in BBQ sauce, often served on a bun.",
            image: "images/bbqPulledPork.webp"
        },
        "97": {
            name: "Chicken Pannini",
            description: "Crispy flatbread filled with chicken, cheese, and various toppings, perfect for a quick meal.",
            image: "images/chickenPannini.webp"
        },
        "98": {
            name: "Roasted Brussels Sprouts",
            description: "Brussels sprouts roasted with olive oil and seasonings, resulting in a crispy and flavorful side dish.",
            image: "images/roastedBrusselSprouts.webp"
        },
        "99": {
            name: "Tofu Curry",
            description: "A vegetarian curry with tofu, vegetables, and a savory sauce, ideal for a meatless meal.",
            image: "images/tofuCurry.avif"
        },
        "100": {
            name: "Pumpkin Soup",
            description: "A creamy and comforting soup made with pumpkin, spices, and a touch of cream, perfect for fall.",
            image: "images/pumpkinSoup.webp"
        },
        "101": {
            name: "Sesame Crusted Ahi Tuna",
            description: "Sushi-grade ahi tuna coated in sesame seeds and seared to perfection, served with a soy ginger dipping sauce.",
            image: "images/sesameTuna.webp"
        },
        "102": {
            name: "Mango Chicken Curry",
            description: "Tender chicken simmered in a flavorful mango and coconut milk curry sauce, offering a sweet and savory blend.",
            image: "images/mangoChickenCurry.webp"
        },
        "103": {
            name: "Quinoa-Stuffed Bell Peppers",
            description: "Bell peppers filled with a mixture of quinoa, vegetables, and spices, baked to perfection.",
            image: "images/quinoaStuffedPeppers.webp"
        },
        "104": {
            name: "Cajun Shrimp Pasta",
            description: "Spicy shrimp and linguine in a creamy Cajun Alfredo sauce with bell peppers and onions.",
            image: "images/cajunShrimpPasta.webp"
        },
        "105": {
            name: "Grilled Portobello Mushrooms",
            description: "Portobello mushrooms marinated in balsamic vinaigrette and grilled for a meaty vegetarian dish.",
            image: "images/grilledPortobellaMushrooms.webp"
        },
        "106": {
            name: "Korean Bulgogi",
            description: "Thinly sliced marinated beef, grilled and served with steamed rice and kimchi, a classic Korean dish.",
            image: "images/koreanBulgogi.webp"
        },
        "107": {
            name: "Crispy Baked Chicken Tenders",
            description: "Tender chicken tenders coated in a crispy panko crust, baked to golden perfection.",
            image: "images/bakedChickenTenders.webp"
        },
        "108": {
            name: "Mediterranean Quinoa Salad",
            description: "A refreshing salad with quinoa, cherry tomatoes, cucumbers, olives, and a zesty lemon vinaigrette.",
            image: "images/mediterraneanQuinoaSalad.webp"
        },
        "109": {
            name: "Tandoori Cauliflower",
            description: "Cauliflower florets marinated in tandoori spices and roasted to perfection, a flavorful vegetarian option.",
            image: "images/tandooriCauliflower.webp"
        },
        "110": {
            name: "Lamb Kebabs",
            description: "Marinated lamb chunks skewered and grilled to a succulent and aromatic delight.",
            image: "images/lambKebabs.webp"
        },
        "111": {
            name: "Stuffed Acorn Squash",
            description: "Acorn squash halves filled with a mixture of quinoa, dried cranberries, and pecans, roasted to perfection.",
            image: "images/stuffedAcornSquash.webp"
        },
        "112": {
            name: "Shrimp and Grits",
            description: "Creamy cheddar grits served with sautéed shrimp and a savory gravy, a classic Southern comfort dish.",
            image: "images/shrimpGrits.webp"
        },
        "113": {
            name: "Panang Curry",
            description: "A rich and aromatic Thai curry made with tender slices of beef, coconut milk, and Panang curry paste.",
            image: "images/panangCurry.webp"
        },
        "114": {
            name: "Orange Glazed Salmon",
            description: "Salmon fillets glazed with a sweet and tangy orange sauce, offering a burst of citrusy flavor.",
            image: "images/orangeGlazedSalmon.webp"
        },
        "115": {
            name: "Bulgur Salad",
            description: "A refreshing salad made with cooked bulgur, fresh herbs, cucumbers, and tomatoes, dressed with lemon vinaigrette.",
            image: "images/bulgarSalad.jpeg"
        },
        "116": {
            name: "Coq au Vin",
            description: "A classic French chicken stew cooked with red wine, mushrooms, and pearl onions, resulting in a rich and comforting dish.",
            image: "images/coqAuVin.webp"
        },
        "117": {
            name: "Eggplant Lasagna",
            description: "Slices of breaded and fried eggplant layered with marinara sauce and cheese, baked to perfection.",
            image: "images/eggplantLasagna.webp"
        },
        "118": {
            name: "Spaghetti Aglio e Olio",
            description: "Spaghetti tossed with olive oil, garlic, red pepper flakes, and fresh parsley, a simple yet delicious Italian pasta dish.",
            image: "images/spaghettiAglioEOlio.webp"
        },
        "119": {
            name: "Miso Soup",
            description: "A traditional Japanese soup made with miso paste, seaweed, tofu, and green onions, a warm and comforting starter.",
            image: "images/misoSoup.webp"
        },
        "120": {
            name: "Lobster Roll",
            description: "Chunks of lobster meat tossed in mayonnaise and served in a buttered and toasted roll, a New England classic.",
            image: "images/lobsterRoll.webp"
        },
        "121": {
            name: "Breakfast Wrap",
            description: "Perfect meal for any time of day, can include eggs, sausage, bacon, and cheese.",
            image: "images/breakfastWrap.webp"
        },
        "122": {
            name: "Ginger Soy Glazed Salmon",
            description: "Salmon fillets glazed with a flavorful combination of ginger, soy sauce, and garlic, delivering an Asian-inspired taste.",
            image: "images/gingerSoyGlazedSalmon.webp"
        },
        "123": {
            name: "Pork Tenderloin with Apples",
            description: "Pork tenderloin roasted with apples and onions, creating a sweet and savory dish perfect for fall.",
            image: "images/porkTenderloinApples.webp"
        },
        "124": {
            name: "Shrimp Etouffee",
            description: "A Cajun and Creole dish made with shrimp smothered in a rich and flavorful roux-based sauce, served over rice.",
            image: "images/shrimpEtouffee.webp"
        },
        "125": {
            name: "Moroccan Lamb Tagine",
            description: "Lamb stew cooked with an array of Moroccan spices, dried fruits, and served over couscous.",
            image: "images/moroccanLambTagine.webp"
        },
        "126": {
            name: "Tomato Basil Bruschetta",
            description: "Toasted baguette slices topped with a flavorful mixture of tomatoes, fresh basil, garlic, and olive oil, a classic Italian appetizer.",
            image: "images/tomatoBasilBruschetta.webp"
        },
        "127": {
            name: "Spicy Pad Thai",
            description: "A classic Thai stir-fry with rice noodles, and an array of colorful vegetables, all coated in a spicy Pad Thai sauce.",
            image: "images/spicyPadThai.webp"
        },
        "128": {
            name: "Chicken Marsala",
            description: "Chicken cutlets cooked with mushrooms and Marsala wine, resulting in a rich and savory Italian dish.",
            image: "images/chickenMarsala.webp"
        },
        "129": {
            name: "Fried Catfish",
            description: "Catfish fillets coated in seasoned cornmeal and fried until crispy and golden brown, a Southern favorite.",
            image: "images/friedCatfish.webp"
        },
        "130": {
            name: "Creamy Polenta",
            description: "Creamy and comforting polenta served as a side dish, perfect for pairing with braised meats or saucy dishes.",
            image: "images/creamyPolenta.webp"
        },
        "131": {
            name: "Japanese Okonomiyaki",
            description: "A savory Japanese pancake made with shredded cabbage, meat or seafood, and a variety of toppings, a popular street food.",
            image: "images/japaneseOkonomiyaki.webp"
        },
        "132": {
            name: "Butternut Squash Risotto",
            description: "Creamy risotto made with roasted butternut squash, Parmesan cheese, and a touch of sage, a perfect fall dish.",
            image: "images/butternutSquashRisotto.webp"
        },
        "133": {
            name: "Chicken Shawarma",
            description: "Thinly sliced marinated chicken, typically served in pita bread with tahini sauce and veggies, a Middle Eastern delight.",
            image: "images/chickenShawarma.webp"
        },
        "134": {
            name: "Zucchini Noodles with Pesto",
            description: "Spiralized zucchini noodles tossed with fresh basil pesto and cherry tomatoes, a light and healthy pasta alternative.",
            image: "images/zucchiniNoodlesPesto.webp"
        },
        "135": {
            name: "Paella",
            description: "A Spanish rice dish with saffron, a variety of seafood, and vegetables, cooked in a flavorful broth, a classic Spanish favorite.",
            image: "images/paella.webp"
        },
        "136": {
            name: "Honey Glazed Carrots",
            description: "Carrots roasted with honey and herbs, resulting in a sweet and savory side dish.",
            image: "images/honeyGlazedCarrots.webp"
        },
        "137": {
            name: "Pork Chops with Apple Sauce",
            description: "Juicy pork chops served with homemade applesauce, a classic combination of sweet and savory flavors.",
            image: "images/porkchopsAppleSauce.webp"
        },
        "138": {
            name: "Greek Moussaka",
            description: "A traditional Greek casserole made with layers of eggplant, ground beef, and creamy béchamel sauce.",
            image: "images/greekMoussaka.webp"
        },
        "139": {
            name: "Thai Pineapple Fried Rice",
            description: "Fried rice with juicy pineapple, shrimp, and a blend of Thai spices, a delightful mix of sweet and savory.",
            image: "images/thaiPineappleFriedRice.webp"
        },
        "140": {
            name: "Vegetable Tikka Masala",
            description: "A vegetarian version of the classic Indian dish, featuring a creamy tomato-based sauce with mixed vegetables and paneer.",
            image: "images/veggieTikkaMasala.webp"
        },
        "141": {
            name: "Miso-Glazed Salmon",
            description: "Salmon fillets marinated in a sweet and savory miso glaze, then broiled to perfection.",
            image: "images/misoGlazedSalmon.avif"
        },
        "142": {
            name: "Teriyaki Chicken Skewers",
            description: "Chicken pieces marinated in teriyaki sauce and skewered with vegetables, then grilled for a flavorful Japanese-inspired dish.",
            image: "images/teriyakiChickenSkewers.webp"
        },
        "143": {
            name: "Crispy Tofu Stir-Fry",
            description: "Tofu cubes stir-fried until golden and crispy, then tossed with vegetables and a savory stir-fry sauce.",
            image: "images/crispyTofuStirFry.webp"
        },
        "144": {
            name: "Gazpacho",
            description: "A refreshing and cold Spanish soup made with ripe tomatoes, cucumbers, peppers, and other fresh ingredients.",
            image: "images/gazpacho.webp"
        },
        "145": {
            name: "Balsamic Glazed Brussels Sprouts",
            description: "Brussels sprouts roasted with a balsamic glaze, resulting in a sweet and tangy side dish.",
            image: "images/balsamicBrusselSprouts.webp"
        },
        "146": {
            name: "Sesame Ginger Noodles",
            description: "Noodles tossed in a sesame ginger sauce with colorful vegetables, a quick and tasty Asian-inspired dish.",
            image: "images/sesameGingerNoodles.webp"
        },
        "147": {
            name: "Vegetable Korma",
            description: "A creamy Indian curry with mixed vegetables, cashews, and aromatic spices, perfect with rice or naan.",
            image: "images/vegetableKorma.webp"
        },
        "148": {
            name: "Pancit",
            description: "A Filipino noodle dish with a medley of vegetables, shrimp, and meat, seasoned with soy sauce and citrus.",
            image: "images/pancit.webp"
        },
        "149": {
            name: "Smoked Pork Ribs",
            description: "Pork ribs smoked to perfection with a flavorful dry rub or barbecue sauce, a barbecue lover's dream.",
            image: "images/smokedPorkRibs.webp"
        },
        "150": {
            name: "Sweet and Sour Tofu",
            description: "Crispy tofu chunks served in a sweet and tangy sauce with bell peppers, pineapple, and onions.",
            image: "images/sweetSourTofu.webp"
        },
        "151": {
            name: "Falafel",
            description: "Deep-fried balls made from ground chickpeas or fava beans, typically served in pita bread with tahini sauce and vegetables.",
            image: "images/falafel.webp"
        },
        "152": {
            name: "Chicken Enchiladas",
            description: "Tender chicken wrapped in corn tortillas, smothered in enchilada sauce, and baked with cheese.",
            image: "images/chickenEnchiladas.webp"
        },
        "153": {
            name: "Peking Duck",
            description: "Crispy duck skin and tender meat served with thin pancakes, hoisin sauce, and sliced scallions, a Chinese delicacy.",
            image: "images/pekingDuck.webp"
        },
        "154": {
            name: "Mongolian Hot Pot",
            description: "A communal Chinese meal where diners cook their own ingredients in a simmering broth at the table.",
            image: "images/mongolianHotPot.webp"
        },
        "155": {
            name: "Lemon Butter Shrimp",
            description: "Shrimp cooked in a creamy lemon butter sauce, served over pasta or with crusty bread for dipping.",
            image: "images/lemonButterShrimp.webp"
        },
        "156": {
            name: "Ravioli with Sage Butter Sauce",
            description: "Cheese-filled ravioli served in a rich and nutty sage butter sauce, a simple yet elegant Italian pasta dish.",
            image: "images/ravioliSageButterSauce.webp"
        },
        "157": {
            name: "Chicken Adobo",
            description: "A Filipino dish made with chicken simmered in a savory soy sauce and vinegar sauce, often served with rice.",
            image: "images/chickenAdobo.webp"
        },
        "158": {
            name: "Tandoori Chicken",
            description: "Chicken marinated in yogurt and a blend of Indian spices, then roasted to perfection in a tandoor oven.",
            image: "images/tandooriChicken.webp"
        },
        "159": {
            name: "Vegetable Lo Mein",
            description: "Egg noodles stir-fried with a medley of vegetables and a savory sauce, a popular Chinese noodle dish.",
            image: "images/veggieLoMein.webp"
        },
        "160": {
            name: "Peach Glazed Chicken",
            description: "Grilled chicken brushed with a sweet and tangy peach glaze, a delightful combination of flavors.",
            image: "images/peachGlazedChicken.webp"
        },
        "161": {
            name: "Creamy Spinach and Artichoke Stuffed Chicken",
            description: "Chicken breasts stuffed with a creamy mixture of spinach, artichoke hearts, and cheese, baked to perfection.",
            image: "images/spinachArtichokeStuffedChicken1.webp"
        },
        "162": {
            name: "Shrimp and Crab Gumbo",
            description: "A rich and hearty Creole soup made with shrimp, crab, and a flavorful roux, served over rice.",
            image: "images/shrimpCrabGumbo.webp"
        },
        "163": {
            name: "Pumpkin Risotto",
            description: "Creamy risotto made with pumpkin puree, Parmesan cheese, and a touch of nutmeg, a cozy fall-inspired dish.",
            image: "images/pumpkinRisotto.webp"
        },
        "164": {
            name: "Thai Green Curry",
            description: "A fragrant and spicy Thai curry made with green curry paste, coconut milk, and a variety of vegetables and protein.",
            image: "images/thaiGreenCurry.webp"
        },
        "165": {
            name: "Szechuan Beef",
            description: "Thinly sliced beef stir-fried with Szechuan peppercorns and a spicy sauce, a flavorful and fiery Chinese dish.",
            image: "images/szechuanBeef.webp"
        },
        "166": {
            name: "Pork Carnitas",
            description: "Tender, slow-cooked pork served in tortillas with cilantro, onions, and your choice of toppings, a Mexican street food favorite.",
            image: "images/porkCarnitas.webp"
        },
        "167": {
            name: "Chimichurri Grilled Steak",
            description: "Grilled steak topped with a vibrant and herby chimichurri sauce, a popular South American condiment.",
            image: "images/chimichurriGrilledSteak.webp"
        },
        "168": {
            name: "Vegetable Biryani",
            description: "An aromatic Indian rice dish made with basmati rice, mixed vegetables, and a blend of spices.",
            image: "images/veggieBiryani.webp"
        },
        "169": {
            name: "Mushroom and Truffle Risotto",
            description: "Creamy risotto made with mushrooms and truffle oil, a luxurious Italian dish with earthy flavors.",
            image: "images/mushroomTruffleRisotto.webp"
        },
        "170": {
            name: "Eggplant Rollatini",
            description: "Slices of eggplant filled with ricotta cheese, rolled up, and baked with marinara sauce and mozzarella.",
            image: "images/eggplantRollatini.webp"
        },
        "171": {
            name: "Korean BBQ Ribs",
            description: "Marinated and grilled short ribs served with kimchi and other Korean side dishes, a tasty barbecue option.",
            image: "images/koreanBBQRibs.webp"
        },
        "172": {
            name: "Bang Bang Shrimp",
            description: "Crispy fried shrimp coated in a creamy and spicy sauce, a popular appetizer with bold flavors.",
            image: "images/bangBangShrimp.webp"
        },
        "173": {
            name: "Tuna Poke Bowl",
            description: "Fresh chunks of raw tuna served over rice with a variety of toppings and a drizzle of soy sauce, a Hawaiian favorite.",
            image: "images/tunaPokeBowl.webp"
        },
        "174": {
            name: "Honey Mustard Glazed Salmon",
            description: "Salmon fillets glazed with a sweet and tangy honey mustard sauce, baked to perfection with a hint of Dijon.",
            image: "images/honeyMustardGlazedSalmon.webp"
        },
        "175": {
            name: "Roasted Butternut Squash Soup",
            description: "A velvety soup made with roasted butternut squash, spices, and a touch of cream, perfect for fall and winter.",
            image: "images/roastedButternutSquashSoup.webp"
        },
        "176": {
            name: "Pasta Primavera",
            description: "A colorful pasta dish with fresh spring vegetables, herbs, and a light olive oil sauce, a celebration of the season.",
            image: "images/pastaPrimavera.webp"
        },
        "177": {
            name: "Chicken Paprikash",
            description: "A Hungarian dish made with chicken, paprika, sour cream, and served over dumplings or rice, a flavorful comfort food.",
            image: "images/chickenPaprikash.webp"
        },
        "178": {
            name: "Baked Cod with Lemon Butter",
            description: "Cod fillets baked with a lemon butter sauce and topped with fresh herbs, a simple and elegant seafood option.",
            image: "images/bakedCodLemonButter.webp"
        },
        "179": {
            name: "Pork Chops with Apple Compote",
            description: "Pork chops served with a sweet and spiced apple compote, a delightful combination of flavors.",
            image: "images/porkChopsAppleCompote.webp"
        },
        "180": {
            name: "Chorizo and Potato Tacos",
            description: "Spicy chorizo and crispy potato chunks served in warm tortillas with your favorite toppings, a tasty taco choice.",
            image: "images/chorizoPotatoTacos.webp"
        },
        "181": {
            name: "Creamed Spinach",
            description: "Spinach cooked with a creamy sauce and a hint of nutmeg, a classic side dish that pairs well with many mains.",
            image: "images/creamedSpinach.webp"
        },
        "182": {
            name: "Orange Glazed Duck",
            description: "Duck roasted to perfection and glazed with a sweet and citrusy orange sauce, a flavorful and festive choice.",
            image: "images/orangeGlazedDuck.webp"
        },
        "183": {
            name: "Japanese Tempura",
            description: "Light and crispy battered and deep-fried seafood and vegetables, typically served with a dipping sauce.",
            image: "images/japaneseTempura.webp"
        },
        "184": {
            name: "Portobello Mushroom Burger",
            description: "Grilled Portobello mushroom caps served on a bun with your favorite burger toppings, a hearty vegetarian option.",
            image: "images/portobelloMushroomBurger.webp"
        },
        "185": {
            name: "Pan-Seared Sea Bass",
            description: "Sea bass fillets pan-seared to perfection and served with a delicate sauce, a restaurant-quality seafood dish.",
            image: "images/panSearedSeaBass.webp"
        },
        "186": {
            name: "Cajun Shrimp and Grits",
            description: "Spicy shrimp served over a bed of creamy, cheesy grits, a Southern favorite with a kick of flavor.",
            image: "images/cajunShrimpGrits.webp"
        },
        "187": {
            name: "Pork and Shrimp Dumplings",
            description: "Handmade dumplings filled with a savory mixture of pork and shrimp, perfect for steaming or pan-frying.",
            image: "images/porkShrimpDumplings.webp"
        },
        "188": {
            name: "Stuffed Portobello Mushrooms",
            description: "Portobello mushroom caps stuffed with a savory mixture of breadcrumbs, cheese, and herbs, then baked to perfection.",
            image: "images/stuffedPortobelloMushrooms.webp"
        },
        "189": {
            name: "Italian Wedding Soup",
            description: "A comforting Italian soup with meatballs, pasta, and greens, perfect for warming up on a chilly day.",
            image: "images/italianWeddingSoup.webp"
        },
        "190": {
            name: "Sweet Potato Casserole",
            description: "Mashed sweet potatoes mixed with brown sugar, cinnamon, and topped with a crunchy pecan streusel, a classic side for holidays.",
            image: "images/sweetPotatoCasserole.webp"
        },
        "191": {
            name: "Classic Tuna Salad",
            description: "Flaked tuna mixed with mayonnaise, celery, and pickles, perfect for sandwiches, salads, or as a dip.",
            image: "images/tunaSalad1.webp"
        },
        "192": {
            name: "Avocado Toast",
            description: "Sliced avocado served on toasted bread, often with additional toppings like eggs or tomatoes, a trendy and healthy breakfast or brunch option.",
            image: "images/avocadoToast.webp"
        },
        "193": {
            name: "BBQ Pulled Pork Sandwich",
            description: "Slow-cooked pulled pork smothered in BBQ sauce and served in a soft bun, a classic and flavorful sandwich choice.",
            image: "images/pulledPorkSandwich.webp"
        },
        "194": {
            name: "Philly Cheesesteak",
            description: "Thinly sliced beefsteak, sautéed onions, and melted cheese served in a long roll, a beloved Philadelphia sandwich.",
            image: "images/phillyCheeseSteaks.webp"
        },
        "195": {
            name: "Pineapple Upside-Down Cake",
            description: "A classic dessert with caramelized pineapple and cherries topping a moist, buttery cake, perfect with a scoop of vanilla ice cream.",
            image: "images/pineappleUpsideDownCake.webp"
        },
        "196": {
            name: "Chicken Caesar Salad",
            description: "Grilled chicken served on a bed of crisp romaine lettuce, croutons, and Caesar dressing, a popular salad choice.",
            image: "images/chickenCaesarSalad.webp"
        },
        "197": {
            name: "Clam Chowder",
            description: "A creamy soup made with clams, potatoes, onions, and bacon, a hearty and comforting seafood soup.",
            image: "images/clamChowder.webp"
        },
        "198": {
            name: "Gnocchi with Pesto",
            description: "Soft potato dumplings tossed in a vibrant pesto sauce made with basil, garlic, pine nuts, and Parmesan cheese, an Italian delicacy.",
            image: "images/GnocchiPesto.webp"
        },
        "199": {
            name: "Crispy Tofu Tacos",
            description: "Crispy tofu cubes served in warm tortillas with fresh salsa, guacamole, and shredded lettuce, a delicious vegan taco option.",
            image: "images/CrispyTofuTacos.webp"
        },
        "200": {
            name: "Lemon Bars",
            description: "Tangy and sweet lemon-flavored bars with a buttery shortbread crust, a delightful dessert or snack.",
            image: "images/lemonBars.webp"
        },
        "201": {
            name: "Shrimp and Crab Alfredo",
            description: "Creamy Alfredo sauce with sautéed shrimp, crab meat, and fettuccine pasta, a decadent seafood pasta dish.",
            image: "images/shrimpCrabAlfredo.webp"
        },
        "202": {
            name: "Cobb Salad",
            description: "A hearty salad with grilled chicken, bacon, avocado, tomatoes, and blue cheese, typically topped with a vinaigrette dressing.",
            image: "images/cobbSalad.webp"
        },
        "203": {
            name: "Tandoori Tofu Skewers",
            description: "Tofu chunks marinated in tandoori spices, skewered, and grilled to smoky perfection, a vegan and flavorful dish.",
            image: "images/tandooriTofuSkewers.webp"
        },
        "204": {
            name: "Key Lime Pie",
            description: "A tangy and sweet pie with a graham cracker crust and a filling made with key lime juice and condensed milk, a refreshing dessert.",
            image: "images/keyLimePie.webp"
        },
        "205": {
            name: "Spicy Tofu and Vegetable Stir-Fry",
            description: "Tofu and a variety of vegetables stir-fried in a spicy sauce, a flavorful and satisfying vegan stir-fry.",
            image: "images/spicyTofuVeggieStirFry.webp"
        },
        "206": {
            name: "Eggs Benedict",
            description: "Poached eggs on English muffins, topped with Canadian bacon and hollandaise sauce, a classic brunch favorite.",
            image: "images/eggsBenedict.webp"
        },
        "207": {
            name: "Chicken Tikka Masala",
            description: "Tender chicken pieces in a creamy tomato-based curry sauce, a popular Indian dish served with rice or naan.",
            image: "images/chickenTikkaMasala.webp"
        },
        "208": {
            name: "Tomato Basil Soup",
            description: "A comforting soup made with ripe tomatoes, fresh basil, and a touch of cream, a classic tomato soup with a twist.",
            image: "images/tomatoBasilSoup.webp"
        },
        "209": {
            name: "Banana Bread",
            description: "A moist and sweet bread made with ripe bananas, a hint of cinnamon, and optional nuts or chocolate chips, a favorite baked treat.",
            image: "images/bananaBread.webp"
        },
        "210": {
            name: "Chocolate Mousse",
            description: "A silky and indulgent dessert made with dark chocolate, eggs, and cream, a perfect ending to a special meal.",
            image: "images/chocolateMousse.webp"
        },
        "211": {
            name: "Tiramisu",
            description: "An Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder, a classic treat.",
            image: "images/tiramisu.webp"
        },
        "212": {
            name: "Chicken and Dumplings",
            description: "A comforting Southern dish with tender chunks of chicken, vegetables, and fluffy dumplings in a creamy broth.",
            image: "images/chickenDumplings.webp"
        },
        "213": {
            name: "Moussaka",
            description: "A Greek casserole dish with layers of eggplant, ground meat, and béchamel sauce, baked to a golden perfection.",
            image: "images/Moussaka.webp"
        },
        "214": {
            name: "Blueberry Pancakes",
            description: "Fluffy pancakes with fresh blueberries, perfect for a delightful breakfast or brunch.",
            image: "images/blueberryPancakes.webp"
        },
        "215": {
            name: "Pulled Pork Sandwiches",
            description: "Slow-cooked pulled pork served on a bun with barbecue sauce, a classic American sandwich.",
            image: "images/pulledPorkSandwich.webp"
        },
        "216": {
            name: "Risotto",
            description: "A creamy Italian rice dish cooked with broth, wine, and various ingredients such as mushrooms, seafood, or vegetables.",
            image: "images/risotto.webp"
        },
        "217": {
            name: "Chocolate Fondue",
            description: "Melted chocolate served with a variety of dippable items like strawberries, marshmallows, and pretzels, a fun and shareable dessert.",
            image: "images/chocolateFondue.webp"
        },
        "218": {
            name: "Fettuccine Alfredo",
            description: "Fettuccine pasta tossed in a creamy Alfredo sauce made with butter, heavy cream, and Parmesan cheese.",
            image: "images/fettuccineAlfredo.webp"
        },
        "219": {
            name: "Crispy Baked Chicken",
            description: "Chicken coated in breadcrumbs and baked to a crispy perfection, a healthier twist on classic fried chicken.",
            image: "images/crispyBakedChicken.webp"
        },
        "220": {
            name: "Chicken Noodle Soup",
            description: "A comforting soup with chicken, noodles, and vegetables, perfect for soothing the soul and battling colds.",
            image: "images/chickenNoodleSoup.webp"
        },
        "221": {
            name: "Chocolate Chip Cookies",
            description: "Classic cookies with chocolate chips, soft and chewy or crispy, depending on your preference.",
            image: "images/chocolateChipCookies.webp"
        },
        "222": {
            name: "Ravioli with Sage Butter",
            description: "Tender ravioli served in a rich and nutty sage-infused butter sauce, a simple and elegant Italian pasta dish.",
            image: "images/ravioliSageButterSauce.webp"
        },
        "223": {
            name: "Pumpkin Pie",
            description: "A classic American pie with a spiced pumpkin filling, perfect for the fall and Thanksgiving season.",
            image: "images/pumpkinPie.webp"
        },
        "224": {
            name: "Honey Glazed Salmon",
            description: "Salmon fillets brushed with a sweet and savory honey glaze, roasted to perfection, a delightful seafood dish.",
            image: "images/orangeGlazedSalmon.webp"
        },
        "225": {
            name: "Crispy Pork Belly",
            description: "Pork belly roasted until the skin is crispy and the meat is tender, often served with dipping sauces.",
            image: "images/crispyPorkBelly.webp"
        },
        "226": {
            name: "Baked Mac and Cheese",
            description: "Elbow macaroni baked in a creamy cheese sauce with a crispy breadcrumb topping, a classic comfort food.",
            image: "images/bakedMacNCheese.webp"
        },
        "227": {
            name: "Beef and Guinness Stew",
            description: "Tender beef chunks, vegetables, and Guinness beer in a rich and hearty stew, an Irish classic.",
            image: "images/beefGuinnessStew.webp"
        },
        "228": {
            name: "Butternut Squash Soup",
            description: "A creamy and comforting soup made with roasted butternut squash, perfect for the fall season.",
            image: "images/roastedButternutSquashSoup.webp"
        },
        "229": {
            name: "Eclairs",
            description: "Choux pastry filled with cream and topped with chocolate icing, a delectable French dessert.",
            image: "images/eclairs.webp"
        },
        "230": {
            name: "Scalloped Potatoes",
            description: "Sliced potatoes baked in a creamy sauce with cheese, a classic side dish perfect for holidays.",
            image: "images/scallopedPotatoes.webp"
        },
        "231": {
            name: "Pancit Canton",
            description: "A Filipino stir-fried noodle dish with vegetables, shrimp, pork, and soy sauce, a savory and satisfying meal.",
            image: "images/pancitCanton.webp"
        },
        "232": {
            name: "Peanut Butter Cookies",
            description: "Classic cookies made with peanut butter and often adorned with crisscross marks, a timeless treat.",
            image: "images/peanutButterCookies.webp"
        },
        "233": {
            name: "Cauliflower Rice",
            description: "Grated cauliflower cooked as a low-carb alternative to rice, a healthy and versatile side or base for dishes.",
            image: "images/cauliflowerRice.webp"
        },
        "234": {
            name: "Baked Tilapia",
            description: "Tilapia fillets baked with a simple seasoning, a quick and healthy way to prepare white fish.",
            image: "images/bakedTilapia.webp"
        },
        "235": {
            name: "Mango Salsa",
            description: "A fruity and tangy salsa made with ripe mangoes, often paired with grilled chicken or fish.",
            image: "images/mangoSalsa.webp"
        },
        "236": {
            name: "Cornbread",
            description: "A sweet and crumbly bread made with cornmeal, a classic Southern side dish.",
            image: "images/cornBread.webp"
        },
        "237": {
            name: "Chicken and Rice Casserole",
            description: "A one-pan dish with chicken, rice, vegetables, and creamy sauce, baked until golden and bubbly.",
            image: "images/chickenRiceCasserole.webp"
        },
        "238": {
            name: "Chocolate Chip Pancakes",
            description: "Pancakes studded with chocolate chips, often served with maple syrup or whipped cream, a decadent breakfast treat.",
            image: "images/chocolateChipPancakes.webp"
        },
        "239": {
            name: "Garlic Roasted Potatoes",
            description: "Potato chunks roasted with garlic and herbs until crispy and flavorful, a savory side dish.",
            image: "images/garlicRoastedPotatoes.webp"
        },
        "240": {
            name: "Tandoori Lamb Chops",
            description: "Tender lamb chops marinated in tandoori spices and grilled to perfection, a flavorful Indian dish.",
            image: "images/tandooriLambChops.webp"
        },
        "241": {
            name: "Ricotta Stuffed Shells",
            description: "Jumbo pasta shells stuffed with ricotta cheese and baked in marinara sauce with melted mozzarella, an Italian classic.",
            image: "images/ricottaStuffedShells.webp"
        },
        "242": {
            name: "Sichuan Hot Pot",
            description: "A spicy and communal Chinese dish featuring a simmering pot of broth, where you cook various meats, seafood, and vegetables.",
            image: "images/sichuanHotPot.webp"
        },
        "243": {
            name: "Lamb Rogan Josh",
            description: "A rich and aromatic Indian curry with tender pieces of lamb, tomatoes, and a blend of spices.",
            image: "images/lambRoganJosh.webp"
        },
        "244": {
            name: "Spanakopita",
            description: "Greek spinach pie made with layers of phyllo pastry and a filling of spinach, feta, and herbs, a savory delight.",
            image: "images/spanakopita.webp"
        },
        "245": {
            name: "Lentil Stew",
            description: "A hearty and nutritious stew made with lentils, vegetables, and aromatic seasonings, perfect for vegetarians.",
            image: "images/lentilStew.webp"
        },
        "246": {
            name: "Cabbage Rolls",
            description: "Cabbage leaves filled with a mixture of ground meat, rice, and seasonings, then cooked in tomato sauce, a comforting dish in various cultures.",
            image: "images/cabbageRolls.webp"
        },
        "247": {
            name: "Ginger Beef Stir-Fry",
            description: "Thinly sliced beef and vegetables stir-fried in a zesty ginger sauce, a flavorful and satisfying Asian-inspired dish.",
            image: "images/gingerBeefStirFry.webp"
        },
        "248": {
            name: "Beef Wellington",
            description: "A classic British dish featuring beef tenderloin encased in pastry and baked to perfection, often served with mushroom duxelles and a rich sauce.",
            image: "images/beefWellington.webp"
        },
        "249": {
            name: "Vegan Pad Thai",
            description: "A vegan twist on the popular Thai dish, with rice noodles, tofu, and a tangy tamarind sauce, topped with peanuts and herbs.",
            image: "images/veganPadThai.webp"
        },
        "250": {
            name: "Beef Bulgogi",
            description: "Korean marinated and grilled beef, often served with rice, lettuce wraps, and kimchi, a flavorful and spicy dish.",
            image: "images/beefBulgogi.webp"
        },
        "251": {
            name: "Sole Meunière",
            description: "Pan-fried sole fish in a buttery lemon sauce with capers and parsley, a classic French seafood dish.",
            image: "images/soleMeuniere.webp"
        },
        "252": {
            name: "Spicy Tofu Ramen",
            description: "A warming and flavorful Japanese noodle soup with spicy tofu, vegetables, and a savory broth.",
            image: "images/spicyTofuRamen.webp"
        },
        "253": {
            name: "Rack of Lamb",
            description: "Herb-crusted and roasted rack of lamb, a tender and elegant dish often served with mint sauce.",
            image: "images/rackLamb.webp"
        },
        "254": {
            name: "Chicken Katsu",
            description: "Japanese-style breaded and fried chicken cutlets, often served with tonkatsu sauce and rice.",
            image: "images/chickenKatsu.webp"
        },
        "255": {
            name: "Lemon Herb Grilled Chicken",
            description: "Chicken marinated in a zesty lemon and herb sauce, then grilled to perfection, a light and refreshing dish.",
            image: "images/lemonHerbGrilledChicken.webp"
        },
        "256": {
            name: "Japanese Curry",
            description: "A rich and hearty curry with tender meat, potatoes, and carrots, served over rice, a popular dish in Japan.",
            image: "images/japaneseCurry.webp"
        },
        "257": {
            name: "Chana Masala",
            description: "A flavorful and spiced Indian chickpea stew, often served with rice or naan, a vegetarian delight.",
            image: "images/chanaMasala.webp"
        },
        "258": {
            name: "Prosciutto-Wrapped Asparagus",
            description: "Fresh asparagus spears wrapped in prosciutto and roasted until tender and crispy, a simple and elegant side dish.",
            image: "images/prosciuttoWrappedAsparagus.webp"
        },
        "259": {
            name: "Jambalaya",
            description: "A spicy and flavorful Louisiana Creole rice dish with a mix of meats, vegetables, and Cajun seasonings, a taste of the South.",
            image: "images/jambalaya.webp"
        },
        "260": {
            name: "Cucumber Salad",
            description: "A refreshing salad made with sliced cucumbers, red onions, and a tangy vinaigrette, a cool and crisp side dish.",
            image: "images/cucumberSalad.webp"
        },
        "261": {
            name: "Beef Teriyaki",
            description: "Thinly sliced beef marinated in a sweet teriyaki sauce, grilled to perfection, a Japanese favorite.",
            image: "images/beefTeryaki.webp"
        },
        "262": {
            name: "Quiche Lorraine",
            description: "A French savory tart made with eggs, cream, bacon, and cheese, a rich and decadent brunch or lunch option.",
            image: "images/quicheLorraine.webp"
        },
        "263": {
            name: "Tofu Tacos",
            description: "Vegan-friendly tacos made with seasoned tofu, lettuce, salsa, and avocado, a delicious and meatless alternative to traditional tacos.",
            image: "images/tofuTacos.webp"
        },
        "264": {
            name: "Classic Margherita Pizza",
            description: "A simple and timeless pizza topped with fresh tomatoes, mozzarella, basil, and olive oil, an Italian favorite.",
            image: "images/margheritaPizza.webp"
        },
        "265": {
            name: "Roast Beef",
            description: "Tender and flavorful roast beef seasoned and slow-cooked, often served with gravy, a classic Sunday dinner.",
            image: "images/roastBeef.webp"
        },
        "266": {
            name: "Baked Salmon with Dill",
            description: "Salmon fillets baked with fresh dill and lemon, a light and refreshing seafood dish.",
            image: "images/bakedSalmonDill.webp"
        },
        "267": {
            name: "Baked Potatoes",
            description: "Potatoes baked until tender, often topped with butter, sour cream, cheese, and chives, a classic side dish.",
            image: "images/bakedPotatoes.webp"
        },
        "268": {
            name: "Baked Apple Crisp",
            description: "Sliced apples baked with a crumbly topping of oats, butter, and brown sugar, a warm and comforting dessert.",
            image: "images/bakedAppleCrisp.webp"
        },
        "269": {
            name: "Sesame Orange Chicken",
            description: "Crispy chicken pieces tossed in a tangy orange sauce with sesame seeds, a sweet and savory Chinese dish.",
            image: "images/sesameOrangeChicken.webp"
        },
        "270": {
            name: "Spinach and Artichoke Dip",
            description: "A creamy dip made with spinach, artichokes, and cheese, often served with tortilla chips or bread for dipping, a crowd-pleasing appetizer.",
            image: "images/spinachArtichokeDip.webp"
        },
        "271": {
            name: "Honey Baked Ham",
            description: "Spiral-cut ham baked with a glaze made from honey, brown sugar, and spices, a delicious choice for holidays and special occasions.",
            image: "images/honeyBakedHam.webp"
        },
        "272": {
            name: "Balsamic Glazed Chicken",
            description: "Chicken breasts cooked in a balsamic vinegar reduction, served with a drizzle of glaze, a sweet and tangy main course.",
            image: "images/balsamicGlazedChicken.webp"
        },
        "273": {
            name: "Cheddar Broccoli Soup",
            description: "A creamy soup made with cheddar cheese and broccoli, a comforting and cheesy option for soup lovers.",
            image: "images/chedderBroccoliSoup.webp"
        },
        "274": {
            name: "Creamy Garlic Mashed Potatoes",
            description: "Fluffy mashed potatoes made with garlic, butter, and cream, a comforting and creamy side dish.",
            image: "images/garlicMashedPotatoes.webp"
        },
        "275": {
            name: "Spicy Thai Noodles",
            description: "Rice noodles stir-fried with tofu, vegetables, and a spicy Thai sauce, a zesty and vegan-friendly dish.",
            image: "images/spicyThaiNoodles.webp"
        },
        "276": {
            name: "Stuffed Cabbage Rolls",
            description: "Cabbage leaves filled with a mixture of ground meat and rice, cooked in tomato sauce, a comforting and classic dish.",
            image: "images/cabbageRolls.webp"
        },
        "277": {
            name: "Creamy Pesto Pasta",
            description: "Pasta tossed in a creamy pesto sauce with fresh basil and Parmesan cheese, a flavorful and comforting Italian dish.",
            image: "images/creamyPestoPasta.webp"
        },
        "278": {
            name: "Sesame Crusted Tuna",
            description: "Fresh tuna steaks coated in sesame seeds and seared to perfection, served with a soy-ginger dipping sauce, a delightful seafood choice.",
            image: "images/sesameTuna.webp"
        },
        "279": {
            name: "Veggie Fajitas",
            description: "Sautéed bell peppers, onions, and mushrooms served with tortillas, guacamole, and sour cream, a tasty and vegetarian Tex-Mex option.",
            image: "images/veggieFajitas.webp"
        },
        "280": {
            name: "Garlic Shrimp Linguine",
            description: "Sautéed shrimp served over linguine with a garlic and white wine sauce, a simple yet flavorful seafood pasta.",
            image: "images/garlicShrimpLinguine.webp"
        },
        "281": {
            name: "Roast Beef with Gravy",
            description: "Tender roast beef served with rich pan gravy, often accompanied by roasted potatoes and vegetables, a classic Sunday dinner.",
            image: "images/roastBeefGravy.webp"
        },
        "282": {
            name: "Mapo Tufo",
            description: "Tofu cubes seasoned with spicy flavors, served with spicy sauce, peppers, and aromatics; a vegan and fiery dish.",
            image: "images/mapoTofu.webp"
        },
        "283": {
            name: "Seafood Paella",
            description: "A Spanish rice dish cooked with saffron, seafood, and a variety of flavorful ingredients, a vibrant and communal meal.",
            image: "images/seafoodPaella.webp"
        },
        "284": {
            name: "Homemade Lasagna",
            description: "Layers of lasagna noodles, ricotta cheese, marinara sauce, ground beef, and mozzarella, baked to perfection, a classic Italian comfort food.",
            image: "images/homemadelasagna.webp"
        },
        "285": {
            name: "Baked Stuffed Shells",
            description: "Large pasta shells stuffed with a cheesy ricotta filling, baked with marinara sauce and mozzarella cheese, a delicious Italian pasta dish.",
            image: "images/bakedStuffedShells.webp"
        },
        "286": {
            name: "Chicken and Broccoli Alfredo",
            description: "Sautéed chicken and broccoli tossed in creamy Alfredo sauce, served over fettuccine pasta, a rich and indulgent Italian dish.",
            image: "images/chickenBroccoliAlfredo.webp"
        },
        "287": {
            name: "Beef Enchiladas",
            description: "Tender beef rolled in tortillas, smothered in enchilada sauce, and baked with cheese, a hearty and flavorful Mexican dish.",
            image: "images/beefEnchiladas1.webp"
        },
        "288": {
            name: "Lemon Pepper Shrimp",
            description: "Sautéed shrimp seasoned with zesty lemon and cracked black pepper, a quick and refreshing seafood dish.",
            image: "images/lemmonPepperShrimp.webp"
        },
        "289": {
            name: "Sesame Noodles",
            description: "Chilled noodles tossed in a sesame sauce with green onions, a simple and tasty Chinese cold noodle dish.",
            image: "images/sesameNoodles.webp"
        },
        "290": {
            name: "Crispy Tofu Bites",
            description: "Crispy tofu cubes seasoned with spices, served with a dipping sauce, a vegan and crunchy appetizer.",
            image: "images/crispyTofuBites.webp"
        }
    }

/*seen = [];
duplicates = [];
j = 1;

seen = [];
duplicates = [];
j = 1;

while(j <= 500){
    if(dinnerOptions[j].name ==""){
        duplicates.push(j);
    }
    else if(seen.includes(dinnerOptions[j].name)){
        duplicates.push(j);
    }
    else{
        seen.push(dinnerOptions[j].name);
    }
    j++;
}

for (let i = duplicates.length - 1; i >= 0; i--) {
    const indexToRemove = duplicates[i];
    delete dinnerOptions[indexToRemove];
}

newDinnerOptions = {}

let i = 1; // Initialize an iterator

for (const key in dinnerOptions) {
  if (dinnerOptions.hasOwnProperty(key)) {
    newDinnerOptions[i] = dinnerOptions[key];
    i++; // Increment the iterator
  }
}

console.log(newDinnerOptions)*/

/*i = 280;

while(i <= 290){
    let foodLink = "https://unsplash.com/s/photos/";
    let dinner = dinnerOptions[i].name;
    const newName = dinner.split(' ').join('-');
    foodLink = foodLink + newName
    window.open(foodLink, '_blank');
    i+=1;
}*/

