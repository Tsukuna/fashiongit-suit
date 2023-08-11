if (document.readyState == 'loading')
{
  document.addEventListener("DOMContentLoaded", ready)
} else
{
  ready();
}

function ready()
{
  var proContainer = document.getElementsByClassName("pro-container");


  for (var i = 0; i < proContainer.length; i++)
  {
    var allImages = proContainer[i].getElementsByTagName("img");
    for (var i = 0; i < allImages.length; i++)
    {
      var curImage = allImages[i];
      curImage.addEventListener('click', openSingleProductPage);
    }

  }


  for (var i = 0; i < proContainer.length; i++)
  {
    var allCartButtons = proContainer[i].getElementsByClassName("fa-shopping-cart");
    for (var i = 0; i < allCartButtons.length; i++)
    {
      var cartButton = allCartButtons[i];
      cartButton.addEventListener('click', openSingleProductPage);
      
    }

  }




}

function openSingleProductPage(event)
{
  var cartButton = event.target;

  var productItem = cartButton.parentElement;

  var image = productItem.getElementsByTagName('img')[0].src;
  var brand = productItem.getElementsByTagName('span')[0].innerText;
  var title = productItem.getElementsByTagName('h5')[0].innerText;
  var price = productItem.getElementsByTagName('h4')[0].innerText;

  localStorage.setItem("p_image", image);
  localStorage.setItem("p_brand", brand);
  localStorage.setItem("p_title", title);
  localStorage.setItem("p_price", price);

  var path, description;
  var srcSmallImg0, srcSmallTitle0, srcSmallPrice0;
  var srcSmallImg1, srcSmallTitle1, srcSmallPrice1;
  var srcSmallImg2, srcSmallTitle2, srcSmallPrice2;
  var srcSmallImg3, srcSmallTitle3, srcSmallPrice3;
  var srcSmallImg4, srcSmallTitle4, srcSmallPrice4;
  var srcSmallImg5, srcSmallTitle5, srcSmallPrice5;
  var srcSmallImg6, srcSmallTitle6, srcSmallPrice6;
  var srcSmallImg7, srcSmallTitle7, srcSmallPrice7;
  var srcSmallImg8, srcSmallTitle8, srcSmallPrice8;
  var srcSmallImg9, srcSmallTitle9, srcSmallPrice9;
  var srcSmallImg10, srcSmallTitle10, srcSmallPrice10;
  var srcSmallImg11, srcSmallTitle311, srcSmallPrice11;


  if (title.match("Suit") == "Suit")
  {
    path = "Shop / Suit";
    description = "Introducing our Premium Wool Blend Charcoal Suit, a blend of high-quality wool for superior comfort and durability. Its tailored fit guarantees a sharp, modern silhouette that complements diverse body types. The single-breasted jacket boasts a classic notched lapel, a two-button closure, and a welt chest pocket. Inside, the luxurious satin lining enhances the premium feel. The flat-front trousers, featuring a zip fly and hook-and-bar closure, offer a slim yet comfortable fit that perfectly aligns with the suit's contemporary look. Its charcoal hue effortlessly transitions from day to night, allowing adaptable styling for any occasion. Complete the ensemble with our exquisite silk neckties and leather dress shoes to command attention and create a polished appearance that leaves a lasting impression."

    srcSmallImg0 = "https://suitsoutlets.com/cdn/shop/files/1_1728x_275b7a45-b645-41bc-835d-05dc142531a9_700x.jpg?v=1684424411";
    srcSmallTitle0 = "Wool Regular Fit Blazer Black Solid Suit";
    srcSmallPrice0 = "$195.99";

    srcSmallImg1 = "https://suitsoutlets.com/cdn/shop/products/4Z8A8827_800x.jpg?v=1652470675";
    srcSmallTitle1 = "Men's  Blend Sports Jacket Green Suit";
    srcSmallPrice1 = "$150.65";

    srcSmallImg2 = "https://suitsoutlets.com/cdn/shop/products/4Z8A6831_-S_800x.jpg?v=1617298566";
    srcSmallTitle2 = "Wool Mini Check Pattern Regular Fit 2 Button Blazer Blue Suit";
    srcSmallPrice2 = "$168.65";

    srcSmallImg3 = "https://suitsoutlets.com/cdn/shop/products/2_1944x_c6f32e1b-99b7-4f37-8e32-da49fa9fe359_800x.jpg?v=1652471102";
    srcSmallTitle3 = "Wool Regular Fit Blazer Solid Color Dark Navy Suit";
    srcSmallPrice3 = "$180";

    // srcSmallImg4 = "https://suitsoutlets.com/cdn/shop/products/dc900_1_brown_1024x_fec72710-7f3a-4282-b6f1-dfe18dcf33e2_900x.jpg?v=1574050073";
    // srcSmallTitle4 = "Double Breasted Suit in Brown";
    // srcSmallPrice4 = "$139.95";

  }
  else if (title.match("Loafer") == "Loafer")
  {
    path = "Home / Shoe";
    description = "Our Loafer Leather Shoes boast a full-grain leather upper that exudes sophistication, coupled with a reliable rubber outsole for enhanced durability and traction. Available in a range of sizes from US 7 to 13, and presented in versatile shades of Red, Brown, Grey and Blue , these shoes cater to a variety of preferences. The lace-up closure ensures a secure fit, while the round toe shape and approximately 1-inch heel height contribute to their timeless appeal, making them a versatile choice for both formal and semi-formal occasions."

    srcSmallImg0 = "https://suitsoutlets.com/cdn/shop/files/s91tan1_800x.jpg?v=1684277147";
    srcSmallTitle0 = "Tan Solid Velvet Loafer";
    srcSmallPrice0 = "$69.95";

    srcSmallImg1 = "https://suitsoutlets.com/cdn/shop/files/s91aqua1_1080x_5a15243c-5945-4f39-8ced-e98e79d967dc_800x.jpg?v=1684276869";
    srcSmallTitle1 = "Aqua Solid Velvet Loafer";
    srcSmallPrice1 = "$69.95";

    srcSmallImg2 = "https://suitsoutlets.com/cdn/shop/files/s91burg1_800x.jpg?v=1684276480";
    srcSmallTitle2 = "Burgundy Solid Velvet Loafer";
    srcSmallPrice2 = "$65.95";

    srcSmallImg3 = "https://suitsoutlets.com/cdn/shop/files/s91GREY1_800x.jpg?v=1684276120";
    srcSmallTitle3 = "Gray Solid Velvet Loafer";
    srcSmallPrice3 = "$65.95";

    // srcSmallImg4 = "https://suitsoutlets.com/cdn/shop/files/s91carolina1_600x.jpg?v=1684276287";
    // srcSmallTitle4 = "Carolina Blue Solid Velvet Loafer";
    // srcSmallPrice4= "$69.95";

  }
  else if (title.match("Tie") == "Tie")
  {
    path = "Shop / Necktie";
    description = "Introducing our Classic Elegance Silk Necktie: a meticulously handcrafted accessory boasting premium silk material with dimensions of 58 inches in length and 3.25 inches in width. The silk's inherent lustrous sheen adds a subtle yet elegant radiance to its timeless design, effortlessly complementing both solid and patterned shirts. With expert craftsmanship ensuring top-tier quality, its versatile range of sophisticated colors harmoniously matches various outfits. This necktie's easy-to-tie nature, coupled with its ideal width, guarantees a balanced and well-proportioned knot for any formal or semi-formal occasion."

    srcSmallImg0 = "https://opt.moovweb.net/?quality=90&width=1200&height=&format=webp&img=%2F%2Fshop.thetiebar.com%2Fcdn%2Fshop%2Fproducts%2F33025.jpg%3Fv%3D1613769240";
    srcSmallTitle0 = "Mini Dots Sage Green Tie";
    srcSmallPrice0 = "$50";

    srcSmallImg1 = "https://opt.moovweb.net/?quality=90&width=900&height=&format=webp&img=%2F%2Fshop.thetiebar.com%2Fcdn%2Fshop%2Fproducts%2F33031.jpg%3Fv%3D1613769231";
    srcSmallTitle1 = "Bulletin Dot Sage Green Tie";
    srcSmallPrice1 = "$50";

    srcSmallImg2 = "https://opt.moovweb.net/?quality=90&width=900&height=&format=webp&img=%2F%2Fshop.thetiebar.com%2Fcdn%2Fshop%2Fproducts%2FTIE-4735-0205.jpg%3Fv%3D1613769397";
    srcSmallTitle2 = "Bhldn Union Solid Light Champagne Tie";
    srcSmallPrice2 = "$40";

    // srcSmallImg3 = "https://www.mensuits.com/cdn/shop/products/27185_CS0536_jpg.jpg?v=1670440521";
    // srcSmallTitle3 = "Smoke Grey Solid Tie";
    // srcSmallPrice3= "$50";

  



  }

  else if (title.match("Shirt") == "Shirt")
  {
    path = "Home / Shirt";
    description = "Introducing our Slim Fit Dress Cotton Shirt, meticulously tailored to offer a contemporary silhouette that enhances your natural body lines. Crafted from luxurious cotton, its premium fabric ensures a gentle touch against your skin while providing exceptional breathability. The timeless design showcases a pointed collar, full button-front closure, and adjustable cuffs, allowing for versatile styling suitable for business meetings, formal events, and even smart-casual occasions. Engineered for convenience, its easy-care attributes make it machine washable, guaranteeing that it retains its impeccable shape and color, wear after wear. Elevate your wardrobe effortlessly with this shirt that embodies the perfect blend of modern sophistication and classic comfort."

    srcSmallImg0 = "https://suitsoutlets.com/cdn/shop/files/S-S100-WHITE_800x.jpg?v=1686778890";
    srcSmallTitle0 = "Slim Fit Dress Cotton Shirt In White";
    srcSmallPrice0 = "$55.95";

    srcSmallImg1 = "https://suitsoutlets.com/cdn/shop/files/S-S100-RED_800x.jpg?v=1686778950";
    srcSmallTitle1 = "Slim Fit Dress Cotton Shirt In Red";
    srcSmallPrice1 = "$55.95";

    srcSmallImg2 = "https://suitsoutlets.com/cdn/shop/files/S-S100-SKY-BLUE_600x.jpg?v=1686778492";
    srcSmallTitle2 = "Slim Fit Dress Cotton Shirt In Sky Blue";
    srcSmallPrice2 = "$55.95";

    srcSmallImg3 = "https://suitsoutlets.com/cdn/shop/files/R-S100-BLACK_800x.jpg?v=1686777215";
    srcSmallTitle3 = "Slim Fit Dress Cotton Shirt In Black";
    srcSmallPrice3 = "$55.95";

  }
  else if (title.match("Watch") == "Watch")
  {
    path = "Home / Watch";
    description = "Introducing the Prisma Elegante Chronograph Watch: a harmonious blend of Swiss Quartz movement, a resilient stainless steel case measuring 42mm in diameter, and a sapphire crystal for enhanced durability. With water resistance up to 50 meters, this timepiece seamlessly combines style and functionality. Its chronograph feature adds precision to your timekeeping, while the genuine leather strap, available in versatile colors such as black, brown, and navy, ensures comfort and luxury. Further enhancing its practicality are a date display, luminous hands for low-light visibility, and a secure deployment clasp. Elevate your wristwear game with this meticulously crafted watch, a true testament to FashionGit's commitment to redefining men's fashion. "

    srcSmallImg0 = "https://prisma.watch/wp-content/uploads/2020/07/P.2016_L-1.jpg";
    srcSmallTitle0 = "Prisma P.2016 Alfa Black Watch";
    srcSmallPrice0 = "$80";

    srcSmallImg1 = "https://prisma.watch/wp-content/uploads/2017/05/PRISMA-P1486-HEREN-HORLOGE-TITANIUM-ZILVER-L-1-donker-.jpg";
    srcSmallTitle1 = "Prisma P.1486 Tailor Brown Watch";
    srcSmallPrice1 = "$140";

    srcSmallImg2 = "https://prisma.watch/wp-content/uploads/2016/12/PRISMA-P1903-HEREN-HORLOGE-EDELSTAAL-ROSEGOUD-DATUM-L.jpg";
    srcSmallTitle2 = "Prisma Traveller Vigorous Blue Watch";
    srcSmallPrice2 = "$100";

    srcSmallImg3 = "https://prisma.watch/wp-content/uploads/2021/11/P.2035recht.jpg";
    srcSmallTitle3 = "Prisma  Explorer Sport Leather Watch";
    srcSmallPrice3 = "$80";

  }
  else if (title.match("Double") == "Double")
  {
    path = "Home / Suit";
    description = "Introducing our Double Breasted Stripe Suit, meticulously crafted from a premium wool blend that exudes sophistication. This exquisite suit features a timeless charcoal gray hue adorned with subtle white pinstripes, adding a touch of visual intrigue. The jacket boasts a double-breasted design with distinguished peak lapels, while the flat-front pants with a tailored leg offer both comfort and a refined silhouette. Secured with a six-button front closure, this ensemble seamlessly blends classic style with contemporary sensibility. The inclusion of multiple interior and exterior pockets enhances convenience without compromising on elegance. Elevate your formal attire with this distinguished suit that embodies the perfect harmony of craftsmanship and style"

    srcSmallImg0 = "https://suitsoutlets.com/cdn/shop/products/dc900_1_brown_1024x_fec72710-7f3a-4282-b6f1-dfe18dcf33e2_900x.jpg?v=1574050073";
    srcSmallTitle0 = "Double Breasted Stripe in Brown";
    srcSmallPrice0 = "$139.95";

    srcSmallImg1 = "https://suitsoutlets.com/cdn/shop/products/vinci-mens-charcoal-executive-stripe-double-breasted-suits-dss-3-19_1000x.jpg?v=1574049575";
    srcSmallTitle1 = "Double Breasted Stripe in Black ";
    srcSmallPrice1 = "$145.95";

    srcSmallImg2 = "https://suitsoutlets.com/cdn/shop/products/DSS-4-PURPLE_800x.jpg?v=1638997255";
    srcSmallTitle2 = "Double Breasted Stripe in Purple";
    srcSmallPrice2 = "$145.95 ";

    srcSmallImg3 = "https://suitsoutlets.com/cdn/shop/products/DRW-02-MOCHA_600x.jpg?v=1633556864";
    srcSmallTitle3 = "Mocha Double Breasted in Brown";
    srcSmallPrice3 = "$155.95";

  }
  else if (title.match("") == "")
  {
    path = "Home / Shoe";
    description = ""

    srcSmallImg0 = "";
    srcSmallTitle0 = "";
    srcSmallPrice0 = "$69.95";

    srcSmallImg1 = "";
    srcSmallTitle1 = " ";
    srcSmallPrice1 = "$50";

    srcSmallImg2 = "";
    srcSmallTitle2 = "";
    srcSmallPrice2 = "$50 ";

    srcSmallImg3 = "";
    srcSmallTitle3 = "";
    srcSmallPrice3 = "$50";

  }
  else if (title.match("") == "")
  {
    path = "Home / ";
    description = ""

    srcSmallImg0 = "";
    srcSmallTitle0 = "";
    srcSmallPrice0 = "";

    srcSmallImg1 = "";
    srcSmallTitle1 = " ";
    srcSmallPrice1 = "";

    srcSmallImg2 = "";
    srcSmallTitle2 = "";
    srcSmallPrice2 = " ";

    srcSmallImg3 = "";
    srcSmallTitle3 = "";
    srcSmallPrice3 = "";

  }


  
  else
  {
    path = "Home / Product";
    description = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit tempora dolore animi! Cumque, reprehenderit nisi facilis inventore qui deleniti, ad est ipsum mollitia quos esse quam voluptates ratione, sapiente quaerat veritatis necessitatibus voluptatem quasi amet magnam. Velit vero nam id accusantium deserunt quibusdam impedit suscipit!"



  }
  localStorage.setItem("p_path", path);
  localStorage.setItem("p_description", description);

  localStorage.setItem("p_srcSmallImg0", srcSmallImg0);
  localStorage.setItem("p_srcSmallTitle0", srcSmallTitle0);
  localStorage.setItem("p_srcSmallPrice0", srcSmallPrice0);

  localStorage.setItem("p_srcSmallImg1", srcSmallImg1);
  localStorage.setItem("p_srcSmallTitle1", srcSmallTitle1);
  localStorage.setItem("p_srcSmallPrice1", srcSmallPrice1);

  localStorage.setItem("p_srcSmallImg2", srcSmallImg2);
  localStorage.setItem("p_srcSmallTitle2", srcSmallTitle2);
  localStorage.setItem("p_srcSmallPrice2", srcSmallPrice2);

  localStorage.setItem("p_srcSmallImg3", srcSmallImg3);
  localStorage.setItem("p_srcSmallTitle3", srcSmallTitle3);
  localStorage.setItem("p_srcSmallPrice3", srcSmallPrice3);

  
//   localStorage.setItem("p_srcSmallImg4", srcSmallImg4);
//   localStorage.setItem("p_srcSmallTitle4", srcSmallTitle4);
//   localStorage.setItem("p_srcSmallPrice4", srcSmallPrice4);





  window.location.href = 'shop_detail2.html';
}

function allBtnClickOnload()
{

  document.getElementById("allItemsBtn").click();
}