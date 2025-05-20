import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Lam',
    email: 'lam@lam.com',
    password: bcrypt.hashSync('123456789', 10),
  },
]

const productData: Prisma.ProductCreateInput[] = [
  {
    name: 'Auto Climbing Formwork',
    description:
      'Auto Climbing Formwork คือระบบที่ใช้สำหรับการก่อสร้าง CoreWall รูปแบบใหม่ที่ใช้ระบบไฮดรอลิคในการเคลื่อนย้ายโครงสร้างทั้งระบบขึ้นไปตามโครงสร้างของ Corewall ด้วยตัวมันเอง  โดยไม้แบบที่ใช้ในระบบจะเป็นไม้แบบเหล็กที่มีความแข็งแรงและพื้นผิวที่ดี พื้นผิวของผนัง Corewall จึงออกมาสวยงาม  นอกจากนี้ยังมีขั้นตอนสำหรับการปรับแนวดิ่งทุกครั้งก่อนการเทคอนกรีตเพื่อป้องกันการล้มดิ่ง',
    images: {
      create: [
        {
          url: 'products/AutoClimbingFormwork/1.jpg',
        },
        {
          url: 'products/AutoClimbingFormwork/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Auto Climbing Protection',
    description:
      'Auto Climbing Protection คือระบบป้องกันความปลอดภัยที่ติดตั้งรอบโครงสร้างอาคาร สามารถปรับระดับขึ้นลงตามความคืบหน้าของงานก่อสร้างได้อย่างมีประสิทธิภาพ โครงสร้างของตัว Protection นี้มีความแข็งแรงและมั่นคง เปลี่ยนพื้นที่ทำงานบนตึกให้เป็นพื้นที่ปิดรอบด้านเพื่อเพิ่มความปลอดภัย และยังสามารถแบ่งส่วนที่จะเลื่อนขึ้นได้ตามลำดับขั้นของการก่อสร้าง ซึ่งสิ่งเหล่านี้ช่วยตอบสนองความต้องการด้านความปลอดภัย ความสวยงาม และความต่อเนื่องของงาน ด้วยคุณสมบัติที่เรียบง่าย และใช้งานสะดวก',
    images: {
      create: [
        {
          url: 'products/AutoClimbingProtection/1.jpg',
        },
      ],
    },
  },
  {
    name: 'Dust Detector',
    description:
      'Dust Detector หรือ เครื่องตรวจวัดฝุ่น คืออุปกรณ์ตรวจวัดฝุ่นพร้อมหน้าจอแสดงผล ที่สามารถแสดงผลได้แบบ Real time โดยค่าที่สามารถวัดผลได้นั้นจะมี\n1. วันที่และเวลา\n2. PM 2.5\n3. PM 10\n4. อุณหภูมิ\n5. ความดังเสียง (dB)\n6. ความชื้นสัมพัทธ์',
    images: {
      create: [
        {
          url: 'products/DustDetector/1.png',
        },
      ],
    },
  },
  {
    name: 'Framepro',
    description:
      'Framepro คือไม้แบบเหล็กกล้าอเนกประสงค์ที่มีน้ำหนักเบาเพียง 30 kg/m2  กรุด้วยไม้อัด 15 mm สามารถนำไปใช้ได้ตั้งแต่งานกำแพง งานเสา (สามารถปรับขนาดได้ทุก 5 cm) งาน Footing รวมถึงนำไปใช้งานคานได้\nขนาดของ Standard Panel คือ\nกว้าง: 900mm, 750mm, 600mm, 450mm, 300mm\nสูง: 3000mm, 2700mm, 1500mm, 1200mm',
    images: {
      create: [
        {
          url: 'products/Framepro/1.jpg',
        },
        {
          url: 'products/Framepro/2.jpg',
        },
        {
          url: 'products/Framepro/3.jpg',
        },
        {
          url: 'products/Framepro/4.jpg',
        },
        {
          url: 'products/Framepro/5.jpg',
        },
        {
          url: 'products/Framepro/6.jpg',
        },
      ],
    },
  },
  {
    name: 'Industrial Sweeper',
    description:
      'Industrial Sweeper หรือ รถดูดฝุ่นไฟฟ้า นั้นกวาดสะอาด รวดเร็ว เงียบและมีประสิทธิภาพสูง สามารถกวาดได้ถึง 10000 ㎡ ต่อชั่วโมง เทียบเท่ากับแรงงาน 8-10 คน แต่ใช้คนขับเพียง 1 คนให้ผลลัพธ์ที่สะอาดหมดจด  ใช้งานต่อเนื่องได้นาน 4-6 ชั่วโมงต่อการชาร์จเต็ม 1 ครั้ง\nรองรับการทำความสะอาดได้อย่างครอบคลุม ไม่ว่าจะเป็นฝุ่น เศษขยะ ใบไม้ หรือสิ่งสกปรกต่างๆ',
    images: {
      create: [
        {
          url: 'products/IndustrialSweeper/1.jpg',
        },
      ],
    },
  },
  {
    name: 'Mesh Sheet',
    description:
      'Mesh Sheet หรือ ผ้าใบกันฝุ่น ใช้สำหรับงานคลุมอาคารที่กำลังก่อสร้าง เพื่อป้องกันฝุ่นละออง และเศษวัสดุตกหล่นร่วงออกมานอกอาคาร โดยตาข่ายกันฝุ่นนี้ มีรูพรุนลมจึงผ่านได้นั่งร้านจะไม่ล้ม ในขณะเดียวกันก็ช่วยป้องกันฝุ่น ไม่ให้ฟุ้งกระจาย หรือหลุดรอดไปได้',
    images: {
      create: [
        {
          url: 'products/MeshSheet/1.jpg',
        },
        {
          url: 'products/MeshSheet/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Passenger Hoist Protective Door',
    description:
      'ประตูลิฟต์สำหรับติดตั้งทั้งภายในและภายนอกอาคารในบริเวณที่ใช้ลิฟท์โดยสาร Passenger Hoist เพื่อเพิ่มความปลอดภัยในการทำงาน โดยวัสดุทำจากเหล็กแผ่นและมีความทนทานที่ดี',
    images: {
      create: [
        {
          url: 'products/PassengerHoistProtectiveDoor/1.jpg',
        },
      ],
    },
  },
  {
    name: 'Prop Panel',
    images: {
      create: [
        {
          url: 'products/PropPanel/0.png',
        },
      ],
    },
    childrenProducts: {
      create: [
        {
          name: 'Early Dismantle Panel',
          description:
            'Early Dismantle Panel คือ ระบบ Prop Panel หรือแบบหล่อพื้นคอนกรีตที่มีระบบค้ำยันสำหรับใช้ในการ Support โครงสร้างเพื่อความปลอดภัยในการก่อสร้าง แต่จุดเด่นที่สำคัญคือการที่ Prop panel รุ่นนี้ สามารถถอด Panel ออกมาเพื่อนำไปใช้บริเวณอื่นได้โดยที่ไม่จำเป็นต้องเคลื่อนย้าย Prop ออกมาก่อน\n• สามารถใช้งานเทคอนกรีตพื้นตั้งแต่ชั้น 1 ขึ้นไป ทำให้การทำงาน สะดวก รวดเร็ว\n• ส่วนที่ทำการค้ำยันเรียกว่า Prop\n• แผ่นแบบหล่อวัสดุเป็นอลูมิเนียมทำให้นัำหนักเบาและแข็งแรง ใช้รองรับน้ำหนักการเทคอนกรีต เรียกว่า Panel\n• หากต้องการใช้งานในบริเวณที่สูงเกินกว่าที่ Prop จะใช้ได้ สามารถใช้นั่งร้านระบบ Ringlock ร่วมกับระบบ Early Drop Panel ได้ โดยจะต้องใช้ Adapter ในการใช้งาน',
          images: {
            create: [
              {
                url: 'products/PropPanel/EarlyDismantlePanel/0.jpg',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/1.png',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/2.png',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/3.png',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/4.jpg',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/5.png',
              },
              {
                url: 'products/PropPanel/EarlyDismantlePanel/6.jpg',
              },
            ],
          },
        },
        {
          name: 'Quick Form',
          description:
            'Quick Form คือ ระบบ Prop Panel หรือแบบหล่อพื้นคอนกรีตที่มีระบบค้ำยันสำหรับใช้ในการ Support โครงสร้างเพื่อความปลอดภัยในการก่อสร้าง\n• สามารถใช้งานเทคอนกรีตพื้นตั้งแต่ชั้น 1 ขึ้นไป ทำให้การทำงาน สะดวก รวดเร็ว\n• ส่วนที่ทำการค้ำยันเรียกว่า Prop\n• แผ่นแบบหล่อวัสดุเป็นอลูมิเนียมทำให้น้ำหนักเบาและแข็งแรง ใช้รองรับน้ำหนักการเทคอนกรีต เรียกว่า Panel\n• หากต้องการใช้งานในบริเวณที่สูงเกินกว่าที่ Prop จะใช้ได้ สามารถใช้นั่งร้านระบบ Ring lock ร่วมกับระบบ Quick Form ได้เลย',
          images: {
            create: [
              {
                url: 'products/PropPanel/QuickForm/0.jpg',
              },
              {
                url: 'products/PropPanel/QuickForm/1.jpg',
              },
              {
                url: 'products/PropPanel/QuickForm/2.png',
              },
              {
                url: 'products/PropPanel/QuickForm/3.jpg',
              },
              {
                url: 'products/PropPanel/QuickForm/4.jpg',
              },
              {
                url: 'products/PropPanel/QuickForm/5.png',
              },
              {
                url: 'products/PropPanel/QuickForm/6.jpg',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Ringlock',
    images: {
      create: [
        {
          url: 'products/Ringlock/0.png',
        },
      ],
    },
    childrenProducts: {
      create: [
        {
          name: 'Base Collar',
          description:
            'Base Collar เป็นอุปกรณ์นั่งร้านระบบลิ่มล็อค ใช้สำหรับเสริมความสูง ของนั่งร้านลิ่มล็อค เพื่อต่อยึดเข้ากับคานนอน ผลิตจากท่อเหล็กชุบกัลวาไนซ์ เหมาะสำหรับงานพื้นที่สูงและหนา รองรับการหล่อคาน,เสาอาคารโครงสร้างขนาดใหญ่ หรือนำมาใช้ทำ นั่งร้าน Protection รอบตึกเพื่อขึงกับ Meshsheets\nมีขนาดดังนี้:\n- Base Collar Ø 48.3 มม\n- Base Collar Ø 60.3 มม',
          images: {
            create: [
              {
                url: 'products/Ringlock/1.png',
              },
            ],
          },
        },
        {
          name: 'Basejack',
          description:
            'Basejack หรือฐานปรับระดับล่างใช้งานร่วมกับ Standard เพื่อรองรับน้ำหนักและปรับความสูงให้ได้ระดับที่ต้องการ\nมีขนาดดังนี้:\n- U-Head Ø 48.3 มม',
          images: {
            create: [
              {
                url: 'products/Ringlock/2.png',
              },
            ],
          },
        },
        {
          name: 'Diagonal Brace',
          description:
            'Diagonal Brace เป็นอุปกรณ์นั่งร้านระบบ Ringlock ใช้สำหรับยึดโครงนั่งร้าน Ringlock ไม่ให้เอนเอียง เพิ่มความมั่นคง ความแข็งแรง ผลิตจากท่อเหล็กชุบกัลวาไนซ์เหมาะสำหรับงานพื้นที่สูงและหนา รองรับการหล่อคาน,เสาอาคารโครงสร้างขนาดใหญ่\nมีขนาดดังนี้:\n- Diagonal Brace Ø 48.3 มม\n- Diagonal Brace Ø 60.3 มม',
          images: {
            create: [
              {
                url: 'products/Ringlock/3.png',
              },
            ],
          },
        },
        {
          name: 'Ledger (Horizontal)',
          description:
            'Ledger(Horizontal) เป็นอุปกรณ์นั่งร้านระบบ Ringlock ใช้สำหรับยึดขาตั้งเข้าด้วยกัน และใช้วางพาดแผ่นทางเดิน และบันได ผลิตจากท่อเหล็กชุบกัลวาไนซ์ เเหมาะสำหรับงานพื้นที่สูงและหนา รองรับการหล่อคาน,เสาอาคารโครงสร้างขนาดใหญ่ หรือนำมาใช้ทำ นั่งร้าน Protection รอบตึกเพื่อขึงกับ Meshsheets\nมีขนาดดังนี้:\n- Ledger Ø 48.3 มม\n- Ledger Ø 60.3 มม',
          images: {
            create: [
              {
                url: 'products/Ringlock/4.png',
              },
            ],
          },
        },
        {
          name: 'Staircase',
          description: 'Staircase หรือบันได ใช้เพื่อเดินขึ้น-ลง และทำงานในพื้นที่สูงพาดกับขานั่งร้านระบบ Ringlock',
          images: {
            create: [
              {
                url: 'products/Ringlock/5.png',
              },
            ],
          },
        },
        {
          name: 'Standard (Vertical)',
          description:
            'Standard เป็นอุปกรณ์นั่งร้านระบบ Ringlock ใช้เป็นเสาหลักรับคานนอน ผลิตจากท่อเหล็กชุบกัลวาไนซ์ เหมาะสำหรับงานพื้นที่สูงและหนา รองรับการหล่อคาน, เสาอาคารโครงสร้างขนาดใหญ่ หรือนำมาใช้ทำ นั่งร้าน Protection รอบตึกเพื่อขึงกับ Meshsheets\nมีขนาดดังนี้:\n- Standard Ø 48.3 มม เหมาะกับงานรับพื้นความหนา30- 60ซม. ,โครงสร้างงานเวทีที่รับน้ำหนักไม่มี\n- Standard Ø 60.3 มม เหมาะกับงานก่อสร้างสะพาน การหล่อคานและเสาขนาดใหญ่',
          images: {
            create: [
              {
                url: 'products/Ringlock/6.png',
              },
            ],
          },
        },
        {
          name: 'U-Head',
          description:
            'U-Head หรือฐานปรับระดับบนใช้งานร่วมกับ Standard ใช้ค้ำยันเพื่อปรับความสูงในการเทพื้น,คาน\nมีขนาดดังนี้:\n- U-Head Ø 48.3 มม',
          images: {
            create: [
              {
                url: 'products/Ringlock/7.png',
              },
            ],
          },
        },
        {
          name: 'Walking Platform',
          description:
            'Walking Platform หรือ แผ่นทางเดินนั่งร้าน คืออุปกรณ์เสริมสำหรับใช้ในงานก่อสร้างบนพื้นที่สูงควบคู่กับนั่งร้านระบบ Ringlock เพื่อความสะดวกและปลอดภัยในการเดินหรือนั่งบนนั่งร้าน',
          images: {
            create: [
              {
                url: 'products/Ringlock/8.png',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Soundproof',
    description:
      'Soundproof หรือ แผ่นกันเสียง คือแผ่น PVC ผสม Polyester ความหนาแน่นสูง มีคุณสมบัติไม่ลามไฟ ลดเสียงได้ 10 -15 db พร้อมรูตาไก่\nมีขนาดดังนี้:\n- 1.8 x 3.4 ม\n- 1.8 x 5.1 ม\n- 1.8 x 6.0 ม',
    images: {
      create: [
        {
          url: 'products/Soundproof/1.jpg',
        },
        {
          url: 'products/Soundproof/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Wheel Washing Machine',
    description:
      'Wheel Washing Machine หรือ เครื่องล้างล้ออัตโนมัติ  คืออุปกรณ์สำหรับล้างทำความสะอาดล้อรถที่ออกจากไซต์งานก่อสร้างอัตโนมัติ  โดยใช้เวลาเพียง 1 นาทีต่อการล้างล้อ 1 คู่ และน้ำที่ใช้ล้างนั้น จะรีไซเคิลเพื่อกลับมาใช้ล้างรถคันถัดไปได้',
    images: {
      create: [
        {
          url: 'products/WheelWashingMachine/1.png',
        },
      ],
    },
  },
]

const projectData: Prisma.ProjectCreateInput[] = [
  {
    name: 'AIA Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 2,
        },
        {
          productId: 4,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/AIA/1.jpg',
        },
        {
          url: 'projects/AIA/2.jpg',
        },
        {
          url: 'projects/AIA/3.jpg',
        },
        {
          url: 'projects/AIA/4.jpg',
        },
      ],
    },
  },
  {
    name: 'Avary Factory Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 11,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/Avary/1.jpg',
        },
        {
          url: 'projects/Avary/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Dusit Central Park Project',
    description: 'ผู้รับเหมา : บริษัท ฤทธา จำกัด',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 2,
        },
        {
          productId: 7,
        },
        {
          productId: 11,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/DusitCentralPark/1.jpg',
        },
        {
          url: 'projects/DusitCentralPark/2.jpg',
        },
        {
          url: 'projects/DusitCentralPark/3.jpg',
        },
        {
          url: 'projects/DusitCentralPark/4.jpg',
        },
      ],
    },
  },
  {
    name: 'Grand Center Point',
    description: 'ผู้รับเหมา : บริษัท ฤทธา จำกัด',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 10,
        },
        {
          productId: 11,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/GrandCenterPoint/1.jpg',
        },
      ],
    },
  },
  {
    name: 'Grand Center Point Pattaya 3',
    description: 'ผู้รับเหมา : บริษัท พรีบิลท์ จำกัด (มหาชน)',
    projectProducts: {
      create: [
        {
          productId: 2,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/GrandCenterPointPattaya3/1.jpg',
        },
        {
          url: 'projects/GrandCenterPointPattaya3/2.jpg',
        },
      ],
    },
  },
  {
    name: 'King Square Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 2,
        },
        {
          productId: 7,
        },
        {
          productId: 9,
        },
        {
          productId: 11,
        },
        {
          productId: 20,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/KingSquare/1.jpg',
        },
        {
          url: 'projects/KingSquare/2.jpg',
        },
        {
          url: 'projects/KingSquare/3.jpg',
        },
        {
          url: 'projects/KingSquare/4.jpg',
        },
        {
          url: 'projects/KingSquare/5.jpg',
        },
        {
          url: 'projects/KingSquare/6.jpg',
        },
      ],
    },
  },
  {
    name: 'Muniq Langsuan Project',
    description: 'ผู้รับเหมา : บริษัท กรณิศ ก่อสร้าง จำกัด',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/MuniqLangsuan/1.jpg',
        },
        {
          url: 'projects/MuniqLangsuan/2.jpg',
        },
      ],
    },
  },
  {
    name: 'One Bangkok O1AH1 Building Project',
    description: 'ผู้รับเหมา : บริษัท พรีบิลท์ จำกัด (มหาชน)',
    projectProducts: {
      create: [
        {
          productId: 2,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/OneBangkokO1AH1Building/1.jpg',
        },
      ],
    },
  },
  {
    name: 'One Bangkok O2 Building Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 2,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/OneBangkokO2Building/1.jpg',
        },
        {
          url: 'projects/OneBangkokO2Building/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Park Nailert Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 2,
        },
        {
          productId: 10,
        },
        {
          productId: 11,
        },
        {
          productId: 20,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/ParkNailert/1.jpg',
        },
        {
          url: 'projects/ParkNailert/2.jpg',
        },
        {
          url: 'projects/ParkNailert/3.jpg',
        },
        {
          url: 'projects/ParkNailert/4.jpg',
        },
      ],
    },
  },
  {
    name: 'Park Origin Thonglor Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 2,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/ParkOriginThonglor/1.jpg',
        },
        {
          url: 'projects/ParkOriginThonglor/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Park Silom Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/ParkSilom/1.jpg',
        },
      ],
    },
  },
  {
    name: 'Queen Sirikit Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 10,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/QueenSirikit/1.jpg',
        },
        {
          url: 'projects/QueenSirikit/2.jpg',
        },
      ],
    },
  },
  {
    name: 'Siam Meal Project',
    description: 'ผู้รับเหมา : บริษัท นันทวัน จำกัด (THAI OBAYASHI)',
    projectProducts: {
      create: [
        {
          productId: 10,
        },
        {
          productId: 11,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/SiamMeal/1.jpg',
        },
        {
          url: 'projects/SiamMeal/2.jpg',
        },
      ],
    },
  },
  {
    name: 'YPM9 Project',
    description: 'ผู้รับเหมา : บริษัท กรณิศ ก่อสร้าง จำกัด',
    projectProducts: {
      create: [
        {
          productId: 1,
        },
        {
          productId: 6,
        },
      ],
    },
    images: {
      create: [
        {
          url: 'projects/YPM9/1.jpg',
        },
        {
          url: 'projects/YPM9/2.jpg',
        },
      ],
    },
  },
]

export async function main() {
  await prisma.user.createMany({ data: userData })
  for (const product of productData) {
    await prisma.product.create({ data: product })
  }
  for (const project of projectData) {
    await prisma.project.create({ data: project })
  }
}

main()
