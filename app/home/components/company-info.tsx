import Image from 'next/image'
import { FC } from 'react'

export const CompanyInfo: FC = () => {
  return (
    <div className="flex w-full items-center justify-center bg-white px-10 py-10">
      <div className="mr-2 flex w-2/5 items-center justify-center">
        <Image src={'/Head_Office.jpg'} alt={'Head office'} width={600} height={600} />
      </div>

      <div className="w-2/5 overflow-hidden indent-10 text-lg">
        <div>
          <p>
            บริษัท ดับเบิลเอ เอสพี จำกัด ได้ก่อตั้งขึ้นในปี พ.ศ. 2560
            โดยทีมบริหารที่มีความเชี่ยวชาญในด้านการก่อสร้างมากว่า 25ปี
            ด้วยความมุ่งมั่นที่จะให้บริการและจัดจำหน่ายแบบหล่อคอนกรีตประเภทต่างๆ
            รวมถึงไปนั่งร้านและอุปกรณ์ต่างๆที่ช่วยในการก่อสร้างอย่างมืออาชีพ
            เพื่อช่วยให้งานของคุณเร็วขึ้นกว่าการใช้อุปกรณ์ก่อสร้างทั่วไป และมีคุณภาพในทุกขั้นตอนของโครงการ
            ด้วยราคาที่สมเหตุสมผล
          </p>

          <br />

          <p>
            นอกจากนี้ เรายังบริการให้คำแนะนำออกแบบพื้นที่ใช้งานจริง เพื่อประเมินราคา สอนติดตั้งและการใช้งานที่หน้างาน
            มีรายการคำนวณ ที่รับรองโดยสามัญวิศวกร
          </p>
        </div>
      </div>
    </div>
  )
}
