import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Lam',
    email: 'lam@lam.com',
    password: '$2a$12$8i4QALhUGSo3wFflCfTeDONAQQPcE353sfDdw5DM3d5EfFnDgcjVO',
  },
]

const productCategoryData: Prisma.ProductCategoryCreateInput[] = [
  {
    name: 'Auto Climbing Formwork',
    products: {
      create: [
        {
          name: 'Auto Climbing Formwork',
          description:
            'Auto Climbing Formwork คือระบบที่ใช้สำหรับการก่อสร้าง CoreWall รูปแบบใหม่ที่ใช้ระบบไฮดรอลิคในการเคลื่อนย้ายโครงสร้างทั้งระบบขึ้นไปตามโครงสร้างของ Corewall ด้วยตัวมันเอง  โดยไม้แบบที่ใช้ในระบบจะเป็นไม้แบบเหล็กที่มีความแข็งแรงและพื้นผิวที่ดี พื้นผิวของผนัง Corewall จึงออกมาสวยงาม  นอกจากนี้ยังมีขั้นตอนสำหรับการปรับแนวดิ่งทุกครั้งก่อนการเทคอนกรีตเพื่อป้องกันการล้มดิ่ง',
          images: {
            create: [
              {
                url: '/products/AutoClimbingFormwork/1.jpg',
              },
              {
                url: '/products/AutoClimbingFormwork/2.jpg',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Auto Climbing Protection',
    products: {
      create: [
        {
          name: 'Auto Climbing Protection',
          description:
            'Auto Climbing Protection คือระบบป้องกันความปลอดภัยที่ติดตั้งรอบโครงสร้างอาคาร สามารถปรับระดับขึ้นลงตามความคืบหน้าของงานก่อสร้างได้อย่างมีประสิทธิภาพ โครงสร้างของตัว Protection นี้มีความแข็งแรงและมั่นคง เปลี่ยนพื้นที่ทำงานบนตึกให้เป็นพื้นที่ปิดรอบด้านเพื่อเพิ่มความปลอดภัย และยังสามารถแบ่งส่วนที่จะเลื่อนขึ้นได้ตามลำดับขั้นของการก่อสร้าง ซึ่งสิ่งเหล่านี้ช่วยตอบสนองความต้องการด้านความปลอดภัย ความสวยงาม และความต่อเนื่องของงาน ด้วยคุณสมบัติที่เรียบง่าย และใช้งานสะดวก',
          images: {
            create: [
              {
                url: '/products/AutoClimbingProtection/1.jpg',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Dust Detector',
    products: {
      create: [
        {
          name: 'Dust Detector',
          description:
            'Dust Detector หรือ เครื่องตรวจวัดฝุ่น คืออุปกรณ์ตรวจวัดฝุ่นพร้อมหน้าจอแสดงผล ที่สามารถแสดงผลได้แบบ Real time โดยค่าที่สามารถวัดผลได้นั้นจะมี\n1. วันที่และเวลา\n2. PM 2.5\n3. PM 10\n4. อุณหภูมิ\n5. ความดังเสียง (dB)\n6. ความชื้นสัมพัทธ์',
          images: {
            create: [
              {
                url: '/products/DustDetector/1.png',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Framepro',
    products: {
      create: [
        {
          name: 'Framepro',
          description:
            'Framepro คือไม้แบบเหล็กกล้าอเนกประสงค์ที่มีน้ำหนักเบาเพียง 30 kg/m2  กรุด้วยไม้อัด 15 mm สามารถนำไปใช้ได้ตั้งแต่งานกำแพง งานเสา (สามารถปรับขนาดได้ทุก 5 cm) งาน Footing รวมถึงนำไปใช้งานคานได้\nขนาดของ Standard Panel คือ\nกว้าง: 900mm, 750mm, 600mm, 450mm, 300mm\nสูง: 3000mm, 2700mm, 1500mm, 1200mm',
          images: {
            create: [
              {
                url: '/products/Framepro/1.jpg',
              },
              {
                url: '/products/Framepro/2.jpg',
              },
              {
                url: '/products/Framepro/3.jpg',
              },
              {
                url: '/products/Framepro/4.jpg',
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'Prop Panel',
    products: {
      create: [
        {
          name: 'Early Dismantle Panel',
          description:
            'Early Dismantle Panel คือ ระบบ Prop Panel หรือแบบหล่อพื้นคอนกรีตที่มีระบบค้ำยันสำหรับใช้ในการ Support โครงสร้างเพื่อความปลอดภัยในการก่อสร้าง แต่จุดเด่นที่สำคัญคือการที่ Prop panel รุ่นนี้ สามารถถอด Panel ออกมาเพื่อนำไปใช้บริเวณอื่นได้โดยที่ไม่จำเป็นต้องเคลื่อนย้าย Prop ออกมาก่อน\n• สามารถใช้งานเทคอนกรีตพื้นตั้งแต่ชั้น 1 ขึ้นไป ทำให้การทำงาน สะดวก รวดเร็ว\n• ส่วนที่ทำการค้ำยันเรียกว่า Prop\n• แผ่นแบบหล่อที่ใช้รองรับน้ำหนักการเทคอนกรีต เรียกว่า Panel\n• หากต้องการใช้งานในบริเวณที่สูงเกินกว่าที่ Propจะใช้ได้ สามารถใช้นั่งร้านระบบ Ringlock ร่วมกับระบบ Early Drop Panel ได้ โดยจะต้องใช้ Adapter ในการใช้งาน',
          images: {
            create: [
              {
                url: '/products/PropPanel/EarlyDismantlePanel/0.jpg',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/1.png',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/2.png',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/3.png',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/4.jpg',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/5.png',
              },
              {
                url: '/products/PropPanel/EarlyDismantlePanel/6.jpg',
              },
            ],
          },
        },
      ],
    },
  },
]

export async function main() {
  await prisma.user.createMany({ data: userData })
  for (const productCategory of productCategoryData) {
    await prisma.productCategory.create({ data: productCategory })
  }
}

main()
