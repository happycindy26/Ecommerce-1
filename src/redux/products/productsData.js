import oliveSerum from '../../images/OliveSkinSerum_Box.jpg';
import acaiSerum from '../../images/AcaiBerrySerum_Box.jpg';
import oliveCreamCleanser from "../../images/OliveSoothingCreamCleanserBox.jpg";
import boostBalancing from '../../images/BoostBalancingBox_100.jpg';
import coconutOil from '../../images/CoconutGlowBodyHairOil.jpg'
import healingLipBalm from '../../images/Healing_Lip_Balm.jpg';
import nourishingOil from '../../images/NourishingBodyOilBox_50.jpg';
import oliveneRepair from '../../images/Olivene_Repair_Balm.jpg';
import oliveRepairCream from '../../images/OliveRepairCream_Box.jpg';

const ProductsData = [
    {
        id: 1,
        name: "Acai Serum",
        src: acaiSerum,
        price: 45,
        description: "Antioxidant face serum for daily vitamin boosting with essential anti-aging vitamins A, C, E, and F. A potent combination of vitamins, minerals and amino acids that shield skin from damage caused by free radicals, environmental stressors, and sun damage. Reduces and fades the appearance of age spots and scarring. This powerhouse blend of superfoods and antioxidants; Cranberry oil, Blackberry oil, Squalene, and Vitamin E  means they are much more effective when used together, rather than single antioxidants being used on their own. Suitable for all skin types.",
        ingredients: "Euterpe Oleracea (Acai Berry) Oil, Squalene (Olive), Vaccinium Macrocarpon (Cranberry) Seed Oil, Rubus Fruticosus (Blackberry) Seed Oil, Coco-Caprylate, Bisabolol, Tocopherol (Natural Vitamin E), Flavour (Natural, Edible Acai Berry)"
      },
      {
        id: 2,
        name: "Olive Serum",
        src: oliveSerum,
        price: 32,
        description: "Olive Skin Serum contains 99.7% of plant derived olive squalene with the added benefits  of Natural Vitamin E and Vitamin C ester.  Most importantly these ingredients work to maximise the healing and anti-aging benefits of this product. It is a skin loving serum that penetrates quickly and as a result leaves your skin soft and silky.",
        ingredients: "Squalene (Olive) 99.7%, Tocopherol (Natural Vitamin E) 0.1%, Lecithin 0.1%, Ascorbyl Palmitate (Vitamin C) 0.1%"
      },
      {
        id: 3,
        name: "Olive Cream Cleanser",
        src: oliveCreamCleanser,
        price: 45,
        description: "Only natural foaming and cleansing agents have been used in developing Botani’s PhytoBody Wash, which is also completely free from harsh chemicals and sulphates. Contains key plant extracts such as Aloe Vera, Chamomile, Calendula and Olive Leaf Extract. This nourishing and refreshing body wash will leave your skin feeling squeaky clean, soft and smooth.",
        ingredients: "Aqua, Sodium Cocoyl Glutamate, Glycerin, Coco-Glucoside (and) Glyceryl Oleate, Coco-Betaine, Cyamopsis Tetragonoloba (Guar) Gum, Coco-Glucoside, Hydrolyzed Soy Protein"
      },
      {
        id: 4,
        name: "Boost Balancing",
        src: boostBalancing,
        price: 32,
        description: "Olive Skin Serum contains 99.7% of plant derived olive squalene with the added benefits  of Natural Vitamin E and Vitamin C ester.  Most importantly these ingredients work to maximise the healing and anti-aging benefits of this product. It is a skin loving serum that penetrates quickly and as a result leaves your skin soft and silky.",
        ingredients: "Squalene (Olive) 99.7%, Tocopherol (Natural Vitamin E) 0.1%, Lecithin 0.1%, Ascorbyl Palmitate (Vitamin C) 0.1%"
      },
      {
        id: 5,
        name: "Coconut Hair Body Oil",
        src: coconutOil,
        price: 32,
        description: "Olive Skin Serum contains 99.7% of plant derived olive squalene with the added benefits  of Natural Vitamin E and Vitamin C ester.  Most importantly these ingredients work to maximise the healing and anti-aging benefits of this product. It is a skin loving serum that penetrates quickly and as a result leaves your skin soft and silky.",
        ingredients: "Squalene (Olive) 99.7%, Tocopherol (Natural Vitamin E) 0.1%, Lecithin 0.1%, Ascorbyl Palmitate (Vitamin C) 0.1%"
      },
      {
        id: 6,
        name: "Healing Lip Balm",
        src: healingLipBalm,
        price: 32,
        description: "Olive Skin Serum contains 99.7% of plant derived olive squalene with the added benefits  of Natural Vitamin E and Vitamin C ester.  Most importantly these ingredients work to maximise the healing and anti-aging benefits of this product. It is a skin loving serum that penetrates quickly and as a result leaves your skin soft and silky.",
        ingredients: "Squalene (Olive) 99.7%, Tocopherol (Natural Vitamin E) 0.1%, Lecithin 0.1%, Ascorbyl Palmitate (Vitamin C) 0.1%"
      },
      {
        id: 7,
        name: "Nourishing Body Oil",
        src: nourishingOil,
        price: 45,
        description: "Antioxidant face serum for daily vitamin boosting with essential anti-aging vitamins A, C, E, and F. A potent combination of vitamins, minerals and amino acids that shield skin from damage caused by free radicals, environmental stressors, and sun damage. Reduces and fades the appearance of age spots and scarring. This powerhouse blend of superfoods and antioxidants; Cranberry oil, Blackberry oil, Squalene, and Vitamin E  means they are much more effective when used together, rather than single antioxidants being used on their own. Suitable for all skin types.",
        ingredients: "Euterpe Oleracea (Acai Berry) Oil, Squalene (Olive), Vaccinium Macrocarpon (Cranberry) Seed Oil, Rubus Fruticosus (Blackberry) Seed Oil, Coco-Caprylate, Bisabolol, Tocopherol (Natural Vitamin E), Flavour (Natural, Edible Acai Berry)"
      },
      {
        id: 8,
        name: "Olivene Repair Balm",
        src: oliveneRepair,
        price: 45,
        description: "Antioxidant face serum for daily vitamin boosting with essential anti-aging vitamins A, C, E, and F. A potent combination of vitamins, minerals and amino acids that shield skin from damage caused by free radicals, environmental stressors, and sun damage. Reduces and fades the appearance of age spots and scarring. This powerhouse blend of superfoods and antioxidants; Cranberry oil, Blackberry oil, Squalene, and Vitamin E  means they are much more effective when used together, rather than single antioxidants being used on their own. Suitable for all skin types.",
        ingredients: "Euterpe Oleracea (Acai Berry) Oil, Squalene (Olive), Vaccinium Macrocarpon (Cranberry) Seed Oil, Rubus Fruticosus (Blackberry) Seed Oil, Coco-Caprylate, Bisabolol, Tocopherol (Natural Vitamin E), Flavour (Natural, Edible Acai Berry)"
      },
      {
        id: 9,
        name: "Olive Repair Cream",
        src: oliveRepairCream,
        price: 45,
        description: "Antioxidant face serum for daily vitamin boosting with essential anti-aging vitamins A, C, E, and F. A potent combination of vitamins, minerals and amino acids that shield skin from damage caused by free radicals, environmental stressors, and sun damage. Reduces and fades the appearance of age spots and scarring. This powerhouse blend of superfoods and antioxidants; Cranberry oil, Blackberry oil, Squalene, and Vitamin E  means they are much more effective when used together, rather than single antioxidants being used on their own. Suitable for all skin types.",
        ingredients: "Euterpe Oleracea (Acai Berry) Oil, Squalene (Olive), Vaccinium Macrocarpon (Cranberry) Seed Oil, Rubus Fruticosus (Blackberry) Seed Oil, Coco-Caprylate, Bisabolol, Tocopherol (Natural Vitamin E), Flavour (Natural, Edible Acai Berry)"
      }
]

export default ProductsData;
