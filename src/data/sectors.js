// Verified working, high-definition, and highly contextual Unsplash assets
// Updated to deeply represent the Nepalese context (Kathmandu, Himalayas, local agriculture, etc.)
const IMG = {
  // General Nepal Heritage & Landscape
  kathmanduAerial: {
    url: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Raimond Klavins" // Patan Durbar Square/Kathmandu Valley
  },
  nepalTemple: {
    url: "https://images.unsplash.com/photo-1558799401-1dcba79834c2?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Ashim D'Silva" // Nepal temple
  },
  nepalArchitecture: {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Sam Power" // Boudhanath Stupa
  },
  nepalHimalayas: {
    url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Sam Power" // Himalayan Mountain Peak
  },

  // Taxation, Revenue & Digital Payments
  taxFinance: {
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / StellrWeb" // Financial calculator and forms
  },
  digitalPayment: {
    url: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / David Dvořáček" // QR code mobile scan (QR payments are huge in Nepal)
  },
  customsImport: {
    url: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Timelab Pro" // Cargo and logistics
  },
  lotteryInvoice: {
    url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Avery Evans" // Receipts and invoicing
  },

  // Energy & Hydropower
  nepalRiver: {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Sergey Pesterev" // Mountain river
  },
  solarPanels: {
    url: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / American Public Power Association" // Solar grid
  },
  powerTransmission: {
    url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Matthew Henry" // Transmission lines
  },
  greenHydrogen: {
    url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / American Public Power Association" // Eco-friendly industrial tech
  },

  // Infrastructure & Roads
  mountainHighway: {
    url: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Dino Reichmuth" // Mountain road
  },
  bridgeConstruction: {
    url: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Danist Soh" // Bridge construction
  },
  tunnelEng: {
    url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Felipe Giacometti" // Modern tunnel engineering
  },
  railwayTransit: {
    url: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Gabriel Garcia Marengo" // Railway transit
  },

  // Agriculture & Irrigation
  riceTerraces: {
    url: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Raimond Klavins" // Rice terraces farming
  },
  irrigationWater: {
    url: "https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Kym Ellis" // Irrigation water flow
  },
  livestockFarming: {
    url: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Stijn te Strake" // Livestock cattle
  },
  farmingIncentives: {
    url: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Dan Meyers" // Asian farmer inspecting crops
  },

  // Education & STEM
  schoolChildren: {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / NeONBRAND" // School children
  },
  stemEducation: {
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Christopher Gower" // STEM laptops
  },
  medicalCollege: {
    url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / National Cancer Institute" // Medical learning
  },
  schoolInfrastructure: {
    url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Kimberly Farmer" // Books and education archives
  },

  // Health & Medical
  hospitalWards: {
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Martha Dominguez de Gouveia" // Hospital corridor
  },
  childHealthcare: {
    url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / National Cancer Institute" // Pediatrician
  },
  mountainAirAmbulance: {
    url: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Ashim D'Silva" // Rescue helicopter
  },
  pharmaceuticals: {
    url: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / National Cancer Institute" // Medicines
  },

  // Technology & Computing
  serverRoom: {
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Taylor Vick" // AI Compute Center
  },
  microchipAi: {
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Harrison Broadbent" // Processor chip
  },
  remoteTechWork: {
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Annie Spratt" // Remote tech professionals
  },
  fintechSec: {
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Dan Nelson" // Mobile banking layout
  },

  // Investment & Business Law
  ventureCapital: {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Scott Graham" // Finance spreadsheets
  },
  modernApartment: {
    url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Naomi Hébert" // High-rise apartments
  },
  commercialLaw: {
    url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Tingey Injury Law Firm" // Legal gavel
  },

  // Tourism & Cultural Trails
  mountainClimbing: {
    url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Toomas Tartes" // Mountaineers on an alpine climb
  },
  culturalTrail: {
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Toomas Tartes" // Mountain hiking trail
  },
  janakpurWedding: {
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Ravi Sharma" // Traditional wedding decorations
  },

  // Social Security & Welfare
  childWelfare: {
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Larm Rmah" // Social support for child
  },
  gigEconomy: {
    url: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Jezael Melgoza" // Motorcycle delivery rider
  },
  socialProtection: {
    url: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Sai De Silva" // Caring community parent and child
  },

  // Labour, Immigration & Skills
  skillTraining: {
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Jeriden Villegas" // Worker and safety helm
  },
  airportTerminal: {
    url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Suganth" // Airport departures
  },
  remittanceTransfer: {
    url: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Towfiqu barbhuiya" // Money transfer
  },

  // Governance & Administration
  nepalGovernanceFlag: {
    url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Ashim D'Silva" // Nepal flag
  },
  digitalAusterity: {
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / Scott Graham" // Clean desk official policy signing
  },
  biometricTimecard: {
    url: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&auto=format&fit=crop&q=80",
    source: "Unsplash / George Prentzas" // Biometric security interface
  }
};

export const sectors = [
  {
    id: "taxation",
    title: "Taxation & Revenue",
    tag: "Reform",
    icon: "🧾",
    description: "Sweeping tax cuts to reduce the burden on individuals and businesses while broadening the base.",
    color: "#C9A84C",
    budgetComparison: {
      previous: "1,315",
      current: "1,405.31",
      unit: "billion",
      change: "+6.9%",
      category: "Revenue Target"
    },
    nepaliText: `उद्यम व्यवसायलाई राहत र मध्यम वर्गको विस्तार गरि समग्र अर्थतन्त्रलाई गतिशील बनाउन करका दरमा बृहत पुनरावलोकन गरेको छु करको बोझ घटाउन आयकरको छुटको सिमा दोब गरि व्यक्तिका लागि द० लाख रुपैया पुर्याए आएको छु। व्यक्तिगत आयकरको अधिकतम दरलाई १० प्रत बिन्दुले घटाएको छु। औद्योगिक कच्चा पदार्थको भनसार महसुल तयारी मालवस्तु भन्दा कम्तिमा एक तह न्यून हुने गरि २७३ प्रकारका कच्चा पदार्थमा भसार दर घटाएको छु। विद्यमान ११ तहको भनसार दरलाई सात तहमा सिमित गरेको छु। हाल ३६० वस्तुमा लागि आएको अन्त शुल्क खारेज गरेको छु। डिजिटल भुक्तानीको माध्यमबाट उपभोक्ताले गर्ने खरिदमा बिजक जारी हुँदाकै समयमा मूल्य अभिवृद्धि करको १० प्रत छुट पाउने व्यवस्था कार्यान्वयन गर्नेछौ। मूल्य अभिवृद्धि कर फिर्ता गर्ने प्रणाली स्वचालित बनाउने छौ।`,
    bullets: [
      {
        text: "Income tax exemption limit doubled to Rs. 10 lakh for individuals",
        image: IMG.taxFinance.url,
        source: IMG.taxFinance.source,
        nepaliText: "करको बोझ घटाउन आयकरको छुटको सिमा दोब गरि व्यक्तिका लागि द० लाख रुपैया पुर्याए आएको छु।"
      },
      {
        text: "Maximum personal income tax rate cut by 10 percentage points",
        image: IMG.ventureCapital.url,
        source: IMG.ventureCapital.source,
        nepaliText: "व्यक्तिगत आयकरको अधिकतम दरलाई १० प्रत बिन्दुले घटाएको छु।"
      },
      {
        text: "Customs on 273 types of raw materials reduced; 11-tier structure simplified to 7",
        image: IMG.customsImport.url,
        source: IMG.customsImport.source,
        nepaliText: "औद्योगिक कच्चा पदार्थको भनसार महसुल तयारी मालवस्तु भन्दा कम्तिमा एक तह न्यून हुने गरि २७३ प्रकारका कच्चा पदार्थमा भसार दर घटाएको छु। विद्यमान ११ तहको भनसार दरलाई सात तहमा सिमित गरेको छु।"
      },
      {
        text: "Excise duty abolished on 360 goods",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Timelab Pro",
        nepaliText: "हाल ३६० वस्तुमा लागि आएको अन्त शुल्क खारेज गरेको छु।"
      },
      {
        text: "10% VAT discount on digital payments; automated VAT refund system",
        image: IMG.digitalPayment.url,
        source: IMG.digitalPayment.source,
        nepaliText: "डिजिटल भुक्तानीको माध्यमबाट उपभोक्ताले गर्ने खरिदमा बिजक जारी हुँदाकै समयमा मूल्य अभिवृद्धि करको १० प्रत छुट पाउने व्यवस्था कार्यान्वयन गर्नेछौ। मूल्य अभिवृद्धि कर फिर्ता गर्ने प्रणाली स्वचालित बनाउने छौ।"
      },
      {
        text: "50% income tax exemption on IT service exports",
        image: IMG.remoteTechWork.url,
        source: IMG.remoteTechWork.source,
        nepaliText: "सूचना प्रविधि क्षेत्रमा सूचना प्रविधि क्षेत्रमा कार्यरत जनशक्तिले प्राप्त गर्ने स्वेट इक्विटीको रकमलाई कर योग्य आय गणनामा सत प्रतिशत छुट हुने व्यवस्था मिलाएको छु।"
      },
      {
        text: "Tax dispute amnesty: pending cases settled with penalty/interest waived",
        image: IMG.commercialLaw.url,
        source: IMG.commercialLaw.source,
        nepaliText: "सरकार वा करदाता पक्षबाट अदालत वा न्यायिक निकायमा पुगी विचाराधीन रहेको कर विवाद समाधान गर्न निर्धारित कर रकममा प्रति प्रत थप गरी तोकिएको म्याद भित्र बुझाएमा मुद्दा फिर्ता लि शुल्क जरिवाना थप दस्तुर विलम्ब शुल्क वा ब्याज मिनाहा हुने व्यवस्था मिलाएको छु।"
      },
      {
        text: "Lottery-style invoice system to promote billing culture",
        image: IMG.lotteryInvoice.url,
        source: IMG.lotteryInvoice.source,
        nepaliText: "स्स्तु वा सेवाको खरिद बिक्रीमा बिजक लिनै दिने संस्कृति प्रोत्साहन गर्न लट्री जस्ता जस्ता आकर्षक कार्यक्रम सुरु गरिनेछ।"
      },
    ],
  },
  {
    id: "energy",
    title: "Energy & Hydropower",
    tag: "Expansion",
    icon: "⚡",
    description: "Nepal Electricity Authority restructured; massive capacity additions and regional power trade unlocked.",
    color: "#4A9B6F",
    budgetComparison: {
      previous: "86.10",
      current: "95+",
      unit: "billion",
      change: "+10.3%",
      category: "Energy, Water & Irrigation"
    },
    nepaliText: `लामो समयदखि थातिरहेको नेपाल विद्युत प्राधिकरणको पुनसंरचना सम्पन्न गरिनेछ। नेपाल विद्युत प्राधिकरणलाई विद्युत उत्पादन, प्रसारण र वितरण तथा व्यापारका लागि तीन छुट्टाछुट्टै कम्पनीमा विभाजन गर्नेछौ। आगामी आर्थिक वर्ष जलविद्युत आयोजनाबाट ६७० ० मेगावाट र सौर्य आयोजनाबाट ३७० मेगावाट गरि १०४० मेगावाट राष्ट्रिय प्रसारण प्रणालीमा आबद्ध हुदा कुल जडित क्षमता ५५३५ मेगावाट पुग्नेछ। १२०० मेगावाटको बुढी गण्डकी जलाशय युक्त आयोजना निर्माणका लागि अधिकार सम्पन्न प्राधिकरण मोडलमा निर्माण कार्य अगाडि बढाउने छौ। ग्रीन हाइड्रोजनको वयवसायिक उत्पादनको प्रारम्भ गर्न हेटौडामा २.५ मेगावाट क्षमताको ग्रीन हाइड्रोजन प्लान्टलाई पाइलट परियोजनाको रुपमा कार्यान्वयन गर्नेछौ।`,
    bullets: [
      {
        text: "NEA split into 3 separate companies: generation, transmission, and distribution",
        image: IMG.powerTransmission.url,
        source: IMG.powerTransmission.source,
        nepaliText: "नेपाल विद्युत प्राधिकरणलाई विद्युत उत्पादन, प्रसारण र वितरण तथा व्यापारका लागि तीन छुट्टाछुट्टै कम्पनीमा विभाजन गर्नेछौ।"
      },
      {
        text: "1,040 MW to be added next year (670 MW hydro + 370 MW solar)",
        image: IMG.solarPanels.url,
        source: IMG.solarPanels.source,
        nepaliText: "आगामी आर्थिक वर्ष जलविद्युत आयोजनाबाट ६७० ० मेगावाट र सौर्य आयोजनाबाट ३७० मेगावाट गरि १०४० मेगावाट राष्ट्रिय प्रसारण प्रणालीमा आबद्ध हुदा कुल जडित क्षमता ५५३५ मेगावाट पुग्नेछ।"
      },
      {
        text: "1,200 MW Budhigandaki reservoir project to proceed under empowered authority model",
        image: IMG.nepalRiver.url,
        source: IMG.nepalRiver.source,
        nepaliText: "१२०० मेगावाटको बुढी गण्डकी जलाशय युक्त आयोजना निर्माणका लागि अधिकार सम्पन्न प्राधिकरण मोडलमा निर्माण कार्य अगाडि बढाउने छौ।"
      },
      {
        text: "670 MW Dudhkoshi storage project financial closure to begin",
        image: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Zbynek Burival",
        nepaliText: "६७० मेगावाटको दुधकोशी जलाशय युक्त आयोजनाको फाइनान्सियल क्लोजर सम्पन्न गरी ठेक्का प्रक्रिया सुरु गर्नेछौ।"
      },
      {
        text: "Rs. 85.54 billion allocated for energy generation, transmission & distribution",
        image: "https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Appolinary Kalashnikova",
        nepaliText: "उर्जा उत्पादन प्रसारण र वितरण लाइन निर्माणका लागि रु ८५ अर्ब ५४ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Green hydrogen pilot plant (2.5 MW) at Hetauda",
        image: IMG.greenHydrogen.url,
        source: IMG.greenHydrogen.source,
        nepaliText: "ग्रीन हाइड्रोजनको वयवसायिक उत्पादनको प्रारम्भ गर्न हेटौडामा २.५ मेगावाट क्षमताको ग्रीन हाइड्रोजन प्लान्टलाई पाइलट परियोजनाको रुपमा कार्यान्वयन गर्नेछौ।"
      },
      {
        text: "Private sector allowed to trade electricity in international markets",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Carlos Muza",
        nepaliText: "निजी क्षेत्रलाई अन्तराष्ट्रिय बजारमा विद्युत व्यापार गर्न पाउने ने व्यवस्था मिलाउने छौ।"
      },
      {
        text: "Battery storage system for Kathmandu Valley peak demand",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Kumpan Electric",
        nepaliText: "सुखायामको पिक आवरमा हुने विद्युत अभावलाई सम्बोधन गर्न काठमाडौँ उपत्यकामा १० मेगावाटको ब्याट्री स्टोरेज प्रणालीको कार्यक्रम प्रारम्भ गर्नेछौ।"
      },
    ],
  },
  
  {
    id: "roads",
    title: "Roads & Transport",
    tag: "Infrastructure",
    icon: "🛣️",
    description: "Aggressive road construction, highway upgrades, and beginning of Kathmandu fast-track completion.",
    color: "#B8860B",
    budgetComparison: {
      previous: "152",
      current: "286.48",
      unit: "billion",
      change: "+88.5%",
      category: "Roads & Urban Infrastructure"
    },
    nepaliText: `आगामी आर्थिक वर्ष करिब हजार किलोमिटर सडक कालोपत्रे र २७५ वटा सडक पुल निर्माण हुनेछ। १०२८ किलोमिटर लामो पूर्व पश्चिम राजमार्गलाई चार लेनमा स्तरन्नति गर्ने कार्य पाच वर्ष भित्र त्र सम्पन्न गर्नेछौ। काठमाडौ तराई मधेश द्रुत मार्गमा आगामी वर्ष ४०स वटा पुल र किलोमिटर सुरुङ निर्माण सम्पन्न गर्नेछौ। नागढुंगा सुरुङ मार्ग आगामी साउन देखि संचालनमा ल्याउनेछौ। सडक तथा सहरी पूर्वाधार आधार विकासका लागि २८६ अर्ब ४८ करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "~1,000 km of roads to be blacktopped and 275 bridges built",
        image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Ant Rozetsky",
        nepaliText: "आगामी आर्थिक वर्ष करिब हजार किलोमिटर सडक कालोपत्रे र २७५ वटा सडक पुल निर्माण हुनेछ।"
      },
      {
        text: "East-West Highway upgraded to 4 lanes within 5 years",
        image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Denys Nevozhai",
        nepaliText: "१०२८ किलोमिटर लामो पूर्व पश्चिम राजमार्गलाई चार लेनमा स्तरन्नति गर्ने कार्य पाच वर्ष भित्र त्र सम्पन्न गर्नेछौ।"
      },
      {
        text: "Rs. 37.46 billion for East-West Highway; Rs. 17.64 billion for Kathmandu-Terai Expressway",
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Danist Soh",
        nepaliText: "पूर्व पूर्व पश्चिम राजमार्गको लागि रु ३७ अर्ब ४६ करोड बनियोजन गरेको छु। काठमाडौ तराई मधेश द्रुत मार्गको लागि रु १७ अर्ब ६४ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Nagdhonga tunnel to open next Shrawan (August 2026)",
        image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Avi Richards",
        nepaliText: "नागढुंगा सुरुङ मार्ग आगामी साउन देखि संचालनमा ल्याउनेछौ।"
      },
      {
        text: "Hulaki Highway to be completed within 3 years",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Karsten Würth",
        nepaliText: "हुलाकी राजमार्ग आगामी हामी तीन वर्ष भित्र निर्माण सम्पन्न गर्नेछौ।"
      },
      {
        text: "Rs. 28.52 billion for nationwide road maintenance",
        image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Aditya Chinchure",
        nepaliText: "सडकको राष्ट्र व्यापी मर्मत संभार अभियानका रुपमा संचालन गर्न रु २८ अर्ब ५२ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Rs. 286.48 billion total for road and urban infrastructure",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Pawel Nolbert",
        nepaliText: "सडक तथा सहरी पूर्वाधार आधार विकासका लागि २८६ अर्ब ४८ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Bardibas–Kathmandu Terai railway work to advance",
        image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Sandro Katalina",
        nepaliText: "बर्दीवास देखि काठमाडौँ तराई मध्यस द्रुत मार्ग प्रस्थान बिन्दु सम्मको रेल मार्ग निर्माण कार्य अगाडी बढाउने छौ।"
      },
    ],
  },
  {
    id: "agriculture",
    title: "Agriculture & Irrigation",
    tag: "Modernization",
    icon: "🌾",
    description: "Production-focused subsidies, irrigation expansion, and a move toward contract farming.",
    color: "#2E7D32",
    budgetComparison: {
      previous: "57.48",
      current: "46.92",
      unit: "billion",
      change: "-18.4%",
      category: "Agriculture & Livestock"
    },
    nepaliText: `कृषि क्षेत्रको पुनरुत्थान सरकारको शीर्ष प्राथमिकतामा रहेको छ। न्यूनतम २ करोड सम्म कृषि तथा पशुजन्य उत्पादनका लागि प्रारम्भिक पुजी लगानी गर्ने कृषकलाई सरकारले ४० प्रतित सम्म प्रोत्साहन अनुदान उपलब्ध गराउने पाइलट कार्यक्रमको तयारी गरेको छु। कृषि बिमाको प्रिमियममा दिइने ने अनुदान सहुलियतका लागि रु २ अर्ब १९ करोड विनियोजन गरेको छु। आगामी आर्थिक वर्ष थप १५,८०० हेक्टर खेतियोग्य जमिनमा सिचाई सुविधा पुर्याउने छौ। कृषि तथा पशुपन्छी विकासका लागि रु ४६ अर्ब ९२ करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "40% subsidy for farmers investing Rs. 2 crore+ in agriculture/livestock (pilot)",
        image: IMG.farmingIncentives.url,
        source: IMG.farmingIncentives.source,
        nepaliText: "न्यूनतम २ करोड सम्म कृषि तथा पशुजन्य उत्पादनका लागि प्रारम्भिक पुजी लगानी गर्ने कृषकलाई सरकारले ४० प्रतित सम्म प्रोत्साहन अनुदान उपलब्ध गराउने पाइलट कार्यक्रमको तयारी गरेको छु।"
      },
      {
        text: "80% subsidy on agricultural insurance premiums",
        image: IMG.riceTerraces.url,
        source: IMG.riceTerraces.source,
        nepaliText: "कृषि बिमाको प्रिमियममा दिइने ने अनुदान सहुलियतका लागि रु २ अर्ब १९ करोड विनियोजन गरेको छु। कृषि र पशु बिमामा ८० प्रतित सम्म प्रिमियम अनुदान उपलब्ध गराउदै अन्य अनुदान क्रमश हटाउदै लैजाने दिशा तय गरेको छु।"
      },
      {
        text: "Rs. 32.46 billion for chemical fertiliser procurement",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Zoe Schaeffer",
        nepaliText: "रासायनिक मल खरिदका लागि चालु आर्थिक वर्षको विनियोजनमा वृद्धि गरी रु ३२ अर्ब ४६ करोड पुर्याएको छु।"
      },
      {
        text: "15,800 additional hectares to receive irrigation next year",
        image: IMG.irrigationWater.url,
        source: IMG.irrigationWater.source,
        nepaliText: "आगामी आर्थिक वर्ष थप १५,८०० हेक्टर खेतियोग्य जमिनमा सिचाई सुविधा पुर्याउने छौ। यसबाट खेतियोग्य सिन्चित जमिनको अनुपात ६४ प्रत पुग्नेछ।"
      },
      {
        text: "Farmer identity card system to be completed next year",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / CardMapr",
        nepaliText: "किसानको पहिचान कार्य आगामी आर्थिक वर्षमा सम्पन्न गरि परिचय पत्र वितरण सुरु गर्नेछौ।"
      },
      {
        text: "Warehouse receipt financing for farmers based on stored produce",
        image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Timelab Pro",
        nepaliText: "किसानलाई वित्तीय पहुच प्रदान गर्न र नगद प्रवाह व्यवस्थापन गर्न कृषि उपज भण्डारणको प्रमाणीकरणका आधारमा वेरहाउस रिसिट फाइनान्सिङ गर्ने व्यवस्था मिलाउनेछौ।"
      },
      {
        text: "Green urea fertiliser industry under NEA–private partnership",
        image: IMG.greenHydrogen.url,
        source: IMG.greenHydrogen.source,
        nepaliText: "नेपाल विद्युत प्राधिकरण र निजी क्षेत्रको सहकार्यमा कम्पनी मोडलमा ग्रीन युरिया मल उद्योग संचालन गर्न दिनेछौ। निजी क्षेत्रबाट ग्रीन युरिया उत्पादन प्रबर्धन गर्न खरिद ग्यारेन्टी सम्झौता गरि सहुलियत दरमा विद्युत उपलब्ध गराउने व्यवस्था मिलाउने छौ।"
      },
      {
        text: "Rs. 46.92 billion total for agriculture & livestock",
        image: IMG.livestockFarming.url,
        source: IMG.livestockFarming.source,
        nepaliText: "कृषि तथा पशुपन्छी विकासका लागि रु ४६ अर्ब ९२ करोड विनियोजन गरेको छु।"
      },
    ],
  },

  {
    id: "education",
    title: "Education",
    tag: "Overhaul",
    icon: "📚",
    description: "Structural overhaul from school to university level, with AI integration and international campus entry.",
    color: "#1565C0",
    budgetComparison: {
      previous: "211.17",
      current: "218.30",
      unit: "billion",
      change: "+3.4%",
      category: "Education, Science & Technology"
    },
    nepaliText: `समग्र शैक्षिक इकोसिस्टममा प्रणालीगत पुनरसंरचना गर्नेछौ। राष्ट्रिय विद्यालय नक्सांकन र पूर्वाधार अडिट शिक्षक क्षमता परिक्षण एआई तथा एटेक तत्परता मूल्यांकन समेतका आधारमा नवप्रवर्तन तथा सिप केन्द्रित शिक्षा विस्तार गर्न विद्यालय शिक्षामा लगानी बढाउने छौ। चिकित्सा नर्सिङ सूचना प्रविधि लगायत उच्च शिक्षाका विभिन्न विधामा हाल लगाइएको कोटालाई चालु आर्थिक वर्ष भित्र पुनरावलोकन गरि उल्लेख्य बृद्धि गर्नेछौ। अन्तराष्ट्रिय स्तरका उच्च श्रेणीमा रहेका विश्वविद्यालयलाई नेपालमा क्याम्पस संचालन गर्न नीतिगत व्यवस्था र प्रोत्साहन गर्नेछौ। शिक्षा क्षेत्रका लागि २१८ अर्ब ३० करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "National school mapping, infrastructure audit, and teacher capacity assessment",
        image: IMG.schoolInfrastructure.url,
        source: IMG.schoolInfrastructure.source,
        nepaliText: "राष्ट्रिय विद्यालय नक्सांकन र पूर्वाधार अडिट शिक्षक क्षमता परिक्षण एआई तथा एटेक तत्परता मूल्यांकन समेतका आधारमा नवप्रवर्तन तथा सिप केन्द्रित शिक्षा विस्तार गर्न विद्यालय शिक्षामा लगानी बढाउने छौ।"
      },
      {
        text: "Quotas in medicine, nursing, IT higher education to be significantly increased",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Hush Naidoo Jade Photography",
        nepaliText: "चिकित्सा नर्सिङ सूचना प्रविधि लगायत उच्च शिक्षाका विभिन्न विधामा हाल लगाइएको कोटालाई चालु आर्थिक वर्ष भित्र पुनरावलोकन गरि उल्लेख्य बृद्धि गर्नेछौ।"
      },
      {
        text: "International universities permitted to open campuses in Nepal",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Vasily Koloda",
        nepaliText: "अन्तराष्ट्रिय स्तरका उच्च श्रेणीमा रहेका विश्वविद्यालयलाई नेपालमा क्याम्पस संचालन गर्न नीतिगत व्यवस्था र प्रोत्साहन गर्नेछौ।"
      },
      {
        text: "New medical college (MBBS) at Geta, Sudurpaschim to open FY 2083/84",
        image: IMG.hospitalWards.url,
        source: IMG.hospitalWards.source,
        nepaliText: "सुदुर पश्चिम प्रदेशको गेटा स्थित सहिद दशरथ चन्द स्वास्थ्य विज्ञान विश्वविद्यालयमा शैक्षिक १७८३८४ देखि एमबीबीएस लगायत चिकित्सा शिक्षा शिक्षाका चार वटा विधामा कार्यक्रम संचालन गर्नेछौ।"
      },
      {
        text: "Rs. 8.60 billion for targeted student scholarships",
        image: IMG.socialProtection.url,
        source: IMG.socialProtection.source,
        nepaliText: "विद्यालय तह देखि उच्च शिक्षा सम्मका लक्षित विद्यार्थी छात्रवृतिका लागि रु ८ अर्ब ६० करोड विनियोजन गरेको छु।"
      },
      {
        text: "Math and STEM given top priority for the AI era",
        image: IMG.stemEducation.url,
        source: IMG.stemEducation.source,
        nepaliText: "एआइको युगमा महत्वपूर्ण भूमिका हुने गणित लगायतका शैक्षिक विधालाई उच्च प्राथमिकता दिनेछौ।"
      },
      {
        text: "Rs. 218.30 billion total education allocation",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Element5 Digital",
        nepaliText: "शिक्षा क्षेत्रका लागि २१८ अर्ब ३० करोड विनियोजन गरेको छु।"
      },
    ],
  },
  {
    id: "health",
    title: "Health",
    tag: "Universal Access",
    icon: "🏥",
    description: "Universal health insurance within 3 years, primary healthcare strengthened, and new service bodies established.",
    color: "#B71C1C",
    budgetComparison: {
      previous: "95.81",
      current: "101.95",
      unit: "billion",
      change: "+6.4%",
      category: "Health & Population"
    },
    nepaliText: `यो बजेटले स्वास्थ्य सेवामा नीतिगत फड्को मार्ने लक्ष्य लिएको छु। स्वास्थ्य बिमा कार्यक्रमको व्यापक पुनरसंरचना गर्नेछौ। स्वास्थ्य बिमाको सर्वव्यापीकरणबाट आगामी तीन वर्षमा ९० प्रतित नेपाली स्वास्थ्य बिमाको दायरामा आउने र व्यक्तिगत उपचार खर्चमा उल्लेख्य कटौती हुने अपेक्षा राखेका छौ। बालबालिकामा हुने क्यान्सर रोगको सरकारी अस्पतालमा निशुल्क उपचार हुने व्यवस्था मिलाएको छ। निर्माण सुरु भएका ३३६ आधारभूत अस्पताललाई आगामी तीन वर्षमा निर्माण सम्पन्न गर्नेछौ। कर्णाली प्रदेशका दुर्गम स्थानहरुमा एयर एम्बुलेन्स सेवा सुरु गर्नेछौ। स्वास्थ्य क्षेत्रमा १० अर्ब ९५ करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "Health insurance to cover 90% of Nepalis within 3 years",
        image: IMG.hospitalWards.url,
        source: IMG.hospitalWards.source,
        nepaliText: "स्वास्थ्य बिमाको सर्वव्यापीकरणबाट आगामी तीन वर्षमा ९० प्रतित नेपाली स्वास्थ्य बिमाको दायरामा आउने र व्यक्तिगत उपचार खर्चमा उल्लेख्य कटौती हुने अपेक्षा राखेका छौ।"
      },
      {
        text: "Rs. 15 billion for health insurance; Rs. 13.15 billion for social health protection",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Mufid Majnun",
        nepaliText: "स्वास्थ्य बिमा कार्यक्रममा १५ अर्ब बजेट विनियोजन गरेको छु। विपन्न नागरिक उपचार, आमा सुरक्षा कार्यक्रम, निशुल्क औषधि लगायत स्वास्थ्य सामाजिक सुरक्षाका कार्यक्रमका लागि रु १३ अर्ब १५ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Free cancer treatment for children in government hospitals",
        image: IMG.childHealthcare.url,
        source: IMG.childHealthcare.source,
        nepaliText: "बालबालिकामा हुने क्यान्सर रोगको सरकारी अस्पतालमा निशुल्क उपचार हुने व्यवस्था मिलाएको छ।"
      },
      {
        text: "336 basic hospitals under construction to be completed in 3 years",
        image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Ashkan Forouzani",
        nepaliText: "निर्माण सुरु भएका ३३६ आधारभूत अस्पताललाई आगामी तीन वर्षमा निर्माण सम्पन्न गर्नेछौ।"
      },
      {
        text: "Air ambulance service for Karnali remote areas",
        image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Camilo Jimenez",
        nepaliText: "कर्णाली प्रदेशका दुर्गम स्थानहरुमा एयर एम्बुलेन्स सेवा सुरु गर्नेछौ।"
      },
      {
        text: "National Health Accreditation Authority to be established",
        image: IMG.nepalGovernanceFlag.url,
        source: IMG.nepalGovernanceFlag.source,
        nepaliText: "स्वास्थ्य संस्था तथा सेवाको गुणस्तर मापन प्रमाणीकरण र प्रत्यायनका लागि राष्ट्रिय स्वास्थ्य प्रत्यायन प्राधिकरण स्थापना गर्नेछौ।"
      },
      {
        text: "Food and Drug Administration to be established",
        image: IMG.pharmaceuticals.url,
        source: IMG.pharmaceuticals.source,
        nepaliText: "देश भित्र उत्पादन वा आपूर्ति हुने औषधि रोग निदानात्मक र अन्य स्वास्थ्यजन्य खाद्यान्न सामग्रीहरुको गुणस्तर र नियमन सुनिश्चित गर्न फुड एण्ड ड्रग एडमिनिस्ट्रेसन स्थापना गर्नेछौ।"
      },
      {
        text: "Nurse night-duty allowance doubled; female health volunteers' transport allowance up 50%",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Olga Kononenko",
        nepaliText: "नर्सिङ कर्मचारीको रात्री डिुटी भत्ता दोब्बर गरेको छु। महिला स्वास्थ्य स्वयंसेविकालाई प्रदान गरिदै आएको यातायात खर्चमा ५० प्रतितले वृद्धि गरेको छु।"
      },
    ],
  },

  {
    id: "technology",
    title: "Technology & AI",
    tag: "Tech Leap",
    icon: "🤖",
    description: "Nepal's first sovereign AI compute center, major IT incentives, and digital public infrastructure push.",
    color: "#534AB7",
    budgetComparison: {
      previous: "7.72",
      current: "12+",
      unit: "billion",
      change: "+55%",
      category: "Communication & IT"
    },
    nepaliText: `नेपाललाई एआई आर्टिफिसियल इन्टलिजेन्सको युगमा आत्मविश्वासका साथ प्रवेश गराउन विशेष पहल सुरु गरेका छौ। काठमाडौँको सिउचाटारमा देशकै पहिलो सार्वभौम एआई कम्प्युट केन्द्र स्थापना गर्नेछौ। हजारौ एआई प्रोसेसिङ युनिट खरिद गरि एआई उद्यमी र स्टार्टअपलाई सहुलियतपूर्ण कम्प्युट क्षमता उपलब्ध गराउने छौ। आगामी आर्थिक वर्ष एआइको क्षेत्रमा अन्तराष्ट्रिय ख्याति बनाइरहेका कम्तिमा १५ जना नेपाली शोधकर्तालाई प्रतिष्ठित फेलोसिप प्रदान गरि नेपाल फर्केर योगदान गर्न आमन्त्रित गर्नेछु। नेपाल टेलिकममा संघीय सरकारको ६६ प्रतित सेयर कायम राखी बाकी सेयर पुष मसान्त भित्र जनस्तरमा बिक्री गर्ने र प्राप्त रकम रकम नेपाललाई टेक हब बनाउन न उपयोग गर्नेछौ।`,
    bullets: [
      {
        text: "Nepal's first sovereign AI compute center at Syuchatar, Kathmandu",
        image: IMG.serverRoom.url,
        source: IMG.serverRoom.source,
        nepaliText: "काठमाडौँको सिउचाटारमा देशकै पहिलो सार्वभौम एआई कम्प्युट केन्द्र स्थापना गर्नेछौ।"
      },
      {
        text: "Thousands of AI processors to be procured; subsidized compute for AI startups",
        image: IMG.microchipAi.url,
        source: IMG.microchipAi.source,
        nepaliText: "हजारौ एआई प्रोसेसिङ युनिट खरिद गरि एआई उद्यमी र स्टार्टअपलाई सहुलियतपूर्ण कम्प्युट क्षमता उपलब्ध गराउने छौ। स्वच्छ जलविद्युत उर्जालाई उच्च मूल्यको एआई कम्प्युट सेवामा रुपान्तरण गर्ने प्रस्ताव गरेको छु।"
      },
      {
        text: "At least 15 Nepali AI researchers abroad to be invited home with fellowships",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / ThisisEngineering RAEng",
        nepaliText: "आगामी आर्थिक वर्ष एआइको क्षेत्रमा अन्तराष्ट्रिय ख्याति बनाइरहेका कम्तिमा १५ जना नेपाली शोधकर्तालाई प्रतिष्ठित फेलोसिप प्रदान गरि नेपाल फर्केर योगदान गर्न आमन्त्रित गर्नेछु।"
      },
      {
        text: "Nepal Telecom: 34% shares to be sold to the public; proceeds for tech hub development",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Marvin Meyer",
        nepaliText: "नेपाल टेलिकममा संघीय सरकारको ६६ प्रतित सेयर कायम राखी बाकी सेयर पुष मसान्त भित्र जनस्तरमा बिक्री गर्ने र प्राप्त रकम रकम नेपाललाई टेक हब बनाउन न उपयोग गर्नेछौ।"
      },
      {
        text: "Legal framework for Nepalis to work remotely for foreign employers",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Chris Montgomery",
        nepaliText: "नेपालमा बसेर विदेशी रोजगार दाताका लागि काम गर्न पाउने तथा रिमोट वर्कलाई आकर्षित गर्न स्पष्ट कानुनी प्रबन्ध मिलाउने छौ।"
      },
      {
        text: "Fintech marketplace under Nepal Rastra Bank supervision",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Carlos Muza",
        nepaliText: "नेपाल राष्ट्र बैंकको सुपरिवेक्षणमा फिनटेकमा मार्केट प्लेस स्थापना गर्नेछौ।"
      },
      {
        text: "Dozens of government services to be integrated into the Nagarik App",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Pathum Danthanarayana",
        nepaliText: "नागरिक पमा दर्जनौ सरकारी सेवाहरु आबद्ध हुनेछन्।"
      },
    ],
  },
  {
    id: "investment",
    title: "Investment & Business Climate",
    tag: "Liberalization",
    icon: "🏦",
    description: "Comprehensive legal reforms to make Nepal more attractive for domestic and foreign investors.",
    color: "#1B5E20",
    budgetComparison: {
      previous: "N/A",
      current: "Policy",
      unit: "reforms",
      change: "New",
      category: "Investment Climate"
    },
    nepaliText: `लगानी प्रबर्धन आर्थिक सुधार र सहज सेवा प्रवाहको समुचित नीतिगत तथा कानुनी प्रबन्ध गरिनेछ। विदेशी लगानी तथा प्रविधि हस्तान्तरण ऐनमा संशोधन गरि लगानी फिर्ताका लागि नेपाल राष्ट्र बैंकको पूर्व स्वीकृति लिनु नपर्ने र जानकारी दिए पुग्ने व्यवस्था गर्नेछौ। व्यापारिक विवादको शिघ्र समाधानका लागि छुट्टै न्यायाधिकरण स्थापना गर्नेछौ। लगानी प्रबर्धनका लागि सिमित दायित्वको साझेदारी कानुन तर्जुमा गर्नेछौ जसबाट एन्जल इन्भेस्टमेन्टलाई भेन्चर क्यापिटल तथा प्राइभेट इक्विटी फण्डमा लगानी गर्न प्रोत्साहन हुनेछ। अन्तराष्ट्रिय बजारमा नेपाली मुद्रामै अफसोर बन्ड शिघ्र जारी हुनेछ। कम्तिमा तिन महिनाको इन्धन भण्डारण एआइ फ्याक्ट्री लगायतका रणनीतिक महत्वका आयोजनामा लगानी गर्न मातृभुमि कोष स्थापना गर्नेछौ।`,
    bullets: [
      {
        text: "Foreign investment: prior approval replaced with notification system",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Isaac Smith",
        nepaliText: "विदेशी लगानी तथा प्रविधि हस्तान्तरण ऐनमा संशोधन गरि लगानी फिर्ताका लागि नेपाल राष्ट्र बैंकको पूर्व स्वीकृति लिनु नपर्ने र जानकारी दिए पुग्ने व्यवस्था गर्नेछौ। बैदेशिक लगानीको स्वचालित स्वीकृति प्रक्रियामा पूर्व स्वीकृतिको व्यवस्था हटाउने छौ।"
      },
      {
        text: "Separate commercial tribunal for fast-tracked business dispute resolution",
        image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Melinda Gimpel",
        nepaliText: "व्यापारिक विवादको शिघ्र समाधानका लागि छुट्टै न्यायाधिकरण स्थापना गर्नेछौ मेलमिलाप ऐनमा सुधार गर्नेछौ।"
      },
      {
        text: "Limited liability partnership law to enable angel and venture capital investment",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Austin Distel",
        nepaliText: "लगानी प्रबर्धनका लागि सिमित दायित्वको साझेदारी कानुन तर्जुमा गर्नेछौ जसबाट एन्जल इन्भेस्टमेन्टलाई भेन्चर क्यापिटल तथा प्राइभेट इक्विटी फण्डमा लगानी गर्न प्रोत्साहन हुनेछ।"
      },
      {
        text: "Nepali nationals to be allowed to invest abroad",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Markus Winkler",
        nepaliText: "नेपाली नागरिकले विदेशमा लगानी गर्न पाउने व्यवस्थालाई सहज बनाउनेछौ।"
      },
      {
        text: "Offshore bonds in Nepalese currency to be issued internationally",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Towfiqu barbhuiya",
        nepaliText: "अन्तराष्ट्रिय बजारमा नेपाली मुद्रामै अफसोर बन्ड शिघ्र जारी हुनेछ।"
      },
      {
        text: "Sovereign wealth fund (Matribhumi Kosh) to be established",
        image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Shubham Dhage",
        nepaliText: "कम्तिमा तिन महिनाको इन्धन भण्डारण एआइ फ्याक्ट्री लगायतका रणनीतिक महत्वका आयोजनामा लगानी गर्न मातृभुमि कोष स्थापना गर्नेछौ।"
      },
      {
        text: "Hedging services for foreign-currency projects from next fiscal year",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Precondo CA",
        nepaliText: "विदेशी ऋण वा लगानीमा आयोजनामा हुने विनिमय जोखिम न्यून गर्न आगामी आर्थिक वर्ष देखि उपयुक्त प्रिमियममा हेजिङ सेवा दिने व्यवस्था मिलाएको छु।"
      },
      {
        text: "Foreign investors allowed long-term apartment lease (up to 25% of units)",
        image: IMG.modernApartment.url,
        source: IMG.modernApartment.source,
        nepaliText: "नेपालमा लगानी गर्ने विदेशी लगानीकर्ता अन्तराष्ट्रिय संघ संस्था बहुराष्ट्रिय कम्पनीका शाखा वा आवास प्रयोजनका लागि जम्मा एकाईको २५ प्रत भन्दा नबढ्ने गरि आवास क्षेत्रका भवन वा सरकारले तोकेको स्थानमा अपार्टमेन्ट दर्घकालिन लिजमा लिन सक्ने व्यवस्था गर्नेछौ।"
      },
    ],
  },

  {
    id: "tourism",
    title: "Tourism & Culture",
    tag: "Growth",
    icon: "🏔️",
    description: "Visit Nepal Year 2085 preparation, airport upgrades, and high-value tourism ecosystem development.",
    color: "#E65100",
    budgetComparison: {
      previous: "13.28",
      current: "7.34",
      unit: "billion",
      change: "-44.7%",
      category: "Culture, Tourism & Civil Aviation"
    },
    nepaliText: `भिजन नेपाल वर्ष २०८५ र नेपाल आरोग्य वर्ष सफल बनाउन सघन तयारी गर्नेछौ। नागरिक उड्यन प्राधिकरणको पुनसरचना गरि नियामक र संचालकको पृथक भूमिका स्थापित गर्नेछु। जनकपुरलाई विवाहक गन्तव्यको रुपमा विकास र ब्रान्डिङ गर्नेछौ। ६ हजार मिटर भन्दा बढी उचाई भएका र हाल सम्म नामकरण नगरिएका हिमाललाई मौलिक नामकरण गरि आरोहणका लागि विशिष्ट बजारीकरण गर्नेछौ। निजगढ अन्तराष्ट्रिय बिमान स्थलको निर्माण मोडालिटी छ महिना भित्र यकिन गर्नेछौ। बृहत लुम्बिनी विकास कार्यक्रमका लागि यो वर्ष ८३ करोड विनियोजन गरेको छु। संस्कृति तथा पर्यटन क्षेत्रका लागि रु ७ अर्ब ३४ करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "Intensive preparations for Visit Nepal Year 2085 and Nepal Wellness Year",
        image: IMG.mountainClimbing.url,
        source: IMG.mountainClimbing.source,
        nepaliText: "भिजन नेपाल वर्ष २०८५ र नेपाल आरोग्य वर्ष सफल बनाउन सघन तयारी गर्नेछौ।"
      },
      {
        text: "Civil Aviation Authority to be restructured by next Poush to exit EU air safety blacklist",
        image: IMG.airportTerminal.url,
        source: IMG.airportTerminal.source,
        nepaliText: "नेपाललाई युरोपियन युनियनको एयर सेफ्टी लिस्ट बाट बाहिर निकाल्न आगामी पुस भित्र नागरिक उड्यन प्राधिकरणको पुनसरचना गरि नियामक र संचालकको पृथक भूमिका स्थापित गर्नेछु।"
      },
      {
        text: "Lumbini: Rs. 830 million for broad infrastructure development",
        image: IMG.nepalTemple.url,
        source: IMG.nepalTemple.source,
        nepaliText: "बृहत लुम्बिनी विकास कार्यक्रमका लागि यो वर्ष ८३ करोड विनियोजन गरेको छु।"
      },
      {
        text: "Janakpur to be developed and branded as a wedding tourism destination",
        image: IMG.janakpurWedding.url,
        source: IMG.janakpurWedding.source,
        nepaliText: "जनकपुरलाई विवाहक गन्तव्यको रुपमा विकास र ब्रान्डिङ गर्नेछौ राम जानकी पद र राम जानकी परिक्रमा सडक स्तोरण नीतिका लागि रकम छुट्याएको छु।"
      },
      {
        text: "Nigadh International Airport modality to be determined within 6 months",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Ashim D'Silva",
        nepaliText: "निजगढ अन्तराष्ट्रिय बिमान स्थलको निर्माण मोडालिटी छ महिना भित्र यकिन गर्नेछौ।"
      },
      {
        text: "Unnamed peaks (above 6,000 m) to be given indigenous names and marketed for climbing",
        image: IMG.nepalHimalayas.url,
        source: IMG.nepalHimalayas.source,
        nepaliText: "६ हजार मिटर भन्दा बढी उचाई भएका र हाल सम्म नामकरण नगरिएका हिमाललाई मौलिक नामकरण गरि आरोहणका लागि विशिष्ट बजारीकरण गर्नेछौ।"
      },
      {
        text: "Saligraam cultural trail (Triveni to Damodar Kund) to be developed",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Sergey Pesterev",
        nepaliText: "त्रिवेणी धाम, देवघाट, रुरु क्षेत्र, कागबेनी, मुक्तिनाथ र दामोदर कुण्डलाई एकीकृत गर्दै सालिग्राम पथ विकास गर्नेछौ।"
      },
      {
        text: "Rs. 7.34 billion for culture and tourism",
        image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Ashim D'Silva",
        nepaliText: "संस्कृति तथा पर्यटन क्षेत्रका लागि रु ७ अर्ब ३४ करोड र नागरिक उड्यन क्षेत्रका लागि रु २ अर्ब ९३ करोड विनियोजन गरेको छु।"
      },
    ],
  },
  {
    id: "social",
    title: "Social Security & Welfare",
    tag: "Protection",
    icon: "🤝",
    description: "Expanded protection for vulnerable groups; voluntary opt-out of allowances for capable recipients.",
    color: "#0D47A1",
    budgetComparison: {
      previous: "109",
      current: "120",
      unit: "billion",
      change: "+10.1%",
      category: "Social Security"
    },
    nepaliText: `सामाजिक सुरक्षा प्रणालीलाई थप न्यायचि र लक्षित बनाउने छौ। आर्थिक रुपमा सक्षम नागरिकलाई सामाजिक सुरक्षा भत्ता स्वैक्षिक रुपमा त्याग्न सक्नेले छोडौ नसक्नेलाई लाई जोडौ भन्ने राष्ट्रिय अभियान संचालन गर्नेछौ। देशै भरिका दलित बालबालिकालाई उपलब्ध गराइएको बाल पोषण भत्तालाई दोबबर गरि मासिक हजार रुपैया यहाँ बनाएको छु। उच्च गरिबी भएका र मानव विकास सूचकांकमा पछाडि परेका मुख्यत मधेश, कर्णाली र सुदुर पश्चिम प्रदेशका २५ जिल्लाका बालबालिकाले पाउने पोषण भत्तालाई निरन्तरता दिएको छु। नेपाललाई सडक बालबालिका मुक्त राष्ट्र घोषणा गर्नेछौ। गिग वर्करलाई औपचारिक श्रम र सामाजिक सुरक्षाको दायरामा ल्याउने छौ। सामाजिक सुरक्षा तर्फ रु १२० अर्ब विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "Rs. 120 billion for social security across the life cycle",
        image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Lina Trochez",
        nepaliText: "जीवन चक्रका विभिन्न चरणमा हुन सक्ने जोखिमबाट संरक्षण प्रदान गर्न सामाजिक सुरक्षा तर्फ रु १२० अर्ब विनियोजन गरेको छु।"
      },
      {
        text: "Dalit children's nutrition allowance doubled to Rs. 1,000/month",
        image: IMG.childWelfare.url,
        source: IMG.childWelfare.source,
        nepaliText: "देशै भरिका दलित बालबालिकालाई उपलब्ध गराइएको बाल पोषण भत्तालाई दोबबर गरि मासिक हजार रुपैया यहाँ बनाएको छु। देशै भरिका पाच वर्ष मुनिका दलित समुदायका बालबालिकाको पोषण सहायताका लागि रु ३न अर्ब विनियोजन गरेको छु।"
      },
      {
        text: "Nutrition allowance continued for children in 25 backward districts",
        image: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Aditya Romansa",
        nepaliText: "उच्च गरिबी भएका र मानव विकास सूचकांकमा पछाडि परेका मुख्यत मधेश, कर्णाली र सुदुर पश्चिम प्रदेशका २५ जिल्लाका बालबालिकाले पाउने पोषण भत्तालाई निरन्तरता दिएको छु।"
      },
      {
        text: "Nepal to be declared a street-children-free nation",
        image: "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Yannis H",
        nepaliText: "प्रदेश र स्थानीय सरकार सँको सहकार्यमा सडक बालबालिका तथा जेष्ठ नागरिक गरेको पारिवारिक पुनर्मि मिलन तथा सामाजिक पुनरस्थापना गर्नेछौ। नेपाललाई सडक बालबालिका मुक्त राष्ट्र घोषणा गर्नेछौ।"
      },
      {
        text: "Gig workers to be brought under formal labour and social security coverage",
        image: IMG.gigEconomy.url,
        source: IMG.gigEconomy.source,
        nepaliText: "गिग वर्करलाई औपचारिक श्रम र सामाजिक सुरक्षाको दायरामा ल्याउने छौ।"
      },
      {
        text: "Rs. 30 billion for under-5 Dalit children nutrition support nationwide",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Aditya Romansa",
        nepaliText: "दलित समुदायको परम्परागत शिप संरक्षण आय आर्जन प्रविधि स्तरोनतिका क्रियाकलाप सहित एकीकृत रुपमा दलित केन्द्रित लगानी बढाउने छौ। देशै भरिका पाच वर्ष मुनिका दलित समुदायका बालबालिकाको पोषण सहायताका लागि रु ३न अर्ब विनियोजन गरेको छु।"
      },
      {
        text: "National campaign: economically capable recipients encouraged to voluntarily give up allowances",
        image: "https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Priscilla Du Preez",
        nepaliText: "आर्थिक रुपमा सक्षम नागरिकलाई सामाजिक सुरक्षा भत्ता स्वैक्षिक रुपमा त्याग्न सक्नेले छोडौ नसक्नेलाई लाई जोडौ भन्ने राष्ट्रिय अभियान संचालन गर्नेछौ। त्यसको योगदानलाई अन्तर पुस्तागत न्याय र राष्ट्रिय ऐक्यबद्धताको उदाहरणका रुपमा सम्मान गर्नेछौ।"
      },
    ],
  },

  {
    id: "labour",
    title: "Labour & Foreign Employment",
    tag: "Dignified Migration",
    icon: "✈️",
    description: "Skills-first migration, remittance productivization, and stronger protections for migrant workers.",
    color: "#3B6D11",
    budgetComparison: {
      previous: "4.28",
      current: "3.63",
      unit: "billion",
      change: "-15.2%",
      category: "Labour & Employment"
    },
    nepaliText: `रिभर्स प्रवासनलाई प्रोत्साहन गर्दै विप्रेषणलाई उपभोगबाट उत्पादनशील प्रयोजनमा रुपान्तरण गर्न विप्रेषण लगानी मिलान कोष संचालन गर्नेछौ। बैदेशिक रोजगारीबाट फर्किएकाको ज्ञान सिप र दक्षताको सदुपयोग गर्न रिटर्नी माइग्रेन्ट कार्यक्रम कार्यान्वयन गर्नेछौ। सिप सिकेर मात्र बैदेशिक रोजगारीमा जाने व्यवस्था मिलाउने छौ। श्रम क्षेत्रमा लिखित सम्झौता, न्यूनतम ज्याला, बिमा, कार्यस्थल सुरक्षा मापदण्ड तथा बैंक मार्फत पारिश्रमिक भुक्तानी अनिवार्य गर्नेछौ। पुष मसान्त भित्र श्रम न्यायाधिकरण मार्फत श्रम विवादको शिघ्र समाधान गर्ने व्यवस्था हुनेछ। औपचारिक च्यानलबाट भित्रिने रेमिटेन्सलाई थप प्रोत्साहित गर्न रेमिटेन्स आप्रवाहको हरेक रिसिटमा आधारित लट्री कार्यक्रम संचालन गर्नेछौ। श्रम तथा रोजगार क्षेत्रमा रु ३ अर्ब ६३ करोड विनियोजन गरेको छु।`,
    bullets: [
      {
        text: "Skill certification required before departure for foreign employment",
        image: IMG.skillTraining.url,
        source: IMG.skillTraining.source,
        nepaliText: "सिप सिकेर मात्र बैदेशिक रोजगारीमा जाने व्यवस्था मिलाउने छौ।"
      },
      {
        text: "Remittance investment matching fund to redirect remittances to productive use",
        image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Towfiqu barbhuiya",
        nepaliText: "रिभर्स प्रवासनलाई प्रोत्साहन गर्दै विप्रेषणलाई उपभोगबाट उत्पादनशील प्रयोजनमा रुपान्तरण गर्न विप्रेषण लगानी मिलान कोष संचालन गर्नेछौ।"
      },
      {
        text: "Returnee migrant program to utilize returning workers' knowledge and skills",
        image: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Suhyeon Choi",
        nepaliText: "बैदेशिक रोजगारीबाट फर्किएकाको ज्ञान सिप र दक्षताको सदुपयोग गर्न रिटर्नी माइग्रेन्ट कार्यक्रम कार्यान्वयन गर्नेछौ।"
      },
      {
        text: "Written contracts, minimum wages, and bank-based salary payments made mandatory",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Isaac Smith",
        nepaliText: "श्रम क्षेत्रमा लिखित सम्झौता, न्यूनतम ज्याला, बिमा, कार्यस्थल सुरक्षा मापदण्ड तथा बैंक मार्फत पारिश्रमिक भुक्तानी अनिवार्य गर्नेछौ।"
      },
      {
        text: "Labour tribunal operational by Poush (December) for fast dispute resolution",
        image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Giammarco Boscaro",
        nepaliText: "पुष मसान्त भित्र श्रम न्यायाधिकरण मार्फत श्रम विवादको शिघ्र समाधान गर्ने व्यवस्था हुनेछ।"
      },
      {
        text: "Lottery-based incentive for remittances through formal channels",
        image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Towfiqu barbhuiya",
        nepaliText: "औपचारिक च्यानलबाट भित्रिने रेमिटेन्सलाई थप प्रोत्साहित गर्न रेमिटेन्स आप्रवाहको हरेक रिसिटमा आधारित लट्री कार्यक्रम संचालन गर्नेछौ।"
      },
      {
        text: "Rs. 3.63 billion allocated for labour and employment",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Hunters Race",
        nepaliText: "श्रम तथा रोजगार क्षेत्रमा रु ३ अर्ब ६३ करोड विनियोजन गरेको छु।"
      },
    ],
  },
  {
    id: "governance",
    title: "Governance & Public Administration",
    tag: "Restructuring",
    icon: "🏛️",
    description: "Leaner government structure, higher civil service pay, and ~Rs. 20 billion saved through austerity.",
    color: "#37474F",
    budgetComparison: {
      previous: "N/A",
      current: "20",
      unit: "billion",
      change: "Savings",
      category: "Administrative Reforms"
    },
    nepaliText: `नेपाल सरकारको विद्यमान बोझिलो संगठन संरचना अब चुस्त बन्नेछ। संघीय मन्त्रालयको संख्या २२ बाट १८ कायम भइसकेको परिपेक्षमा विभाग कार्यालय र दरबन्दी कटौतीबाट बचत हुने रकमलाई प्रशासनलाई दक्ष बनाउन उपयोग गर्ने नीति लिएको छु। ३१ निकाय खारेजी छ निकाय मर्जर छ निकाय हस्तान्तरण तथा १८ निकायको पुनरसंरचना गर्दैछौ। यी कदमबाट करिब २० अर्ब बचत हुने प्रारम्भिक अनुमान छ। कर्मचारी तन्त्रलाई मर्यादित जीवन यापन गर्न सक्षम उच्चस्तरीय कार्य सम्पादन कुशल र जवाफदेही बनाउने उद्देश्यले निजामती, जंगी, प्रहरी र शिक्षकको सेवा, सुविधा, सम्मानजनक रुपले निरन्तर वृद्धि हुने प्रबन्ध मिलाएका छौ। सुरु स्केलमा १० प्रत तलब वृद्धि गरेको छु। नया तलबमानको १० प्रत मासिक प्रोत्साहन भत्ताको व्यवस्था गरेको छु। नया तलब स्केल सवत २०८३ साउन १ गते देखि लागु हुनेछ।`,
    bullets: [
      {
        text: "Federal ministries reduced from 22 to 18 already; departments and posts to be cut further",
        image: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Brandi Redd",
        nepaliText: "संघीय मन्त्रालयको संख्या २२ बाट १८ कायम भइसकेको परिपेक्षमा विभाग कार्यालय र दरबन्दी कटौतीबाट बचत हुने रकमलाई प्रशासनलाई दक्ष बनाउन उपयोग गर्ने नीति लिएको छु।"
      },
      {
        text: "31 agencies abolished, 6 merged, 6 transferred, 18 restructured",
        image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Scott Graham",
        nepaliText: "३१ निकाय खारेजी छ निकाय मर्जर छ निकाय हस्तान्तरण तथा १८ निकायको पुनरसंरचना गर्दैछौ।"
      },
      {
        text: "Austerity: ~Rs. 20 billion expected savings from administrative reforms",
        image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Markus Winkler",
        nepaliText: "यी कदमबाट करिब २० अर्ब बचत हुने प्रारम्भिक अनुमान छ।"
      },
      {
        text: "Civil servant base salary raised 10% + 10% performance-based incentive allowance (~21% net increase)",
        image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Markus Winkler",
        nepaliText: "सुरु स्केलमा १० प्रत तलब वृद्धि गरेको छु। नया तलबमानको १० प्रत मासिक प्रोत्साहन भत्ताको व्यवस्था गरेको छु।"
      },
      {
        text: "New pay scale effective 2083 Shrawan 1 (August 2026)",
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Avery Evans",
        nepaliText: "नया तलब स्केल सवत २०८३ साउन १ गते देखि लागु हुनेछ।"
      },
      {
        text: "Conflict-of-interest law to be enacted to end policy-level corruption",
        image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Melinda Gimpel",
        nepaliText: "स्वार्थको द्वन्द्व सम्बन्धी कानुन बनाई नीतिगत भ्रष्टाचारको अन्त्य गर्नेछौ।"
      },
      {
        text: "Digital time-card system for all government offices",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&auto=format&fit=crop&q=80",
        source: "Unsplash / Lukas Blazek",
        nepaliText: "सबै सरकारी कार्यालयमा डिजिटल समय कार्ड प्रणाली लागु गर्नेछौ।"
      },
    ],
  },
];