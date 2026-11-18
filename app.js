/**
 * สำนวน สุภาษิต คำพังเพย ป.6 - โรงเรียนราษฎร์บำรุง
 * ระบบการเรียนรู้และตะลุยโจทย์ O-NET ภาษาไทย
 */

// ==========================================
// 1. DATA: คลังสำนวน สุภาษิต คำพังเพย ป.6 (36 รายการเข้มข้น)
// ==========================================
const IDIOM_DATABASE = [
  // --- สำนวน (Idioms: เปรียบเทียบ กระชับ ความหมายไม่ตรงตัว ไม่มีคำสอน) ---
  {
    id: "id-1",
    phrase: "ยกเมฆ",
    type: "idiom",
    category: "ธรรมชาติ",
    meaning: "กุเรื่องขึ้นมาเอง คาดเดาเอาเองโดยไม่มีมูลความจริง",
    origin: "มาจากการดูเมฆเพื่อพยากรณ์ในสมัยโบราณ หากคาดเดาไปเรื่อยจึงเรียกว่ายกเมฆ",
    example: "เรื่องที่เขาเล่าว่าเห็นผีในห้องน้ำเป็นเพียงการยกเมฆทั้งเพ",
    emoji: "☁️",
    onetFrequent: true
  },
  {
    id: "id-2",
    phrase: "ชักแม่น้ำทั้งห้า",
    type: "idiom",
    category: "ธรรมชาติ",
    meaning: "พูดจาหว่านล้อม ยกเหตุผลต่างๆ นานามาอ้างเพื่อขอสิ่งที่ตนต้องการ",
    origin: "มาจากวรรณคดีมหาเวสสันดรชาดก ตอนชูชกกล่าวชมแม่น้ำทั้ง 5 สายเพื่อขอกัณหาและชาลี",
    example: "เขาพยายามชักแม่น้ำทั้งห้าเพื่อขอให้แม่ซื้อโทรศัพท์เครื่องใหม่ให้",
    emoji: "🌊",
    onetFrequent: true
  },
  {
    id: "id-3",
    phrase: "ปากหวานก้นเปรี้ยว",
    type: "idiom",
    category: "ร่างกาย",
    meaning: "พูดจาอ่อนหวานไพเราะน่าฟัง แต่ในใจคิดร้าย ไม่จริงใจ",
    origin: "เปรียบกับผลไม้ที่มีรสหวานที่ปลายแต่เปรี้ยวที่ก้น เหมือนคนหน้าไหว้หลังหลอก",
    example: "อย่าไปหลงเชื่อคนปากหวานก้นเปรี้ยวแบบนั้นเชียวนะ",
    emoji: "👄",
    onetFrequent: true
  },
  {
    id: "id-4",
    phrase: "ขวานผ่าซาก",
    type: "idiom",
    category: "ของใช้",
    meaning: "พูดจาโผงผาง ตรงเกินไป มะนาวไม่มีน้ำ ไม่เกรงใจใคร",
    origin: "เปรียบกับการใช้ขวานจามลงบนท่อนไม้แห้ง (ซาก) อย่างรวดเร็วตรงไปตรงมาจนเกิดเสียงดัง",
    example: "เขาเป็นคนพูดจาขวานผ่าซาก แต่ความจริงไม่มีเจตนาร้ายอะไร",
    emoji: "🪓",
    onetFrequent: false
  },
  {
    id: "id-5",
    phrase: "ชักหน้าไม่ถึงหลัง",
    type: "idiom",
    category: "พฤติกรรม",
    meaning: "มีรายได้ไม่พอกับรายจ่าย เงินทองขาดมือ",
    origin: "เปรียบกับการนุ่งผ้าผืนเล็ก ชักดึงมาปิดข้างหน้า ข้างหลังก็เปิด",
    example: "ช่วงนี้เศรษฐกิจฝืดเคือง หลายครอบครัวประสบปัญหาชักหน้าไม่ถึงหลัง",
    emoji: "💸",
    onetFrequent: true
  },
  {
    id: "id-6",
    phrase: "แกะดำ",
    type: "idiom",
    category: "สัตว์",
    meaning: "คนที่ทำตัวแปลกแยก แตกต่างจากคนส่วนใหญ่ในกลุ่มหรือสังคม",
    origin: "ในฝูงแกะขนสีขาว หากมีแกะขนสีดำอยู่ตัวเดียวจะดูเด่นและแปลกแยก",
    example: "เขาชอบเลือกเรียนศิลปะอยู่คนเดียวท่ามกลางครอบครัวหมอ จึงถูกมองว่าเป็นแกะดำ",
    emoji: "🐑",
    onetFrequent: false
  },
  {
    id: "id-7",
    phrase: "กบในกะลาครอบ",
    type: "idiom",
    category: "สัตว์",
    meaning: "คนที่มีความรู้หรือโลกทัศน์แคบ แต่มักสำคัญตนผิดว่ารู้มาก",
    origin: "กบที่อาศัยอยู่ใต้กะลาจะมองเห็นท้องฟ้าแค่เท่าปากกะลา จึงคิดว่าโลกมีอยู่แค่นั้น",
    example: "เราควรเปิดใจเรียนรู้สิ่งใหม่ๆ อย่าทำตัวเป็นกบในกะลาครอบ",
    emoji: "🐸",
    onetFrequent: true
  },
  {
    id: "id-8",
    phrase: "จับปลาสองมือ",
    type: "idiom",
    category: "สัตว์",
    meaning: "หมายจะเอาให้ได้ทั้ง 2 อย่างพร้อมกัน จนในที่สุดอาจไม่ได้อะไรเลยสักอย่าง",
    origin: "การใช้สองมือจับปลาคนละตัวในน้ำพร้อมกัน มักทำให้ปลาดิ้นหลุดไปหมด",
    example: "ถ้าเธอจะอ่านหนังสือสอบก็ควรอ่านทีละวิชา อย่าจับปลาสองมือ",
    emoji: "🐟",
    onetFrequent: true
  },
  {
    id: "id-9",
    phrase: "กินน้ำใต้ศอก",
    type: "idiom",
    category: "ร่างกาย",
    meaning: "ต้องยอมเป็นรอง เป็นที่สอง หรือได้รับสิ่งของต่อจากผู้อื่นอย่างจำใจ",
    origin: "การรองน้ำดื่มจากข้อศอกของคนที่กำลังดื่มอยู่ ได้รับเพียงเศษน้ำหยด",
    example: "เธอเป็นคนมีความสามารถ ไม่ควรยอมทำงานในตำแหน่งกินน้ำใต้ศอกคนอื่น",
    emoji: "💧",
    onetFrequent: false
  },
  {
    id: "id-10",
    phrase: "งมเข็มในมหาสมุทร",
    type: "idiom",
    category: "ธรรมชาติ",
    meaning: "การค้นหาสิ่งที่หายากมาก หรือทำงานที่สำเร็จได้ยากยิ่ง",
    origin: "เข็มเล่มเล็กจิ๋วตกลงไปในมหาสมุทรที่กว้างใหญ่ไพศาล ย่อมค้นหาแทบไม่พบ",
    example: "การตามหาแหวนเพชรที่ตกหายในหาดทรายกว้าง เหมือนงมเข็มในมหาสมุทร",
    emoji: "🪡",
    onetFrequent: true
  },
  {
    id: "id-11",
    phrase: "หมาหวงก้าง",
    type: "idiom",
    category: "สัตว์",
    meaning: "คนที่หวงของที่ตนเองกินหรือใช้ไม่ได้ แต่ก็ไม่ยอมแบ่งให้คนอื่น",
    origin: "สุนัขที่เฝ้าก้างปลา ทั้งที่เคี้ยวกินไม่ได้เพราะติดคอ แต่เมื่อตัวอื่นเข้ามาใกล้ก็เห่าไล่",
    example: "เสื้อตัวนี้เธอใส่ไม่ได้แล้วแต่ก็ไม่ยอมให้น้อง ช่างเหมือนหมาหวงก้าง",
    emoji: "🐕",
    onetFrequent: false
  },
  {
    id: "id-12",
    phrase: "ไก่ได้พลอย",
    type: "idiom",
    category: "สัตว์",
    meaning: "คนที่ได้สิ่งมีค่ามาไว้ในครอบครอง แต่ไม่รู้คุณค่าของสิ่งนั้น",
    origin: "ไก่คุ้ยเขี่ยพบพลอยเม็ดงาม แต่กินเป็นอาหารไม่ได้ พลอยจึงไม่มีประโยชน์ต่อไก่",
    example: "ให้คอมพิวเตอร์สเปกสูงกับเด็กเล็กที่เอาไว้แค่ดูการ์ตูน ก็เหมือนไก่ได้พลอย",
    emoji: "💎",
    onetFrequent: true
  },

  // --- สุภาษิต (Proverbs: มุ่งสั่งสอน มีคติธรรม เตือนสติให้ทำดี ละเว้นชั่ว) ---
  {
    id: "id-13",
    phrase: "น้ำเชี่ยวอย่าขวางเรือ",
    type: "proverb",
    category: "ธรรมชาติ",
    meaning: "อย่าขัดขวางผู้ที่มีอำนาจ หรือเหตุการณ์ที่มีกระแสต่อต้านรุนแรง ควรรอให้สงบก่อน",
    origin: "แม่น้ำที่กระแสน้ำไหลเชี่ยวกราก หากพายเรือไปขวาง เรือจะล่มและเกิดอันตราย",
    example: "เมื่อหัวหน้ากำลังโกรธจัด เราควรอยู่เฉยๆ น้ำเชี่ยวอย่าขวางเรือ",
    emoji: "🚣",
    onetFrequent: true
  },
  {
    id: "id-14",
    phrase: "รักวัวให้ผูก รักลูกให้ตี",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "เมื่อรักสิ่งใดต้องดูแลกวดขัน หากรักลูกต้องรู้จักอบรมสั่งสอนและลงโทษเมื่อทำผิด",
    origin: "วัวต้องผูกไว้ไม่ให้หนีเตลิดไปไหน ลูกต้องตักเตือนเคี่ยวเข็ญให้เป็นคนดี",
    example: "พ่อแม่ตักเตือนและทำโทษเมื่อเราเกเร เพราะท่านยึดคติรักวัวให้ผูกรักลูกให้ตี",
    emoji: "🐂",
    onetFrequent: true
  },
  {
    id: "id-15",
    phrase: "ทำดีได้ดี ทำชั่วได้ชั่ว",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "การกระทำของตนเองย่อมส่งผลสนองกลับมาเสมอ ปลูกสิ่งใดย่อมได้ผลสิ่งนั้น",
    origin: "หลักธรรมทางพระพุทธศาสนาเรื่องกฎแห่งกรรม",
    example: "แม้ไม่มีใครเห็น จงมั่นใจในการทำความดี เพราะทำดีได้ดี ทำชั่วได้ชั่ว",
    emoji: "⚖️",
    onetFrequent: false
  },
  {
    id: "id-16",
    phrase: "เอาใจเขามาใส่ใจเรา",
    type: "proverb",
    category: "ร่างกาย",
    meaning: "ให้รู้จักเห็นอกเห็นใจผู้อื่น คิดถึงความรู้สึกและความยากลำบากของผู้อื่น",
    origin: "คติธรรมสอนใจในการอยู่ร่วมกันอย่างสันติและเข้าอกเข้าใจ",
    example: "การทำงานกลุ่มต้องรู้จักเอาใจเขามาใส่ใจเรา ไม่เอาแต่ความคิดตนเองเป็นใหญ่",
    emoji: "❤️",
    onetFrequent: true
  },
  {
    id: "id-17",
    phrase: "ซื่อกินไม่หมด คดกินไม่นาน",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "ความซื่อสัตย์ทำให้เจริญมั่นคงยั่งยืน ส่วนคนที่คดโกงจะประสบสุขได้เพียงชั่วคราว",
    origin: "สอนเรื่องการประกอบอาชีพและความซื่อสัตย์สุจริต",
    example: "พ่อค้าคนนั้นค้าขายด้วยความซื่อสัตย์ ลูกค้าจึงแน่นร้านตามสุภาษิตซื่อกินไม่หมด คดกินไม่นาน",
    emoji: "🤝",
    onetFrequent: true
  },
  {
    id: "id-18",
    phrase: "เดินตามผู้ใหญ่หมาไม่กัด",
    type: "proverb",
    category: "สัตว์",
    meaning: "ประพฤติตามคำสั่งสอนหรือแบบอย่างของผู้มีประสบการณ์ ย่อมปลอดภัย",
    origin: "เด็กเดินตามหลังผู้ใหญ่ หากพบสุนัข ผู้ใหญ่มักช่วยป้องกันไม่ให้สุนัขมากัด",
    example: "เชื่อฟังคำเตือนของครูบาอาจารย์เถอะนะ โบราณว่าเดินตามผู้ใหญ่หมาไม่กัด",
    emoji: "🐕‍🦺",
    onetFrequent: true
  },
  {
    id: "id-19",
    phrase: "ความกตัญญูเป็นเครื่องหมายของคนดี",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "การรู้คุณคนและหาทางตอบแทนบุญคุณ เป็นคุณธรรมสำคัญที่บ่งบอกว่าเป็นคนดี",
    origin: "พุทธศาสนสุภาษิต: นิมิตฺตํ สาธุรูปานํ กตญฺญูกตเวทิตา",
    example: "เขากลับมาดูแลพ่อแม่ยามแก่ชรา สมกับคำว่าความกตัญญูเป็นเครื่องหมายของคนดี",
    emoji: "🌸",
    onetFrequent: false
  },
  {
    id: "id-20",
    phrase: "แพ้เป็นพระ ชนะเป็นมาร",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "การยอมยุติข้อพิพาทนำมาซึ่งความสงบสุข ส่วนการดึงดันเอาชนะมักก่อให้เกิดเวรกรรม",
    origin: "สอนเรื่องการให้อภัยและระงับความโกรธ",
    example: "อย่าไปทะเลาะกับเขาต่อเลย ยอมถอยออกมาเถอะ โบราณสอนว่าแพ้เป็นพระ ชนะเป็นมาร",
    emoji: "🕊️",
    onetFrequent: true
  },
  {
    id: "id-21",
    phrase: "เข้าเมืองตาหลิ่ว ต้องหลิ่วตาตาม",
    type: "proverb",
    category: "ร่างกาย",
    meaning: "เมื่อไปอยู่ในสังคมหรือท้องถิ่นใด ควรประพฤติตามธรรมเนียมประเพณีของที่นั่น",
    origin: "เมืองที่มีคนตาข้างเดียว หากเราเข้าไปก็ควรปรับตัวกลมกลืนตามชาวเมือง",
    example: "ไปเที่ยวต่างประเทศเราต้องเคารพกฎหมายเขา เข้าเมืองตาหลิ่วต้องหลิ่วตาตาม",
    emoji: "👁️",
    onetFrequent: true
  },
  {
    id: "id-22",
    phrase: "ตนเป็นที่พึ่งแห่งตน",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "ให้พึ่งพาความสามารถและความพยายามของตนเอง อย่ามัวแต่หวังพึ่งผู้อื่น",
    origin: "พุทธศาสนสุภาษิต: อตฺตา หิ อตฺตโน นาโถ",
    example: "ตอนสอบไม่มีใครช่วยเราได้ เราต้องท่องจำและฝึกฝน ตนเป็นที่พึ่งแห่งตน",
    emoji: "💪",
    onetFrequent: true
  },
  {
    id: "id-23",
    phrase: "ช้าๆ ได้พร้าสองเล่มงาม",
    type: "proverb",
    category: "ของใช้",
    meaning: "ค่อยๆ ทำงานด้วยความรอบคอบสุขุม ไม่ใจร้อน ย่อมได้ผลงานที่ดีมีคุณภาพ",
    origin: "การตีมีดพร้าต้องใช้ความประณีตใจเย็น มีดจึงจะคมและงดงาม",
    example: "เขียนการบ้านตรวจทานให้ดีก่อนส่ง ช้าๆ ได้พร้าสองเล่มงาม ดีกว่ารีบทำแล้วผิดหมด",
    emoji: "🗡️",
    onetFrequent: true
  },
  {
    id: "id-24",
    phrase: "คบคนพาล พาลพาไปหาผิด",
    type: "proverb",
    category: "พฤติกรรม",
    meaning: "สอนให้ระมัดระวังในการเลือกคบเพื่อน เพราะเพื่อนนิสัยชั่วมักชักจูงไปในทางเสื่อม",
    origin: "คำสอนจากมงคลชีวิต ข้อ ๑ การไม่คบคนพาล",
    example: "อย่าไปสุงสิงกับกลุ่มที่ชอบโดดเรียน โบราณเตือนว่าคบคนพาล พาลพาไปหาผิด",
    emoji: "👥",
    onetFrequent: false
  },

  // --- คำพังเพย (Sayings: ถ้อยคำเปรียบเทียบ เสียดสี ประชดประชัน แฝงข้อคิด มักมีสัตว์) ---
  {
    id: "id-25",
    phrase: "ขี่ช้างจับตั๊กแตน",
    type: "saying",
    category: "สัตว์",
    meaning: "ลงทุนลงแรงหรือเสียทรัพย์มหาศาล เพื่อทำสิ่งที่ได้ผลประโยชน์เพียงเล็กน้อย",
    origin: "ช้างเป็นสัตว์ตัวใหญ่ มีค่าตัวสูง แต่กลับนำมาไล่จับตั๊กแตนตัวจิ๋ว",
    example: "จ้างรถแห่สิบคันเพื่อมาโปรโมทร้านขายน้ำเต้าหู้ เป็นการขี่ช้างจับตั๊กแตนชัดๆ",
    emoji: "🐘",
    onetFrequent: true
  },
  {
    id: "id-26",
    phrase: "ตำน้ำพริกละลายแม่น้ำ",
    type: "saying",
    category: "ของใช้",
    meaning: "การลงทุนทำสิ่งใดโดยสิ้นเปลืองทรัพย์สินไปเปล่าๆ ไม่ได้ประโยชน์คุ้มค่า",
    origin: "น้ำพริกถ้วยเล็กเมื่อเทลงในแม่น้ำที่กว้างใหญ่ ย่อมละลายจางหายไปโดยไร้รสชาติ",
    example: "จัดงานเลี้ยงใหญ่โตแต่ไม่มีคนมาร่วมงาน เสียเงินเหมือนตำน้ำพริกละลายแม่น้ำ",
    emoji: "🥣",
    onetFrequent: true
  },
  {
    id: "id-27",
    phrase: "ไก่เห็นตีนงู งูเห็นนมไก่",
    type: "saying",
    category: "สัตว์",
    meaning: "ต่างฝ่ายต่างรู้ความลับหรือเล่ห์เหลี่ยมของกันและกันเป็นอย่างดี",
    origin: "ปกติงูไม่มีขาและไก่ไม่มีนม แต่เปรียบเปรยว่าสัตว์ทั้งสองรู้ข้อเท็จจริงซึ่งกัน",
    example: "สองคนนี้ไม่กล้าแฉกัน เพราะต่างฝ่ายต่างรู้เรื่อง ไก่เห็นตีนงู งูเห็นนมไก่",
    emoji: "🐔",
    onetFrequent: true
  },
  {
    id: "id-28",
    phrase: "วัวหายล้อมคอก",
    type: "saying",
    category: "สัตว์",
    meaning: "เกิดเรื่องเสียหายร้ายแรงขึ้นแล้ว จึงค่อยคิดหาทางป้องกันหรือแก้ไข",
    origin: "ไม่ดูแลสร้างคอกกั้นให้ดี พอวัวถูกขโมยหายไปแล้วจึงเพิ่งมาทำรั้วล้อมคอก",
    example: "พอคอมพิวเตอร์โดนไวรัสลบข้อมูลหมด จึงค่อยมาลงโปรแกรมสแกน เป็นวัวหายล้อมคอก",
    emoji: "🐄",
    onetFrequent: true
  },
  {
    id: "id-29",
    phrase: "สีซอให้ควายฟัง",
    type: "saying",
    category: "สัตว์",
    meaning: "แนะนำ สั่งสอน หรือพูดจาดีๆ ให้คนที่ไม่สนใจฟัง หรือคนปัญญาทึบฟัง ย่อมไร้ประโยชน์",
    origin: "ควายย่อมไม่เข้าใจความไพเราะของเสียงดนตรีหรือเสียงซอ",
    example: "ตักเตือนคนดื้อรั้นที่ไม่คิดจะปรับปรุงตัว ก็เหมือนสีซอให้ควายฟัง",
    emoji: "🎻",
    onetFrequent: true
  },
  {
    id: "id-30",
    phrase: "คางคกขึ้นวอ",
    type: "saying",
    category: "สัตว์",
    meaning: "คนที่มีฐานะต่ำต้อย พอได้ดีมีอำนาจหรือร่ำรวยขึ้นมา ก็ลืมตัวและหยิ่งยโส",
    origin: "คางคกที่ปกติอยู่ตามโคลนตม เมื่อมีคนยกขึ้นนั่งบนวอทองย่อมลำพองตัว",
    example: "พอได้ตำแหน่งหัวหน้าห้องก็เริ่มพูดจาดูถูกเพื่อน ทำตัวเป็นคางคกขึ้นวอ",
    emoji: "🐸",
    onetFrequent: true
  },
  {
    id: "id-31",
    phrase: "ช้างตายทั้งตัว เอาใบบัวมาปิด",
    type: "saying",
    category: "สัตว์",
    meaning: "ความชั่วหรือความผิดร้ายแรงที่คนรู้กันทั่วแล้ว จะหาทางปกปิดอย่างไรก็ปิดไม่มิด",
    origin: "ช้างตัวใหญ่มาก ใบบัวใบเดียวไม่สามารถคลุมร่างช้างได้",
    example: "การทุจริตครั้งใหญ่นี้ใครๆ ก็รู้ ช้างตายทั้งตัวเอาใบบัวมาปิดไม่มิดหรอก",
    emoji: "🍃",
    onetFrequent: true
  },
  {
    id: "id-32",
    phrase: "หนีเสือปะจระเข้",
    type: "saying",
    category: "สัตว์",
    meaning: "หนีภัยอันตรายอย่างหนึ่งมา แต่กลับต้องมาพบกับภัยอันตรายอีกอย่างหนึ่งที่ร้ายแรงพอกัน",
    origin: "หนีภัยร้ายบนบกจากเสือลงน้ำ แต่กลับเจอจระเข้ที่ดุร้ายในน้ำ",
    example: "ลาออกจากเจ้านายขี้บ่น มาเจอเจ้านายใหม่ขี้โกง เหมือนหนีเสือปะจระเข้",
    emoji: "🐅",
    onetFrequent: true
  },
  {
    id: "id-33",
    phrase: "สอนจระเข้ให้ว่ายน้ำ",
    type: "saying",
    category: "สัตว์",
    meaning: "สอนสิ่งที่ผู้อื่นเขามีความรู้ ความชำนาญ หรือเก่งกว่าตนเองอยู่แล้ว",
    origin: "จระเข้เป็นสัตว์น้ำที่มีทักษะการว่ายน้ำยอดเยี่ยมโดยกำเนิด ไม่จำเป็นต้องมีใครสอน",
    example: "เขาเป็นนักกีฬาว่ายน้ำเหรียญทอง การที่เราไปสอนเขาว่ายน้ำจึงเหมือนสอนจระเข้ให้ว่ายน้ำ",
    emoji: "🐊",
    onetFrequent: false
  },
  {
    id: "id-34",
    phrase: "กิ้งก่าได้ทอง",
    type: "saying",
    category: "สัตว์",
    meaning: "คนที่ได้รับลาภยศหรือสิ่งมีค่าเพียงเล็กน้อย แล้วเกิดความเย่อหยิ่ง หลงตัวเอง ลืมตน",
    origin: "นิทานชาดกเรื่องกิ้งก่าที่พระราชาพระราชทานทองผูกคอให้ จึงเชิดคอหยิ่งยโส",
    example: "ได้คะแนนท็อปแค่วิชาเดียวก็เที่ยวดูถูกเพื่อน ทำตัวเป็นกิ้งก่าได้ทองไปได้",
    emoji: "🦎",
    onetFrequent: true
  },
  {
    id: "id-35",
    phrase: "น้ำลดตอผุด",
    type: "saying",
    category: "ธรรมชาติ",
    meaning: "เมื่อหมดอำนาจวาสนา หรือยามตกต่ำ ความชั่วหรือความลับที่เคยซ่อนไว้ก็ปรากฏออกมา",
    origin: "เมื่อระดับน้ำในลำคลองแห้งลง ตอไม้ที่เคยจมอยู่ใต้น้ำย่อมโผล่พ้นน้ำขึ้นมา",
    example: "พอนายกเทศมนตรีพ้นตำแหน่ง คดีทุจริตต่างๆ ก็โผล่มาเหมือนน้ำลดตอผุด",
    emoji: "🪵",
    onetFrequent: false
  },
  {
    id: "id-36",
    phrase: "กระดี่ได้น้ำ",
    type: "saying",
    category: "สัตว์",
    meaning: "อาการดีใจตื่นเต้นจนตัวสั่น แสดงออกอย่างรวดเร็วจนออกนอกหน้า",
    origin: "ปลากระดี่เวลาฝนตกใหม่ๆ ได้น้ำใหม่จะดีใจกระโดดโลดเต้นอย่างรวดเร็ว",
    example: "พอรู้ว่าจะได้ไปทัศนศึกษา เด็กๆ ก็พากันดีอกดีใจเหมือนกระดี่ได้น้ำ",
    emoji: "🐠",
    onetFrequent: true
  }
];

// ==========================================
// 2. O-NET EXAM QUESTIONS (15 ข้อ มาตรฐาน ท 4.1)
// ==========================================
const ONET_EXAM_QUESTIONS = [
  {
    id: 1,
    tag: "O-NET ปีการศึกษา 2565",
    question: "ข้อใดเป็น 'สุภาษิต' ทุกข้อความ?",
    choices: [
      "ก. น้ำเชี่ยวอย่าขวางเรือ , เดินตามผู้ใหญ่หมาไม่กัด",
      "ข. ขี่ช้างจับตั๊กแตน , วัวหายล้อมคอก",
      "ค. ยกเมฆ , ชักแม่น้ำทั้งห้า",
      "ง. คางคกขึ้นวอ , ปากหวานก้นเปรี้ยว"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. เพราะ 'น้ำเชี่ยวอย่าขวางเรือ' และ 'เดินตามผู้ใหญ่หมาไม่กัด' มีลักษณะเป็น 'คำสั่งสอนเตือนสติ' ชี้แนะแนวทางปฏิบัติที่ถูกต้อง ส่วนข้อ ข. เป็นคำพังเพย และข้อ ค., ง. เป็นสำนวน"
  },
  {
    id: 2,
    tag: "O-NET ปีการศึกษา 2564",
    question: "ข้อความใดเป็น 'คำพังเพย' ที่มีความหมายว่า 'ลงทุนมากแต่ได้ผลตอบแทนเพียงเล็กน้อย'?",
    choices: [
      "ก. ตำน้ำพริกละลายแม่น้ำ",
      "ข. ขี่ช้างจับตั๊กแตน",
      "ค. งมเข็มในมหาสมุทร",
      "ง. ช้างตายทั้งตัวเอาใบบัวมาปิด"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'ขี่ช้างจับตั๊กแตน' หมายถึง ลงทุนมากแต่ได้ผลประโยชน์นิดเดียว ส่วน 'ตำน้ำพริกละลายแม่น้ำ' หมายถึง สิ้นเปลืองไปโดยไม่ได้ประโยชน์ และ 'งมเข็มในมหาสมุทร' หมายถึง ทำงานที่ยากยิ่ง"
  },
  {
    id: 3,
    tag: "O-NET ปีการศึกษา 2563",
    question: "สถานการณ์ใดตรงกับสำนวน 'วัวหายล้อมคอก'?",
    choices: [
      "ก. สมชายรีบทำการบ้านก่อนออกไปเตะฟุตบอล",
      "ข. สมศรีติดกล้องวงจรปิดหลังจากบ้านถูกขโมยขึ้นยกเค้า",
      "ค. มานะซื้อประกันชีวิตให้พ่อแม่เพื่อความอุ่นใจ",
      "ง. ชูใจตรวจเช็กเบรกรถจักรยานก่อนขี่ลงเขา"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'วัวหายล้อมคอก' หมายถึง เกิดความเสียหายขึ้นแล้วจึงคิดหาทางป้องกัน สมศรีถูกขโมยขึ้นบ้านแล้วจึงมาติดกล้องวงจรปิด จึงตรงกับความหมายนี้ที่สุด"
  },
  {
    id: 4,
    tag: "จำแนกประเภท (ท 4.1)",
    question: "ข้อใดจำแนกประเภทของถ้อยคำได้ 'ถูกต้องที่สุด'?",
    choices: [
      "ก. ปากหวานก้นเปรี้ยว - สุภาษิต",
      "ข. ทำดีได้ดี ทำชั่วได้ชั่ว - คำพังเพย",
      "ค. ไก่เห็นตีนงู งูเห็นนมไก่ - คำพังเพย",
      "ง. รักวัวให้ผูก รักลูกให้ตี - สำนวน"
    ],
    correctAnswer: 2,
    explanation: "ตอบ ค. 'ไก่เห็นตีนงู งูเห็นนมไก่' เป็นคำพังเพย (เปรียบเทียบเสียดสี มักมีสัตว์) ส่วนข้อ ก. เป็นสำนวน, ข้อ ข. เป็นสุภาษิต และข้อ ง. เป็นสุภาษิต"
  },
  {
    id: 5,
    tag: "การใช้สำนวนในบริบท",
    question: "\"สมพรพูดจาหว่านล้อมยกเหตุผลต่างๆ เพื่อขอให้คุณพ่อซื้อโทรศัพท์ใหม่ให้\" พฤติกรรมของสมพรตรงกับข้อใด?",
    choices: [
      "ก. ขวานผ่าซาก",
      "ข. ชักแม่น้ำทั้งห้า",
      "ค. ยกเมฆ",
      "ง. สีซอให้ควายฟัง"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'ชักแม่น้ำทั้งห้า' หมายถึง การพูดจาหว่านล้อมยกเหตุผลอ้างโน่นอ้างนี่เพื่อให้ได้สิ่งที่ตนปรารถนา"
  },
  {
    id: 6,
    tag: "O-NET ปีการศึกษา 2566",
    question: "สำนวนใดมีความหมาย 'ตรงข้าม' กับสำนวน 'ช้าๆ ได้พร้าสองเล่มงาม'?",
    choices: [
      "ก. น้ำขึ้นให้รีบตัก",
      "ข. น้ำเชี่ยวอย่าขวางเรือ",
      "ค. รีบนักมักพลัดตกหกล้ม (หรือ ความเร่งรีบนำมาซึ่งความเสียหาย)",
      "ง. เดินตามผู้ใหญ่หมาไม่กัด"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. 'ช้าๆ ได้พร้าสองเล่มงาม' สอนให้สุขุมรอบคอบค่อยๆ ทำ ส่วน 'น้ำขึ้นให้รีบตัก' สอนให้รีบฉวยโอกาสทันทีที่มีโอกาส จึงมีความหมายในเชิงจังหวะเวลาที่สวนทางกัน"
  },
  {
    id: 7,
    tag: "วิเคราะห์เจตนาข้อความ",
    question: "ข้อใดเป็น 'สุภาษิต' ที่สอนเกี่ยวกับความซื่อสัตย์สุจริตในการดำเนินชีวิต?",
    choices: [
      "ก. แพ้เป็นพระ ชนะเป็นมาร",
      "ข. ซื่อกินไม่หมด คดกินไม่นาน",
      "ค. เอาใจเขามาใส่ใจเรา",
      "ง. ความกตัญญูเป็นเครื่องหมายของคนดี"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'ซื่อกินไม่หมด คดกินไม่นาน' สอนโดยตรงว่าคนซื่อสัตย์จะเจริญยั่งยืน คนคดโกงจะอยู่ได้ไม่นาน"
  },
  {
    id: 8,
    tag: "คำพังเพยเชิงประชดประชัน",
    question: "\"คนที่ฐานะต่ำต้อย พอได้ดีมีตำแหน่งใหญ่โตก็ลืมตัวและแสดงกิริยาเย่อหยิ่ง\" ตรงกับคำพังเพยใด?",
    choices: [
      "ก. คางคกขึ้นวอ",
      "ข. ไก่ได้พลอย",
      "ค. หัวล้านได้หวี",
      "ง. กบในกะลาครอบ"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. 'คางคกขึ้นวอ' หมายถึง คนฐานะต่ำต้อยพอได้ดีก็ลืมตัวหยิ่งยโส (ส่วนกบในกะลาครอบหมายถึงคนมีความรู้น้อยแต่คิดว่ารู้มาก)"
  },
  {
    id: 9,
    tag: "O-NET แนวใหม่ (วิเคราะห์ข่าว)",
    question: "\"เจ้าหน้าที่เตือนประชาชนว่า ความผิดทุจริตโครงการใหญ่มีหลักฐานชัดเจน ปิดอย่างไรก็ไม่มีทางมิด\" ตรงกับข้อใด?",
    choices: [
      "ก. หนีเสือปะจระเข้",
      "ข. ช้างตายทั้งตัวเอาใบบัวมาปิด",
      "ค. ตำน้ำพริกละลายแม่น้ำ",
      "ง. ขี่ช้างจับตั๊กแตน"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'ช้างตายทั้งตัวเอาใบบัวมาปิด' หมายถึง ความผิดหรือเรื่องร้ายแรงที่คนรู้ทั่ว ไม่อาจจะปกปิดได้"
  },
  {
    id: 10,
    tag: "จับคู่ความหมายเหมือน",
    question: "ข้อใดมีความหมายใกล้เคียงกับสำนวน 'สอนจระเข้ให้ว่ายน้ำ' มากที่สุด?",
    choices: [
      "ก. สีซอให้ควายฟัง",
      "ข. สอนหนังสือสังฆราช",
      "ค. กวนน้ำให้ขุ่น",
      "ง. จุดไต้ตำตอ"
    ],
    correctAnswer: 1,
    explanation: "ตอบ ข. 'สอนหนังสือสังฆราช' และ 'สอนจระเข้ให้ว่ายน้ำ' ต่างหมายถึงการไปสอนหรือแนะนำผู้ที่มีความรู้ความชำนาญสูงกว่าตนเองอยู่แล้ว"
  },
  {
    id: 11,
    tag: "วิเคราะห์ที่มาของสำนวน",
    question: "ข้อความ 'กุเรื่องขึ้นมาเอง คาดเดาเอาเองโดยไม่มีมูลความจริง' ตรงกับสำนวนใด?",
    choices: [
      "ก. ปั้นน้ำเป็นตัว",
      "ข. ยกเมฆ",
      "ค. กวนน้ำให้ขุ่น",
      "ง. ถูกทั้งข้อ ก. และ ข."
    ],
    correctAnswer: 3,
    explanation: "ตอบ ง. ทั้ง 'ปั้นน้ำเป็นตัว' และ 'ยกเมฆ' ต่างเป็นสำนวนไทยที่มีความหมายว่ากุเรื่องขึ้นมาเองโดยไม่มีมูลความจริง"
  },
  {
    id: 12,
    tag: "O-NET ปีการศึกษา 2562",
    question: "ประโยคในข้อใดใช้สำนวนได้ 'ไม่ถูกต้อง' ตามบริบท?",
    choices: [
      "ก. สุดาเป็นแกะดำในห้องเพราะเธอชอบแต่งตัวเหมือนเพื่อนทุกคน",
      "ข. อย่ามัวแต่สีซอให้ควายฟังเลย เขาไม่ยอมเปลี่ยนใจหรอก",
      "ค. ช่วงนี้แม่ชักหน้าไม่ถึงหลังเพราะมีค่าใช้จ่ายพิเศษหลายอย่าง",
      "ง. การตามหาแหวนในสระน้ำกว้างเหมือนงมเข็มในมหาสมุทร"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. ไม่ถูกต้อง เพราะ 'แกะดำ' หมายถึง คนที่ทำตัวแปลกแยกแตกต่างจากผู้อื่น หากแต่งตัวเหมือนเพื่อนทุกคนจะไม่เรียกว่าแกะดำ"
  },
  {
    id: 13,
    tag: "ทริคสังเกตคำสั่งสอน",
    question: "คำในข้อใดมักเป็นคีย์เวิร์ดที่สังเกตพบได้ใน 'สุภาษิต'?",
    choices: [
      "ก. มีคำว่า 'อย่า', 'จง', 'ให้', 'ควร'",
      "ข. มีชื่อสัตว์ เช่น ช้าง, ตั๊กแตน, ควาย",
      "ค. มักเป็นวลีสั้นๆ 2-3 คำเท่านั้น",
      "ง. มีคำที่แสดงความตลกขบขัน"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. สุภาษิตมีเจตนามุ่ง 'สั่งสอน แนะนำ ตักเตือน' จึงมักมีคำบ่งชี้ เช่น อย่า (อย่าขวางเรือ), จง, ให้ (รักลูกให้ตี), ควร"
  },
  {
    id: 14,
    tag: "ข้อสอบความเชื่อมโยง",
    question: "\"มีเงินทองมากมาย แต่ไม่รู้จักเก็บออม แถมยังนำไปใช้จ่ายฟุ่มเฟือยอย่างไร้ประโยชน์\" ตรงกับข้อใด?",
    choices: [
      "ก. ตำน้ำพริกละลายแม่น้ำ",
      "ข. น้ำเชี่ยวอย่าขวางเรือ",
      "ค. ซื่อกินไม่หมด คดกินไม่นาน",
      "ง. กินน้ำใต้ศอก"
    ],
    correctAnswer: 0,
    explanation: "ตอบ ก. 'ตำน้ำพริกละลายแม่น้ำ' ใช้เปรียบเทียบการใช้จ่ายทรัพย์สินเงินทองสิ้นเปลืองโดยไม่ได้ประโยชน์คุ้มค่ากลับคืนมา"
  },
  {
    id: 15,
    tag: "วิเคราะห์เปรียบเทียบคำพังเพย",
    question: "ข้อใด 'ไม่ใช่' คำพังเพย?",
    choices: [
      "ก. ขี่ช้างจับตั๊กแตน",
      "ข. ไก่เห็นตีนงู งูเห็นนมไก่",
      "ค. เอาใจเขามาใส่ใจเรา",
      "ง. วัวหายล้อมคอก"
    ],
    correctAnswer: 2,
    explanation: "ตอบ ค. 'เอาใจเขามาใส่ใจเรา' จัดเป็น 'สุภาษิต' เพราะเป็นคติธรรมสอนใจเรื่องความเห็นอกเห็นใจผู้อื่น ไม่ใช่คำพังเพยที่เปรียบเปรยเสียดสี"
  }
];

// ==========================================
// 3. SOUND SYNTHESIZER & TEXT-TO-SPEECH
// ==========================================
let isAudioEnabled = true;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Sound FX: Correct chime, Buzzer error, Victory fanfare
function playSound(type) {
  if (!isAudioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'correct') {
      // Pleasant high double ping
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.setValueAtTime(880, now + 0.1); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'wrong') {
      // Low buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'click') {
      // Gentle click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'fanfare') {
      // 3 tone triumph
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      notes.forEach((freq, idx) => {
        const noteOsc = ctx.createOscillator();
        const noteGain = ctx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(ctx.destination);
        noteOsc.type = 'triangle';
        noteOsc.frequency.setValueAtTime(freq, now + idx * 0.12);
        noteGain.gain.setValueAtTime(0.18, now + idx * 0.12);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.12 + 0.35);
        noteOsc.start(now + idx * 0.12);
        noteOsc.stop(now + idx * 0.12 + 0.35);
      });
    }
  } catch (e) {
    console.warn("Audio playback not supported or blocked", e);
  }
}

function toggleAudio() {
  isAudioEnabled = !isAudioEnabled;
  const icon = document.getElementById('soundIcon');
  const label = document.getElementById('soundLabel');
  if (isAudioEnabled) {
    icon.setAttribute('data-lucide', 'volume-2');
    label.innerText = 'เสียง: เปิด';
    playSound('correct');
  } else {
    icon.setAttribute('data-lucide', 'volume-x');
    label.innerText = 'เสียง: ปิด';
  }
  lucide.createIcons();
}

// Text to speech (Thai)
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    alert("ขออภัย เบราว์เซอร์นี้ไม่รองรับระบบอ่านออกเสียง");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'th-TH';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

// ==========================================
// 4. TAB NAVIGATION
// ==========================================
function switchTab(tabId) {
  playSound('click');
  
  // Hide all sections
  const sections = ['learn', 'dictionary', 'games', 'exam'];
  sections.forEach(id => {
    const sec = document.getElementById(`section-${id}`);
    const btn = document.getElementById(`tabBtn-${id}`);
    if (sec) sec.classList.add('hidden');
    if (btn) btn.classList.remove('active-tab');
  });

  // Show active section
  const targetSec = document.getElementById(`section-${tabId}`);
  const targetBtn = document.getElementById(`tabBtn-${tabId}`);
  if (targetSec) targetSec.classList.remove('hidden');
  if (targetBtn) targetBtn.classList.add('active-tab');

  // Trigger special initializations
  if (tabId === 'dictionary') {
    renderDictionary();
  } else if (tabId === 'games') {
    initSortGame();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 5. DICTIONARY & SEARCH MODULE
// ==========================================
let currentTypeFilter = 'all';
let currentCategoryFilter = 'all';
let searchQuery = '';

function renderCategories() {
  const container = document.getElementById('categoryChips');
  if (!container) return;

  const categories = ['ทั้งหมด', 'สัตว์', 'ธรรมชาติ', 'ร่างกาย', 'ของใช้', 'พฤติกรรม'];
  container.innerHTML = categories.map(cat => {
    const val = cat === 'ทั้งหมด' ? 'all' : cat;
    const isActive = currentCategoryFilter === val;
    return `
      <button 
        onclick="setCategoryFilter('${val}')"
        class="category-chip px-3 py-1 rounded-full border text-xs font-medium transition ${
          isActive 
            ? 'active bg-amber-500 text-white border-amber-500' 
            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
        }"
      >
        ${cat}
      </button>
    `;
  }).join('');
}

function setTypeFilter(type) {
  playSound('click');
  currentTypeFilter = type;

  // Update button active styling
  document.querySelectorAll('.filter-type-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');

  filterIdioms();
}

function setCategoryFilter(cat) {
  playSound('click');
  currentCategoryFilter = cat;
  renderCategories();
  filterIdioms();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  searchQuery = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  filterIdioms();
}

function filterIdioms() {
  const input = document.getElementById('searchInput');
  searchQuery = (input ? input.value : '').trim().toLowerCase();
  
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) {
    if (searchQuery.length > 0) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }

  const filtered = IDIOM_DATABASE.filter(item => {
    // Type Match
    const matchType = currentTypeFilter === 'all' || item.type === currentTypeFilter;
    // Category Match
    const matchCategory = currentCategoryFilter === 'all' || item.category === currentCategoryFilter;
    // Search Query Match (Phrase, Meaning, or Example)
    const matchQuery = !searchQuery || 
      item.phrase.toLowerCase().includes(searchQuery) ||
      item.meaning.toLowerCase().includes(searchQuery) ||
      item.example.toLowerCase().includes(searchQuery);

    return matchType && matchCategory && matchQuery;
  });

  renderIdiomCards(filtered);
}

function renderIdiomCards(items) {
  const grid = document.getElementById('idiomGrid');
  const emptyState = document.getElementById('emptySearchState');
  const filteredCount = document.getElementById('filteredCount');

  if (filteredCount) filteredCount.innerText = items.length;

  if (!items || items.length === 0) {
    if (grid) grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  const typeConfig = {
    idiom: { label: "สำนวน", bg: "bg-blue-100 text-blue-800 border-blue-200", bar: "bg-blue-500" },
    proverb: { label: "สุภาษิต", bg: "bg-emerald-100 text-emerald-800 border-emerald-200", bar: "bg-emerald-500" },
    saying: { label: "คำพังเพย", bg: "bg-pink-100 text-pink-800 border-pink-200", bar: "bg-pink-500" }
  };

  grid.innerHTML = items.map(item => {
    const conf = typeConfig[item.type];
    return `
      <div 
        onclick="openIdiomModal('${item.id}')"
        class="idiom-card bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:border-amber-400 cursor-pointer flex flex-col justify-between relative overflow-hidden group"
      >
        <div class="h-1.5 w-full ${conf.bar} absolute top-0 left-0"></div>

        <div>
          <div class="flex items-center justify-between gap-2 mb-3">
            <span class="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border ${conf.bg}">
              ${conf.label}
            </span>
            <div class="flex items-center gap-1.5">
              ${item.onetFrequent ? '<span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">⭐ ออกบ่อย</span>' : ''}
              <span class="text-xs text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">${item.category}</span>
            </div>
          </div>

          <div class="flex items-start gap-3 mb-2">
            <div class="text-3xl shrink-0 group-hover:scale-110 transition transform">
              ${item.emoji}
            </div>
            <div>
              <h4 class="font-kanit text-lg font-bold text-slate-800 group-hover:text-amber-600 transition">
                ${item.phrase}
              </h4>
              <p class="text-xs text-slate-600 line-clamp-2 mt-1">
                ${item.meaning}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
          <span class="flex items-center gap-1 group-hover:text-amber-600 transition font-medium">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> ดูรายละเอียด
          </span>
          <button 
            onclick="event.stopPropagation(); speakText('${item.phrase}. หมายถึง ${item.meaning}')"
            class="p-1.5 rounded-lg hover:bg-amber-50 text-slate-400 hover:text-amber-600 transition"
            title="ฟังเสียงอ่าน"
          >
            <i data-lucide="volume-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateTypeCounts() {
  const all = IDIOM_DATABASE.length;
  const idiom = IDIOM_DATABASE.filter(i => i.type === 'idiom').length;
  const proverb = IDIOM_DATABASE.filter(i => i.type === 'proverb').length;
  const saying = IDIOM_DATABASE.filter(i => i.type === 'saying').length;

  document.getElementById('count-all').innerText = all;
  document.getElementById('count-idiom').innerText = idiom;
  document.getElementById('count-proverb').innerText = proverb;
  document.getElementById('count-saying').innerText = saying;
}

function renderDictionary() {
  updateTypeCounts();
  renderCategories();
  filterIdioms();
}

// Idiom Modal View
let activeModalIdiom = null;

function openIdiomModal(id) {
  playSound('click');
  const item = IDIOM_DATABASE.find(i => i.id === id);
  if (!item) return;

  activeModalIdiom = item;
  document.getElementById('modalEmoji').innerText = item.emoji;
  document.getElementById('modalPhrase').innerText = item.phrase;
  document.getElementById('modalMeaning').innerText = item.meaning;
  document.getElementById('modalOrigin').innerText = item.origin || "ไม่มีข้อมูลที่มาเป็นพิเศษ";
  document.getElementById('modalExample').innerText = `"${item.example}"`;

  const badge = document.getElementById('modalTypeBadge');
  const typeMap = {
    idiom: { label: "สำนวน (เปรียบเทียบ)", bg: "bg-blue-100 text-blue-800" },
    proverb: { label: "สุภาษิต (คำสอนใจ)", bg: "bg-emerald-100 text-emerald-800" },
    saying: { label: "คำพังเพย (ประชด/เสียดสี)", bg: "bg-pink-100 text-pink-800" },
  };
  badge.className = `inline-block px-3 py-1 rounded-full text-xs font-bold mb-1 ${typeMap[item.type].bg}`;
  badge.innerText = typeMap[item.type].label;

  document.getElementById('idiomModal').classList.remove('hidden');
}

function closeIdiomModal() {
  playSound('click');
  document.getElementById('idiomModal').classList.add('hidden');
  activeModalIdiom = null;
}

function speakModalIdiom() {
  if (!activeModalIdiom) return;
  speakText(`${activeModalIdiom.phrase}. หมายถึง ${activeModalIdiom.meaning}. ตัวอย่างประโยค ${activeModalIdiom.example}`);
}

// ==========================================
// 6. MINI-GAMES MODULE
// ==========================================
let currentActiveGame = 'sort';

function selectGame(gameId) {
  playSound('click');
  currentActiveGame = gameId;

  // Tabs style
  ['sort', 'guess', 'fill'].forEach(id => {
    const card = document.getElementById(`gameSelect-${id}`);
    const cont = document.getElementById(`game-${id}-container`);
    if (card) {
      if (id === gameId) {
        card.className = "game-select-card active p-5 rounded-2xl border-2 border-amber-500 bg-amber-50 text-left transition transform hover:-translate-y-0.5 flex items-start gap-4 shadow-sm";
      } else {
        card.className = "game-select-card p-5 rounded-2xl border-2 border-slate-200 bg-white text-left transition transform hover:-translate-y-0.5 flex items-start gap-4 hover:border-amber-300 shadow-sm";
      }
    }
    if (cont) {
      if (id === gameId) cont.classList.remove('hidden');
      else cont.classList.add('hidden');
    }
  });

  if (gameId === 'sort') initSortGame();
  else if (gameId === 'guess') initGuessGame();
  else if (gameId === 'fill') initFillGame();
}

// ------------------------------------------
// GAME 1: กล่องแยกหมวดหมู่ (Sort Game)
// ------------------------------------------
let sortPool = [];
let sortCurrentIdx = 0;
let sortScore = 0;
let sortCurrentItem = null;

function initSortGame() {
  sortPool = [...IDIOM_DATABASE].sort(() => 0.5 - Math.random()).slice(0, 10);
  sortCurrentIdx = 0;
  sortScore = 0;
  loadSortQuestion();
}

function loadSortQuestion() {
  const roundEl = document.getElementById('sortGameRound');
  const scoreEl = document.getElementById('sortGameScore');
  const feedback = document.getElementById('sortFeedback');
  feedback.classList.add('hidden');

  if (sortCurrentIdx >= sortPool.length) {
    // Game completed
    showSortGameCompletion();
    return;
  }

  sortCurrentItem = sortPool[sortCurrentIdx];
  roundEl.innerText = `${sortCurrentIdx + 1} / ${sortPool.length}`;
  scoreEl.innerText = sortScore;

  document.getElementById('sortCardEmoji').innerText = sortCurrentItem.emoji;
  document.getElementById('sortCardPhrase').innerText = sortCurrentItem.phrase;
  document.getElementById('sortCardMeaning').innerText = `ความหมาย: ${sortCurrentItem.meaning}`;

  lucide.createIcons();
}

function submitSortAnswer(selectedType) {
  if (!sortCurrentItem) return;

  const feedback = document.getElementById('sortFeedback');
  const isCorrect = selectedType === sortCurrentItem.type;

  const typeLabels = {
    idiom: "สำนวน (เปรียบเทียบ ไม่มีคำสั่งสอน)",
    proverb: "สุภาษิต (มีคติเตือนสติ มุ่งสั่งสอนให้ทำดี)",
    saying: "คำพังเพย (เปรียบเทียบ เสียดสี มีสัตว์/สิ่งของ)"
  };

  if (isCorrect) {
    playSound('correct');
    sortScore++;
    document.getElementById('sortGameScore').innerText = sortScore;
    feedback.className = "mt-6 p-4 rounded-2xl text-center max-w-lg w-full text-sm font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 animate-fade-in block";
    feedback.innerHTML = `🎉 <strong>ถูกต้องยอดเยี่ยม!</strong> "${sortCurrentItem.phrase}" จัดเป็น <strong>${typeLabels[sortCurrentItem.type]}</strong>`;
  } else {
    playSound('wrong');
    feedback.className = "mt-6 p-4 rounded-2xl text-center max-w-lg w-full text-sm font-semibold bg-rose-100 text-rose-900 border border-rose-300 animate-fade-in block";
    feedback.innerHTML = `❌ <strong>ยังไม่ถูกต้องนะ!</strong> "${sortCurrentItem.phrase}" เป็น <strong>${typeLabels[sortCurrentItem.type]}</strong>`;
  }

  // Next question after short delay
  setTimeout(() => {
    sortCurrentIdx++;
    loadSortQuestion();
  }, 1600);
}

function speakCurrentSortCard() {
  if (sortCurrentItem) {
    speakText(`${sortCurrentItem.phrase}. ความหมาย: ${sortCurrentItem.meaning}`);
  }
}

function showSortGameCompletion() {
  playSound('fanfare');
  confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

  const card = document.getElementById('sortActiveCard');
  card.innerHTML = `
    <div class="py-4">
      <div class="text-6xl mb-3">🏆</div>
      <h3 class="font-kanit text-2xl font-bold text-slate-800 mb-2">จบเกมแยกหมวดหมู่แล้ว!</h3>
      <p class="text-base text-slate-600 mb-4">คุณได้คะแนน <strong class="text-amber-600 font-bold text-xl">${sortScore}</strong> จาก ${sortPool.length} คะแนน</p>
      <button onclick="initSortGame()" class="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow transition">
        เล่นใหม่อีกครั้ง 🔄
      </button>
    </div>
  `;
}

// ------------------------------------------
// GAME 2: ถอดรหัสภาพปริศนา (Guess Game)
// ------------------------------------------
const GUESS_QUESTIONS = [
  {
    clue: "🐘 🦗",
    hint: "คำใบ้: ลงทุนลงแรงมหาศาล เพื่อทำสิ่งที่ได้ผลประโยชน์เพียงเล็กน้อย",
    correct: "ขี่ช้างจับตั๊กแตน",
    choices: ["ขี่ช้างจับตั๊กแตน", "กบในกะลาครอบ", "สอนจระเข้ให้ว่ายน้ำ", "ไก่เห็นตีนงู งูเห็นนมไก่"]
  },
  {
    clue: "🥣 🌊",
    hint: "คำใบ้: สิ้นเปลืองเงินทองไปโดยไม่ได้ประโยชน์อันใดเลย",
    correct: "ตำน้ำพริกละลายแม่น้ำ",
    choices: ["ชักแม่น้ำทั้งห้า", "น้ำเชี่ยวอย่าขวางเรือ", "ตำน้ำพริกละลายแม่น้ำ", "น้ำลดตอผุด"]
  },
  {
    clue: "🐔 🐍",
    hint: "คำใบ้: ต่างฝ่ายต่างรู้ความลับหรือเล่ห์เหลี่ยมของกันและกันเป็นอย่างดี",
    correct: "ไก่เห็นตีนงู งูเห็นนมไก่",
    choices: ["งมเข็มในมหาสมุทร", "ไก่เห็นตีนงู งูเห็นนมไก่", "ไก่ได้พลอย", "หนีเสือปะจระเข้"]
  },
  {
    clue: "🐄 🚪",
    hint: "คำใบ้: เกิดความเสียหายขึ้นแล้ว จึงค่อยคิดหาทางป้องกัน",
    correct: "วัวหายล้อมคอก",
    choices: ["รักวัวให้ผูก รักลูกให้ตี", "วัวหายล้อมคอก", "สีซอให้ควายฟัง", "กระดี่ได้น้ำ"]
  },
  {
    clue: "🎻 🐃",
    hint: "คำใบ้: สั่งสอนตักเตือนคนที่ไม่สนใจฟัง ย่อมเสียเวลาเปล่า",
    correct: "สีซอให้ควายฟัง",
    choices: ["สีซอให้ควายฟัง", "กิ้งก่าได้ทอง", "คางคกขึ้นวอ", "ขวานผ่าซาก"]
  },
  {
    clue: "🐊 🏊",
    hint: "คำใบ้: สอนสิ่งที่ผู้อื่นเขามีความรู้ความชำนาญอยู่แล้ว",
    correct: "สอนจระเข้ให้ว่ายน้ำ",
    choices: ["หนีเสือปะจระเข้", "สอนจระเข้ให้ว่ายน้ำ", "กบในกะลาครอบ", "จับปลาสองมือ"]
  },
  {
    clue: "🍃 🐘 🪦",
    hint: "คำใบ้: ความผิดร้ายแรงที่คนรู้กันทั่ว ไม่อาจจะปกปิดได้",
    correct: "ช้างตายทั้งตัว เอาใบบัวมาปิด",
    choices: ["ขี่ช้างจับตั๊กแตน", "ช้างตายทั้งตัว เอาใบบัวมาปิด", "ปากหวานก้นเปรี้ยว", "ยกเมฆ"]
  },
  {
    clue: "💎 🐓",
    hint: "คำใบ้: ได้สิ่งที่มีค่ามากมาไว้ แต่ไม่รู้คุณค่าของสิ่งนั้น",
    correct: "ไก่ได้พลอย",
    choices: ["กิ้งก่าได้ทอง", "คางคกขึ้นวอ", "ไก่ได้พลอย", "ชักหน้าไม่ถึงหลัง"]
  }
];

let guessIdx = 0;
let guessScore = 0;

function initGuessGame() {
  guessIdx = 0;
  guessScore = 0;
  loadGuessQuestion();
}

function loadGuessQuestion() {
  const roundEl = document.getElementById('guessGameRound');
  const scoreEl = document.getElementById('guessGameScore');
  const feedback = document.getElementById('guessFeedback');
  feedback.classList.add('hidden');

  if (guessIdx >= GUESS_QUESTIONS.length) {
    showGuessGameCompletion();
    return;
  }

  const q = GUESS_QUESTIONS[guessIdx];
  roundEl.innerText = `${guessIdx + 1} / ${GUESS_QUESTIONS.length}`;
  scoreEl.innerText = guessScore;

  document.getElementById('guessClueDisplay').innerText = q.clue;
  document.getElementById('guessClueHint').innerText = q.hint;

  const container = document.getElementById('guessOptionsGrid');
  // Shuffle options
  const shuffled = [...q.choices].sort(() => 0.5 - Math.random());
  container.innerHTML = shuffled.map(choice => `
    <button 
      onclick="submitGuessAnswer('${choice}')"
      class="p-4 rounded-2xl border-2 border-indigo-100 bg-indigo-50/50 hover:bg-indigo-100 hover:border-indigo-400 font-kanit font-bold text-slate-800 text-sm transition transform active:scale-95 text-center"
    >
      ${choice}
    </button>
  `).join('');
}

function submitGuessAnswer(selected) {
  const q = GUESS_QUESTIONS[guessIdx];
  const feedback = document.getElementById('guessFeedback');

  if (selected === q.correct) {
    playSound('correct');
    guessScore++;
    document.getElementById('guessGameScore').innerText = guessScore;
    feedback.className = "mt-5 p-4 rounded-2xl text-center max-w-md w-full text-sm font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 block";
    feedback.innerHTML = `🎉 ถูกต้อง! <strong>"${q.correct}"</strong>`;
  } else {
    playSound('wrong');
    feedback.className = "mt-5 p-4 rounded-2xl text-center max-w-md w-full text-sm font-semibold bg-rose-100 text-rose-900 border border-rose-300 block";
    feedback.innerHTML = `❌ ยังไม่ใช่ ข้อที่ถูกคือ <strong>"${q.correct}"</strong>`;
  }

  setTimeout(() => {
    guessIdx++;
    loadGuessQuestion();
  }, 1400);
}

function showGuessGameCompletion() {
  playSound('fanfare');
  confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

  const container = document.getElementById('game-guess-container');
  container.innerHTML = `
    <div class="text-center py-12">
      <div class="text-6xl mb-3">🌟</div>
      <h3 class="font-kanit text-2xl font-bold text-slate-800 mb-2">ยอดเยี่ยมมาก! ถอดรหัสภาพครบแล้ว</h3>
      <p class="text-slate-600 mb-4">คุณได้คะแนน <strong class="text-indigo-600 font-bold text-xl">${guessScore}</strong> จาก ${GUESS_QUESTIONS.length} คะแนน</p>
      <button onclick="selectGame('guess')" class="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow transition">
        เล่นใหม่อีกครั้ง 🔄
      </button>
    </div>
  `;
}

// ------------------------------------------
// GAME 3: เติมคำสำนวนให้สมบูรณ์ (Fill Game)
// ------------------------------------------
const FILL_QUESTIONS = [
  {
    sentence: "ตำน้ำพริกละลาย...",
    missing: "แม่น้ำ",
    meaning: "สิ้นเปลืองทรัพย์ไปโดยไม่ได้ประโยชน์คุ้มค่า",
    choices: ["แม่น้ำ", "มหาสมุทร", "ลำคลอง", "บ่อน้ำ"]
  },
  {
    sentence: "น้ำเชี่ยวอย่า...",
    missing: "ขวางเรือ",
    meaning: "อย่าไปขัดขวางผู้มีอำนาจหรือเรื่องที่กำลังรุนแรง",
    choices: ["ขวางเรือ", "พายเรือ", "เล่นน้ำ", "ลงเรือ"]
  },
  {
    sentence: "รักวัวให้ผูก รักลูกให้...",
    missing: "ตี",
    meaning: "เมื่อลูกทำผิดต้องรู้จักว่ากล่าวตักเตือนและลงโทษ",
    choices: ["ตี", "กอด", "สอน", "หอม"]
  },
  {
    sentence: "ขี่ช้างจับ...",
    missing: "ตั๊กแตน",
    meaning: "ลงทุนมากแต่ได้ผลประโยชน์เพียงเล็กน้อย",
    choices: ["ตั๊กแตน", "แมลงวัน", "ปลาไหล", "หนูนา"]
  },
  {
    sentence: "ชักแม่น้ำทั้ง...",
    missing: "ห้า",
    meaning: "พูดจาหว่านล้อมยกเหตุผลต่างๆ เพื่อขอสิ่งที่ต้องการ",
    choices: ["ห้า", "สาม", "เจ็ด", "สิบ"]
  },
  {
    sentence: "ไก่เห็นตีนงู งูเห็น...",
    missing: "นมไก่",
    meaning: "ต่างฝ่ายต่างรู้ความลับหรือเล่ห์เหลี่ยมของกันและกัน",
    choices: ["นมไก่", "ขนไก่", "หงอนไก่", "ปีกไก่"]
  },
  {
    sentence: "ซื่อกินไม่หมด คดกิน...",
    missing: "ไม่นาน",
    meaning: "ความซื่อสัตย์ทำให้เจริญยั่งยืน ความคดโกงอยู่ได้ไม่นาน",
    choices: ["ไม่นาน", "ไม่พอ", "หมดตัว", "ไม่เจริญ"]
  },
  {
    sentence: "เดินตามผู้ใหญ่...",
    missing: "หมาไม่กัด",
    meaning: "ประพฤติตามคำแนะนำของผู้ใหญ่ย่อมปลอดภัย",
    choices: ["หมาไม่กัด", "ไม่หลงทาง", "จะปลอดภัย", "ได้ดีทุกคน"]
  }
];

let fillIdx = 0;
let fillScore = 0;

function initFillGame() {
  fillIdx = 0;
  fillScore = 0;
  loadFillQuestion();
}

function loadFillQuestion() {
  const roundEl = document.getElementById('fillGameRound');
  const scoreEl = document.getElementById('fillGameScore');
  const feedback = document.getElementById('fillFeedback');
  feedback.classList.add('hidden');

  if (fillIdx >= FILL_QUESTIONS.length) {
    showFillGameCompletion();
    return;
  }

  const q = FILL_QUESTIONS[fillIdx];
  roundEl.innerText = `${fillIdx + 1} / ${FILL_QUESTIONS.length}`;
  scoreEl.innerText = fillScore;

  document.getElementById('fillSentenceDisplay').innerHTML = `
    ${q.sentence.replace('...', ` <span class="text-rose-600 border-b-4 border-rose-400 border-dashed px-3">? ? ?</span>`)}
  `;
  document.getElementById('fillSentenceMeaning').innerText = `ความหมาย: ${q.meaning}`;

  const container = document.getElementById('fillOptionsGrid');
  const shuffled = [...q.choices].sort(() => 0.5 - Math.random());
  container.innerHTML = shuffled.map(choice => `
    <button 
      onclick="submitFillAnswer('${choice}')"
      class="p-3.5 rounded-2xl border-2 border-rose-100 bg-white hover:bg-rose-50 hover:border-rose-400 font-kanit font-bold text-slate-800 text-sm transition transform active:scale-95 shadow-sm"
    >
      ${choice}
    </button>
  `).join('');
}

function submitFillAnswer(selected) {
  const q = FILL_QUESTIONS[fillIdx];
  const feedback = document.getElementById('fillFeedback');

  if (selected === q.missing) {
    playSound('correct');
    fillScore++;
    document.getElementById('fillGameScore').innerText = fillScore;
    feedback.className = "mt-5 p-4 rounded-2xl text-center max-w-md w-full text-sm font-semibold bg-emerald-100 text-emerald-900 border border-emerald-300 block";
    feedback.innerHTML = `🎉 ยอดเยี่ยม! คำตอบคือ <strong>"${q.missing}"</strong>`;
  } else {
    playSound('wrong');
    feedback.className = "mt-5 p-4 rounded-2xl text-center max-w-md w-full text-sm font-semibold bg-rose-100 text-rose-900 border border-rose-300 block";
    feedback.innerHTML = `❌ ยังไม่ถูก คำที่ถูกต้องคือ <strong>"${q.missing}"</strong>`;
  }

  setTimeout(() => {
    fillIdx++;
    loadFillQuestion();
  }, 1400);
}

function showFillGameCompletion() {
  playSound('fanfare');
  confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });

  const container = document.getElementById('game-fill-container');
  container.innerHTML = `
    <div class="text-center py-12">
      <div class="text-6xl mb-3">🧩</div>
      <h3 class="font-kanit text-2xl font-bold text-slate-800 mb-2">เก่งมาก! ต่อสำนวนไทยสำเร็จครบทุกข้อ</h3>
      <p class="text-slate-600 mb-4">คุณได้คะแนน <strong class="text-rose-600 font-bold text-xl">${fillScore}</strong> จาก ${FILL_QUESTIONS.length} คะแนน</p>
      <button onclick="selectGame('fill')" class="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow transition">
        เล่นใหม่อีกครั้ง 🔄
      </button>
    </div>
  `;
}

// ==========================================
// 7. O-NET EXAM ENGINE & CERTIFICATE
// ==========================================
let examQuestions = [];
let examCurrentIndex = 0;
let userAnswers = {};
let examTimer = null;
let examSecondsRemaining = 15 * 60; // 15 mins
let studentName = "เด็กชายมานะ รักเรียน";
let schoolName = "โรงเรียนราษฎร์บำรุง";

function startExam() {
  const nameInput = document.getElementById('studentNameInput');
  const schoolInput = document.getElementById('schoolNameInput');
  
  if (nameInput && nameInput.value.trim()) {
    studentName = nameInput.value.trim();
  }
  if (schoolInput && schoolInput.value.trim()) {
    schoolName = schoolInput.value.trim();
  }

  playSound('click');
  examQuestions = [...ONET_EXAM_QUESTIONS];
  examCurrentIndex = 0;
  userAnswers = {};
  examSecondsRemaining = 15 * 60;

  // View toggles
  document.getElementById('examIntroView').classList.add('hidden');
  document.getElementById('examResultView').classList.add('hidden');
  document.getElementById('examActiveView').classList.remove('hidden');

  renderExamQuestion();
  startTimer();
}

function startTimer() {
  if (examTimer) clearInterval(examTimer);
  updateTimerDisplay();

  examTimer = setInterval(() => {
    examSecondsRemaining--;
    updateTimerDisplay();

    if (examSecondsRemaining <= 0) {
      clearInterval(examTimer);
      alert("หมดเวลาทำข้อสอบแล้ว! ระบบจะสรุปคะแนนของคุณทันที");
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(examSecondsRemaining / 60);
  const secs = examSecondsRemaining % 60;
  const disp = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  document.getElementById('examTimerDisplay').innerText = disp;
}

function renderExamQuestion() {
  const q = examQuestions[examCurrentIndex];
  const total = examQuestions.length;

  document.getElementById('examCurrentNum').innerText = examCurrentIndex + 1;
  document.getElementById('examProgressText').innerText = `${examCurrentIndex + 1} จาก ${total}`;
  document.getElementById('examProgressBar').style.width = `${((examCurrentIndex + 1) / total) * 100}%`;

  document.getElementById('examQuestionTag').innerText = q.tag;
  document.getElementById('examQuestionText').innerText = q.question;

  const choicesContainer = document.getElementById('examChoicesContainer');
  choicesContainer.innerHTML = q.choices.map((choice, cIdx) => {
    const isSelected = userAnswers[examCurrentIndex] === cIdx;
    return `
      <div 
        onclick="selectExamChoice(${cIdx})"
        class="choice-card p-4 rounded-2xl border-2 transition cursor-pointer flex items-center justify-between ${
          isSelected 
            ? 'border-amber-500 bg-amber-50 shadow-sm text-amber-950 font-semibold' 
            : 'border-slate-200 hover:border-amber-300 hover:bg-slate-50 text-slate-700'
        }"
      >
        <span class="text-sm sm:text-base">${choice}</span>
        <div class="w-6 h-6 rounded-full border-2 flex items-center justify-center ${
          isSelected ? 'border-amber-500 bg-amber-500 text-white' : 'border-slate-300'
        }">
          ${isSelected ? '✓' : ''}
        </div>
      </div>
    `;
  }).join('');

  // Prev / Next button states
  const prevBtn = document.getElementById('examPrevBtn');
  const nextBtn = document.getElementById('examNextBtn');
  const submitBtn = document.getElementById('examSubmitBtn');

  prevBtn.disabled = examCurrentIndex === 0;

  if (examCurrentIndex === total - 1) {
    nextBtn.classList.add('hidden');
    submitBtn.classList.remove('hidden');
  } else {
    nextBtn.classList.remove('hidden');
    submitBtn.classList.add('hidden');
  }
}

function selectExamChoice(choiceIndex) {
  playSound('click');
  userAnswers[examCurrentIndex] = choiceIndex;
  renderExamQuestion();
}

function nextExamQuestion() {
  if (examCurrentIndex < examQuestions.length - 1) {
    examCurrentIndex++;
    renderExamQuestion();
  }
}

function prevExamQuestion() {
  if (examCurrentIndex > 0) {
    examCurrentIndex--;
    renderExamQuestion();
  }
}

function confirmSubmitExam() {
  const answeredCount = Object.keys(userAnswers).length;
  const total = examQuestions.length;

  if (answeredCount < total) {
    const ok = confirm(`คุณตอบคำถามไป ${answeredCount} จาก ${total} ข้อ ยังมีข้อที่ยังไม่ได้ตอบ ต้องการส่งกระดาษคำตอบหรือไม่?`);
    if (!ok) return;
  }
  finishExam();
}

function finishExam() {
  if (examTimer) clearInterval(examTimer);

  let correctCount = 0;
  examQuestions.forEach((q, idx) => {
    if (userAnswers[idx] === q.correctAnswer) {
      correctCount++;
    }
  });

  const total = examQuestions.length;
  const percent = ((correctCount / total) * 100).toFixed(1);
  const isPassed = percent >= 70;

  document.getElementById('examActiveView').classList.add('hidden');
  document.getElementById('examResultView').classList.remove('hidden');

  // Populate Result
  document.getElementById('resultScoreText').innerText = `${correctCount}/${total}`;
  document.getElementById('resultPercentText').innerText = `${percent}%`;

  const heading = document.getElementById('resultHeading');
  const subtext = document.getElementById('resultSubtext');
  const emoji = document.getElementById('resultStatusEmoji');
  const certContainer = document.getElementById('certificateContainer');
  const certBtn = document.getElementById('showCertBtn');

  if (isPassed) {
    playSound('fanfare');
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    emoji.innerText = '🏆';
    heading.innerText = 'ยินดีด้วย! คุณผ่านเกณฑ์ทดสอบ O-NET';
    heading.className = "font-kanit text-2xl sm:text-3xl font-extrabold text-emerald-700 mb-1";
    subtext.innerText = 'ยอดเยี่ยมมาก มีความพร้อมสูงสำหรับการสอบ O-NET ชั้น ป.6';
    certContainer.classList.remove('hidden');
    certBtn.classList.remove('hidden');

    // Fill Certificate Details
    document.getElementById('certStudentName').innerText = studentName;
    document.getElementById('certSchoolName').innerText = schoolName;
    document.getElementById('certScore').innerText = `${correctCount} จาก ${total} คะแนน (${percent}%)`;
    
    // Thai date
    const today = new Date();
    const thaiMonths = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    const thaiDate = `${today.getDate()} ${thaiMonths[today.getMonth()]} ${today.getFullYear() + 543}`;
    document.getElementById('certDateDisplay').innerText = thaiDate;
  } else {
    playSound('wrong');
    emoji.innerText = '💪';
    heading.innerText = 'พยายามอีกนิดนะ! เกือบผ่านแล้ว';
    heading.className = "font-kanit text-2xl sm:text-3xl font-extrabold text-amber-800 mb-1";
    subtext.innerText = `เกณฑ์ผ่านคือ 70% (11 ข้อขึ้นไป) คุณได้ ${correctCount} ข้อ ลองทบทวนในแท็บสรุปบทเรียนแล้วลองใหม่อีกครั้ง!`;
    certContainer.classList.add('hidden');
    certBtn.classList.add('hidden');
  }

  // Render Explanations
  renderDetailedExplanations();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetailedExplanations() {
  const container = document.getElementById('explanationsList');
  container.innerHTML = examQuestions.map((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = userAns === q.correctAnswer;
    return `
      <div class="p-5 rounded-2xl border ${isCorrect ? 'border-emerald-200 bg-emerald-50/40' : 'border-rose-200 bg-rose-50/40'}">
        <div class="flex items-center justify-between mb-2">
          <span class="text-xs font-bold px-2 py-0.5 rounded-full ${isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'}">
            ข้อที่ ${idx + 1}: ${isCorrect ? 'ตอบถูก ✓' : 'ตอบผิด ✗'}
          </span>
          <span class="text-xs text-slate-400">${q.tag}</span>
        </div>
        <h4 class="font-kanit font-bold text-slate-800 text-sm sm:text-base mb-3">
          ${q.question}
        </h4>
        <div class="text-xs sm:text-sm space-y-1 mb-3">
          <div class="text-slate-600">คำตอบของคุณ: <strong class="${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">${userAns !== undefined ? q.choices[userAns] : 'ไม่ได้ตอบ'}</strong></div>
          ${!isCorrect ? `<div class="text-emerald-700 font-semibold">คำตอบที่ถูกต้อง: <strong>${q.choices[q.correctAnswer]}</strong></div>` : ''}
        </div>
        <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700">
          <span class="font-bold text-amber-700">💡 เฉลยละเอียด:</span> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');
}

function retakeExam() {
  playSound('click');
  document.getElementById('examResultView').classList.add('hidden');
  document.getElementById('examIntroView').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleDetailedExplanations() {
  const el = document.getElementById('detailedExplanationsContainer');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function scrollToCertificate() {
  const el = document.getElementById('certificateContainer');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function printCertificate() {
  window.print();
}

// ==========================================
// 8. APP INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // Populate counters & dictionary
  updateTypeCounts();
  renderCategories();
  renderIdiomCards(IDIOM_DATABASE);

  // Keyboard shortcut to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeIdiomModal();
  });
});
