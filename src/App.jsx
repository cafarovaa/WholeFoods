import React, { useEffect, useState } from 'react'
import Main from './Companents/Main/Main'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout/Layout'
import Order from './Companents/Main/Order'
import Recipe from './Companents/Main/Recipe'
import Store from './Companents/Main/Store'
import Favourit from './Companents/Main/Favourit'
import Daily from './Companents/Main/Daily'
import CardStore from './Companents/Main/CardStore'
import CardMap from './Companents/Main/CardMap'
import CardRecipe from './Companents/Main/CardRecipe'
import Cardinfo from './Companents/Main/Cardinfo'

function App() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    const [data, setData] = useState({
        "food": [
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/ec7e3de3-bc23-4462-927d-9f36ca320cb2/24_Feb__Website_SuperKVI_Image_281x211.png?format=1000w",
                "composition": "Tate & Lyle Fairtrade Caster Sugar"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/db4ffc2e-1b89-43f1-85ea-eeff10649c38/24_March__Website_Discovery_Image_281x21115.png?format=1000w",
                "composition": "Yorkshire Tea Tea Bags"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/c32ef24f-cfe1-4629-a6bb-71f7dedb6f1e/24_March__Website_Discovery_Image_281x21112.png?format=1000w",
                "composition": "Oatly Oat Drink Barista Edition"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/f3fa8f1a-8a77-4591-a480-0c21808c59b1/24_March__Website_Discovery_Image_281x21113.png?format=1000w",
                "composition": "Dove's Farm Gluten Free Plain Flour"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/54681e84-6d8c-454f-be1f-0c58ecbaf66b/24_March__Website_Discovery_Image_281x21114.png?format=1000w",
                "composition": "Yeo Valley Organic Salted Butter"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/666fd45c-6e54-4be1-a772-685a4feefd79/24_May__Website_Discovery_Image_281x2112.png?format=1000w",
                "composition": "Pollen + Grace Indian Spiced Bombay Potato Grain Bowl"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/157b2c9c-a863-40bd-ae99-97df1a85c0c0/24_May__Website_Discovery_Image_281x2113.png?format=1000w",
                "composition": "Dillon Original Flaxseed Keto Bread"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/924a4acd-929c-491b-8158-035b667fd1c7/24_May__Website_Discovery_Image_281x2115.png?format=1000w",
                "composition": "Wild Dose A Dose For Bloating 20 Caps"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/e4ac2c2c-32ff-4bcd-89d7-0edb88be26e3/24_May__Website_Discovery_Image_281x211.png?format=1000w",
                "composition": "Mixtons Dragon Mojo"
            },
            {
                "img": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/986fde41-1e86-4f37-ac19-201c767834f5/24_May__Website_Discovery_Image_281x2114.png?format=1000w",
                "composition": "Vinca Organic Rose Can"
            }
        ]
    })
    const [dataFavori, setDataFavori] = useState(
        {
            "favourites": [
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/5b99411c-5e29-45de-82dd-c3a401b5772d/24_March__Website_Article_Booker_Image_750x50038.png?format=2500w",
                    "title": "Heinz Tomato Ketchup £3.35",
                    "size": "460g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/602762fd-a6d6-4785-8e4a-6fcfdc41b910/24_March__Website_Article_Booker_Image_750x50044.png?format=1000w",
                    "title": "Heinz Baked Spaghetti Hoops £1.59 ",
                    "size": "400g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/f7629580-b285-4bc2-a695-0f8fd3c147d4/24_March__Website_Article_Booker_Image_750x50016.png?format=2500w",
                    "title": "Heinz Tomato Soup £1.89 ",
                    "size": "400g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/e7085f8a-1d13-4b19-9214-85ef1b046a2f/24_March__Website_Article_Booker_Image_750x50010.png?format=2500w",
                    "title": "Colemans Mint Sauce £1.69 ",
                    "size": "165g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/4128a11d-dcec-4d07-a82a-19e494002f36/24_March__Website_Article_Booker_Image_750x50030.png?format=2500w",
                    "title": "Ocean Spray Whole Cranberry Sauce  £2.19",
                    "size": "250g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/602762fd-a6d6-4785-8e4a-6fcfdc41b910/24_March__Website_Article_Booker_Image_750x50044.png?format=1000w",
                    "title": "Branston Piccalilli £2.49 ",
                    "size": "360g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/924a4acd-929c-491b-8158-035b667fd1c7/24_May__Website_Discovery_Image_281x2115.png?format=1000w",
                    "title": "Carnation Evaporated Milk £1.59 ",
                    "size": "460g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/5b99411c-5e29-45de-82dd-c3a401b5772d/24_March__Website_Article_Booker_Image_750x50038.png?format=2500w",
                    "title": "Heinz Tomato Ketchup £3.35",
                    "size": "460g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/0731dbfa-e2e9-476f-952a-4c1b42bb4469/24_March__Website_Article_Booker_Image_750x50036.png?format=1500w",
                    "title": "Bonne Maman Strawberry Conserve £3.79 ",
                    "size": "370g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/18ee8119-0367-444d-9f31-9dce8a638460/24_March__Website_Article_Booker_Image_750x50012.png?format=2500w",
                    "title": "Kellogg's Corn Flakes £2.99 ",
                    "size": "500g"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/cd195b64-6169-4a16-ab89-45bc183dd655/24_March__Website_Article_Booker_Image_750x50028.png?format=2500w",
                    "title": "Quaker Oat So Simple Pouches Golden Syrup £3.89 ",
                    "size": "10 pack"
                },
                {
                    "imag": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/b347486a-ef84-4c82-80a4-151a15d77d9b/24_March__Website_Article_Booker_Image_750x50020.png?format=2500w",
                    "title": "Kettle Lightly Salted Crisps £2.49 ",
                    "size": "130g"
                }
            ]
        })
    const [dataStore, setDataStore] = useState(
        {
            "store": [
                {
                    "title": "Clapham Junction",
                    "hours": "Store Hours: General Public Monday to Saturday: 8am-9pm. Sunday: 11am-5pm.",
                    "about": "305-311 Lavender Hill London SW11 1LN",
                    "number": "(020) 7585 1488",
                    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.6961856678454!2d-0.16919772472996297!3d51.46373431389402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760598361d132d%3A0x1c9ebc5818b97bde!2s305-311%20Lavender%20Hill%2C%20London%20SW11%201LN%2C%20UK!5e0!3m2!1sen!2saz!4v1728566076187!5m2!1sen!2saz"
                },
                {
                    "title": "Camden",
                    "hours": "Store Hours: General public Monday to Saturday: 8am-9pm. Sunday: 9am-9pm. ",
                    "about": "49 Parkway, London, NW1 7PN",
                    "number": "(020) 7428 7575",
                    "map": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2481.6485100819846!2d-0.1446321!3d51.5380064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ae0f90436b9%3A0x3bed92931634a3a4!2s49%20Parkway%2C%20London%20NW1%207PN%2C%20UK!5e0!3m2!1sen!2saz!4v1728564251642!5m2!1sen!2saz"
                },
                {
                    "title": "High Street Kensington",
                    "hours": "Store Hours: General public Monday to Saturday: 8am-10pm. Sunday: 12pm-6pm (open from 11:30am for browsing).",
                    "about": "63-97 Kensington High St, London, W8 5SE",
                    "number": "(020) 7368 4500",
                    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.628118700486!2d-0.1906795!3d51.5016915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760ff65415b88f%3A0x97bebbdaa2a8af5b!2s63-97%20Kensington%20High%20St%2C%20London%20W8%205SE%2C%20UK!5e0!3m2!1sen!2saz!4v1728564197534!5m2!1sen!2saz"
                },
                {
                    "title": "Piccadilly",
                    "hours": "Store Hours: General public Monday to Saturday: 8am-10pm. Sunday: 12pm-6pm.",
                    "about": "20 Glasshouse St, London, W1B 5AR",
                    "number": "(020) 7406 3100",
                    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1437818936215!2d-0.1361529!3d51.5105781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d41619882d%3A0xbd811cbf534a0dba!2s20%20Glasshouse%20St%2C%20London%20W1B%205DL%2C%20UK!5e0!3m2!1sen!2saz!4v1728564141446!5m2!1sen!2saz"
                },
                {
                    "title": "Stoke Newington",
                    "hours": "Store Hours: General public Monday to Saturday: 8am-9pm. Sunday: 9am-9pm.",
                    "about": "32-40 Stoke Newington Church St, London, N16 0LU",
                    "number": "(020) 7254 2332",
                    "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.327160761962!2d-0.0753066!3d51.562235699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c614ca0e7d9%3A0xe9832a0f04aad122!2s32-40%20Stoke%20Newington%20Church%20St%2C%20London%20N16%200LU%2C%20UK!5e0!3m2!1sen!2saz!4v1728564037123!5m2!1sen!2saz"
                }
            ]
        }
    )
    const [dataRecipe, setDataRecipe] = useState({
        "recipes": [
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/1718632007071-V3UWCQOPE6TOO847NU2H/Gymkhana_Fine_Foods_outdoor_campaign_72.jpg?format=2500w",
                "title": "Ribeye Steak Skewers with Garlic Naan Wrap",
                "name": "Gymkhana’s Ribeye Steak Skewers with Garlic Naan Wrap  ",
                "category": "Dinner",
                "composition": "This aromatic dish inspired by Gymakhana is short on prep and big on flavour. Purchase their sauces in store today and try for yourself!",
                "about": "Gymkhanas home sauce range, like their classic tandoori marinade and rogan josh sauce, is a great thing to have in the kitchen. especially if it means you can whip up dishes like this in less than 45 minutes. Check out their delicious recipe below.",
                "ingredient": [
                    "For the Skewers:",
                    "270g ribeye steak, cut into 12 pieces",
                    "½ tablespoon black peppercorns, freshly crushed",
                    "1 tablespoon classic tandoori masala",
                    "⅓  jar rogan josh sauce",
                    "3 wooden/metal skewers",
                    "For the Naan:",
                    "115g plain flour",
                    "100g yogurt",
                    "1 teaspoon baking powder",
                    "Pinch of salt",
                    "1 tablespoon butter",
                    "1-2 cloves garlic, minced",
                    "1 teaspoon coriander, minced",
                    "For the Pickled Red Onions:",
                    "1 red onion, sliced",
                    "100ml white wine vinegar",
                    "150ml water",
                    "1 tablespoon sugar",
                    "1 teaspoon salt",
                    "¼ teaspoon black peppercorns",
                    "For the Raita:",
                    "½ cup greek yogurt",
                    "1 tablespoon cucumber, grated",
                    "1 teaspoon cucumber, diced",
                    "Handful coriander, minced",
                    "1 grated garlic",
                    "¼ teaspoon salt",
                    "¼ teaspoon cumin powder",
                    "¼ teaspoon black pepper powder",
                    "Water (if necessary)"
                ],
                "method": [
                    "In a bowl, marinate the ribeye pieces in the classic tandoori masala and crushed black pepper for at least 30 minutes. In a bowl with water, place the skewers and leave to soak",
                    "In a saucepan, bring the water, vinegar, salt, sugar and black peppercorns to simmer until sugar is dissolved and pour into a jar filled with the sliced red onions. Leave to pickle while you make the rest of the dishes.",
                    "For the raita, mix everything in a bowl, taste and adjust to taste. Add water if need to thin out consistency.",
                    "In a small bowl, mix 1 tablespoon of melted unsalted butter with garlic and coriander. Set aside to brush over the naans later on.",
                    "In another bowl, mix the ingredients for the naan until a dough is formed. Portion into 4 balls and roll out a ball on a floured surface until thin and resembles a naan. Repeat for all portions.",
                    "Heat up some rogan josh sauce in a saucepan before pouring into a bowl. Place the marinated steak bites on the skewers, 4 on each skewer, then place to air fry at 200°C for 10-12 minutes, making sure to turn half way.",
                    "In a pan over medium-high heat, place the naan and cook each side for 2-3 minutes before placing on a plate and brushing the garlic butter on top.",
                    "To plate, top each garlic butter naan with raita, the tandoori steak, some rogan josh sauce, pickled onions and coriander. "
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/1686845720696-J912U80JDWPJ0JVG8GSP/CaptureGarlicChicken.PNG?format=2500w",
                "title": "Pollo al Ajillo",
                "nickname": "Spanish Inspired Garlic Chicken",
                "service": "Serves 5-6 | Time 60-70 mins",
                "category": "Dinner",
                "composition": "Seared chicken on the bone, slow cooked onions & whole cloves of garlic finished with white wine, rosemary & tender, roasted new potatoes.",
                "about": "This wonderfully aromatic chicken dish is short on prep and big on flavour. It's also a great dish to make ahead the day before and reheat — it's even tastier after the flavours meld. Seared chicken on the bone, slow cooked onions & whole cloves of garlic finished with white wine, rosemary & tender, roasted new potatoes.",
                "ingredient": [
                    "100ml Olive oil",
                    "1kg chicken drumsticks & thighs, skin on, bone in",
                    "500g Spanish onion, peeled & finely sliced",
                    "10 sprigs of thyme, leaves picked",
                    "1 large head of garlic, cloves peeled",
                    "1 sprig of rosemary, leaves picked & chopped",
                    "2 bay leaves",
                    "200ml white wine",
                    "1kg New potatoes",
                    "Salt & freshly ground black pepper"
                ],
                "method": [
                    "Pre-heat the oven to 180°c. Place the new potatoes in a pan with cold water and season generously with salt.",
                    "Place on a high heat and bring to the boil, once boiling reduce heat to medium and cook for approximately 15-20 minutes until tender, once cooked drain and set aside. Place a large, ovenproof, heavy bottomed pan or casserole dish on a high heat and season the chicken generously with salt & pepper.",
                    "Once pan is hot, add the olive oil, lay the chicken pieces in the pan and cook on all sides until golden brown, turning every couple of minutes, this should take 10-15 minutes. Remove the chicken from the pan and set aside on a plate.",
                    "Add the onions, garlic cloves, rosemary, bay leaves & thyme, turn heat to medium and cook for a further 10 minutes until the onions are starting to brown, stir every minute or so. Add the white wine to deglaze the pan and cook for a further 2 minutes to reduce. Add the potatoes and chicken and gently stir to mix the ingredients together.",
                    "Place in the middle shelf of the pre-heated oven for approximately 10-15 minutes to allow the potatoes to lightly brown. Check the chicken is fully cooked with no pink meat and it is steaming hot in the centre. Allow to rest for 5 minutes, serve, and enjoy."
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/1717591242882-CE1AWFA6HXUD72HSK4S6/Kimchi.PNG?format=2500w",
                "title": "Kimchi",
                "service": "Serves 1 | Time 5 minutes",
                "category": "Dinner",
                "composition": "Kimchi recipe",
                "about": "Kimchi, the traditional Korean side dish made from fermented vegetables and a variety of seasonings.  Top tip -  the flavour will improve the longer it's left to ferment!",
                "ingredient": [
                    "1 whole Organic Chinese cabbage",
                    "5 cloves garlic",
                    "1 knob ginger",
                    "1 bunch carrots",
                    "1 bunch spring onion",
                    "1 Daikon radish",
                    "x5 table spoons Bombom Market Gochujang Hot Chilli Sauce"
                ],
                "method": [
                    "Slice the cabbage into 2 inch strips. Tip into a large bowl.  Dissolve 1 tbsp sea salt with a small bowl of warm water, pour over the sliced cabbage and let it sit for minimum 3 hrs.  Rinse the cabbage under cold running water, drain and dry thoroughly. Transfer to a large bowl.",
                    "Add the thinly sliced daikon, grated carrots, minced garlic and spring onions to the cabbage. Mix together 2 tablespoons of fish sauce and mix with 5 table spoons of Bombom Market Gochujang Hot Chilli Sauce, combine into cabbage until fully mixed in. Pack the kimchi tightly into a large jar, seal and leave to ferment in a cool, dark place for minimum 48 hours. From time to time, remove the lid to release some pressure. Store in the fridge and enjoy!"
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/1670933831774-3C9FCHOAIXRRUUA0PIY2/Grapefruit75_Cocktail.jpg?format=2500w",
                "title": "Grapefruit French 75",
                "name": "Grapefruit French 75 – our go-to cocktail this festive season.",
                "service": "Serves 1 | Time 5 minutes",
                "category": "Dinner",
                "composition": "Grapefruit French 75, made exclusively for Whole Foods Market UK by our friends at Quarter Proof.  Our go-to cocktail this festive season.",
                "about": "Grapefruit French 75, made exclusively for Whole Foods Market UK by our friends at Quarter Proof.  A twist on the classic French 75, featuring freshly squeezed grapefruit juice for a real citrus kick.*Scroll for the recipe!*Must be 18+. Please drink responsibly. UK only.",
                "ingredient": [
                    "50ml Quarter Gin",
                    "25ml Grapefruit Juice",
                    "25ml Sugar Syrup",
                    "10ml Champagne Taittinger",
                    "Grapefruit peel to garnish"
                ],
                "method": [
                    "Combine Quarter Gin, grapefruit juice and sugar syrup into a cocktail shaker with ice.  Shake vigorously for approximately 20 seconds.",
                    "Strain cocktail into a flute or a coupette glass, top with Taittinger Champagne.  Garnish with grapefruit peel and enjoy!",
                    "*Must be 18+.  Please drink responsibly.  UK only."
                ],
                "info": [
                    "Nutritional Info:",
                    "Per serving: 193kcals, 0g fat, 0g protein, 27g carbs.",
                    "Note: We've provided special diet and nutritional information for educational purposes. But remember - we're cooks, not doctors! You should follow the advice of your health-care provider. And since product formulations change, check product labels for the most recent ingredient information."
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/169c919f-c333-4604-9893-a6183e5464ad/2510-4._TTH_._SX1320_._CR0%2C0%2C1320%2C833_.jpg?format=2500w",
                "title": "Peruvian-Style Roasted Chicken with Sweet Onions",
                "service": "Serves 6 | Time 1 hr",
                "category": "Dinner",
                "composition": "This wonderfully aromatic chicken dish is short on prep and big on flavour. It's also a great dish to make ahead the day before and reheat.",
                "about": "This wonderfully aromatic chicken dish is short on prep and big on flavour. It's also a great dish to make ahead the day before and reheat — it's even tastier after the flavours meld. Serve with rice and a green salad.Special Diet: Dairy free, gluten free, wheat free",
                "ingredient": [
                    "1 1/2 teaspoon sunflower oil, plus more for oiling the pan",
                    "1 1/2 tablespoon sweet paprika",
                    "1 tablespoon ground cumin",
                    "2 teaspoons kosher salt",
                    "1 1/4 teaspoon ground black pepper",
                    "5 cloves garlic, finely chopped",
                    "2 1/2 tablespoons white wine vinegar",
                    "2 large sweet onions, thickly sliced",
                    "1 chicken, cut into 10 serving pieces*",
                    "2 red or yellow bell peppers, cut into chunks",
                    "1 lemon, sliced"
                ],
                "method": [
                    "Preheat oven to 425°F. Oil a large roasting pan and set aside.",
                    "In a small bowl, combine paprika, cumin, salt, pepper, garlic, vinegar and oil to make a paste.",
                    "Place onions in a large bowl and toss with 2 tablespoons of the paste.",
                    "Roast, basting occasionally with pan juices, until chicken is cooked through and vegetables are very tender, about 45 minutes.",
                    "Remove from oven and let rest 5 minutes before serving."
                ],
                "info": [
                    "Nutritional Info:",
                    "Per serving: 470 calories (290 from fat), 32g total fat, 9g saturated fat, 140mg cholesterol, 730mg sodium, 9g carbohydrates (3g dietary fiber, 4g sugar), 34g protein.",
                    "Note: We've provi  ded special diet and nutritional information for educational purposes. But remember - we're cooks, not doctors! You should follow the advice of your health-care provider. And since product formulations change, check product labels for the most recent ingredient information."
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/1664534035565-SWKSD4PBITWARQAOQAKB/classic-french-toast._TTW_._CR115%2C0%2C796%2C597_._SR900%2C675_._QL100_.jpg?format=2500w",
                "title": "Classic French Toast",
                "service": "Serves 4 - 6 | Time 30 min",
                "category": "Breakfast",
                "composition": "French toast is a breakfast classic for good reason and using a rich bread such as brioche or challah makes this variation even more irresistible.",
                "about": "French toast is a breakfast classic for good reason and using a rich bread such as brioche or challah makes this variation even more irresistible. Drizzle with honey instead of maple syrup, if you like.",
                "ingredient": [
                    "6 cage-free eggs",
                    "3/4 cup milk",
                    "3/4 cup heavy cream",
                    "1 teaspoon pure vanilla extract",
                    "1/4 teaspoon ground cinnamon",
                    "2 tablespoons unsalted butter, divided",
                    "8 slices brioche or challah bread, or more, up to 10 thick slices",
                    "Maple syrup, optional",
                    "Blackberries, raspberries, blueberries or strawberries, for serving, optional",
                    "1/4 teaspoon fine sea salt"
                ],
                "method": [
                    "Preheat oven to 200°F.",
                    "In a shallow bowl, whisk together eggs, milk, cream, vanilla, cinnamon and salt.",
                    "Heat 1 tablespoon butter in a large skillet over medium heat.",
                    "Working with 4 or 5 slices at a time, dip brioche in egg mixture, turning to coat thoroughly, then gently shake free of any excess.",
                    "Arrange brioche in skillet in a single layer and cook, flipping once, until deep golden brown and cooked through, 2 to 3 minutes per side.",
                    "Transfer to a large baking sheet when done and keep warm in the oven.",
                    "Repeat with remaining butter, brioche and egg mixture.",
                    "Transfer French toast to plates, top with syrup and berries, and serve."
                ],
                "info": [
                    "Nutritional Info:",
                    "Per serving: about 2 slices, 470 calories (260 from fat), 29g total fat, 15g saturated fat, 355mg cholesterol, 470mg sodium, 38g carbohydrates (2g dietary fiber, 4g sugar), 16g protein."
                ]
            },
            {
                "image": "https://images.squarespace-cdn.com/content/v1/630492b401e7102ee99cc184/ed25631f-e050-4bd9-bea1-493ca55ba97a/creamy-gouda-fondue.jpg?format=1500w",
                "title": "Creamy Gouda Fondue",
                "service": "Serves 4 | Time 45 min",
                "category": "Seassonal",
                "composition": "Gouda steals the show in this fondue recipe perfect for fall gatherings.",
                "about": "Gouda steals the show in this fondue recipe perfect for fall gatherings. If you don't have a fondue pot, you can set up a double-boiler, melting the cheese in a bowl set over a pot of simmering water. Take the bowl to the table to serve, then place over simmering water again if it starts to cool.",
                "ingredient": [
                    "12 ounces young gouda cheese, shredded",
                    "4 ounces aged gouda cheese, shredded",
                    "2 tablespoons cornstarch",
                    "1/2 teaspoon dry mustard",
                    "1 clove garlic, peeled and cut in half",
                    "1 cup dry white wine",
                    "1 tablespoon lemon juice",
                    "Pinch ground white pepper",
                    "Assorted dippers:",
                    "• Sliced Pink Lady and Honeycrisp apples",
                    "• Roasted Brussels sprouts",
                    "• Raw cauliflower pieces",
                    "• Roasted baby Yukon Gold potatoes",
                    "• Soft pretzel bites (found in the freezer section), toasted",
                    "• Cornichons",
                    "• Grapes"
                ],
                "info": [
                    "Nutritional Info:",
                    "Per serving: .",
                    "Note: We've provided special diet and nutritional information for educational purposes. But remember - we're cooks, not doctors! You should follow the advice of your health-care provider. And since product formulations change, check product labels for the most recent ingredient information."
                ]
            }
        ]
    }
    )

    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Main data={data} />} />
                    <Route path='/Order' element={<Order />} />
                    <Route path='/Recipe' element={<Recipe dataRecipe={dataRecipe} />} />
                    <Route path='/Store' element={<Store dataStore={dataStore} />} />
                    <Route path='/Favourit' element={<Favourit dataFavori={dataFavori} />} />
                    <Route path='/Daily' element={<Daily />} />
                    <Route path='/:id' element={<Cardinfo />} />
                    <Route path='/:id' element={<CardMap />} />
                </Route>
            </Routes>
        </>
    )
}

export default App