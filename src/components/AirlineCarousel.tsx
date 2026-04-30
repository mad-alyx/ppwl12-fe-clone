import React, { useState } from 'react';

export const AirlineCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // DATA MASKAPAI (Diekstrak lengkap dari Outer HTML)
  const partners = [
    // Slide 1 (IndiGo sampai Vistara)
    { name: "IndiGo", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/089399f1-0d8b-4748-8a98-2f3a21437dd1-1724872764365-951c2058c6fe0c9b0f3b4989a71983c5.jpg" },
    { name: "Air India", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/f7157cd7-f421-48ae-aa48-fa1165854029-1724872690562-c7a0ec679bcc0c78ef3d562c1ea6dbd7.jpg" },
    { name: "Hawaiian Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/05f12276-5cd9-40bf-91a2-e052647d9edb-1608152610422-03f2ebf9acc3084c18386f03dea9396b.png" },
    { name: "Loong Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/12/08/284fdc3b-a523-4ccf-832e-8131e5ff75d1-1765179416919-b44641f41d3d5c2fa122824e88b0801c.png" },
    { name: "Asiana Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/03/22/b320d87b-7fb8-44f3-ae90-0cf41f3decef-1742620467934-d9e6e249965f3e97f57024d8850dcfc7.jpg" },
    { name: "Philippine Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/496ff9ec-a3aa-4082-913e-3d135a4f8f33-1608153199958-227455f5642dca12beaf159c76afc8c3.png" },
    { name: "Transavia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/c23109aa-72d7-4eb2-99cd-53a0e2853c1f-1731978133609-22cb965e21e94804f0226c94c20d6efd.png" },
    { name: "Qantas Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/11/8bcb4e34-1b7e-417b-aee4-c91fbb3a67bc-1731310616271-44c6273febb0a52ae0a8b04bc43a272b.jpg" },
    { name: "Scandinavian Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/35bfdad2-d046-4e30-9f63-84290bc620ad-1724872388808-93374d95db75ff8a4d636cf46f3b0499.png" },
    { name: "Scoot", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/a3b5c72f-c39a-4eef-96b9-d884859dceee-1608153360547-cf87cdb43781555c5cde7a3c9149af45.png" },
    { name: "LUCKY AIR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/10/01/cc13d7a6-34cf-4d74-aba2-47f4b77bf61d-1727757963604-1fb92c20c95e49c2524ec07d23a7fa47.png" },
    { name: "Jetblue Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2021/08/18/c4534334-2f45-4a24-a5fc-e80412f94b5b-1629220313602-f623267570cc1e3b5ef80fecdfb73e8f.png" },
    { name: "LATAM AIRLINES GROUP", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/ef661ba0-83e5-4996-bec2-68215fb3ae3c-1731977194903-02680084442e4153fe744d6efa51beb4.png" },
    { name: "Himalaya Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/05/26/cac3d20d-d2e7-40fa-88f2-312450b45401-1685041682742-b64b10bdd2e6cd0df72cf51c5d7f0683.png" },
    { name: "Vistara", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2021/02/16/7b66b972-0e8d-4f44-ab02-8fc7abbfecaa-1613460238429-ca2d219ddc2af0287b8b9ccaeba6299d.jpg" },
    { name: "West Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/08/05/d2b0b568-f54f-4ad6-a656-680586747535-1754383124924-6e773a019551e413d268585b2e1b15bc.jpg" },
    { name: "Ryanair UK", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/7943a253-ddd8-414d-a6dd-156f7d5619af-1731978927616-a54b95349e051c0d0cce78aa2314cd22.jpg" },
    { name: "T'Way Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/05/26/67f4d143-163f-4c57-a9b0-9c7506e98212-1685041499123-42893def1f02382e3a01c46467d25c3f.png" },
    { name: "SKYMARK AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/d2f09782-ca04-487d-9806-183d47797e94-1731978528384-6bd0dd6a87cdd573a76a3fd5775c08f9.png" },
    { name: "Aegean Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/9fa6d4c2-326d-4a8b-8f55-551797bbb4dc-1724871489098-3cb19e548435895614d85f972b4d183b.png" },
    { name: "Aeromexico", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/671915ea-1186-4d19-8ccc-521651bee6f9-1608001506403-dd2fe2b37195844c5993757cddbc1b99.png" },
    { name: "Nok Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/01/21/19507d05-cae6-4038-8e17-745b0d3e1f04-1642739905625-e9356c103d1bb83c8d464c03bc5d40cc.png" },
    { name: "AirAsia Cambodia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/03/22/3259aca4-3fc4-4b73-9670-a1b0e5e41c88-1711088361527-4b92ffa9a51d06569a0913af1b22b0a0.png" },
    { name: "Lanmei Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/05/26/2e6e26ea-b4c7-489a-8061-e7ca684845e0-1685041226880-e449415df38522ed84dc67111b264a53.png" },

    // Slide 2 (Air New Zealand sampai Singapore Airlines)
    { name: "Air New Zealand", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/ef875be6-f92c-4101-8212-0de35304a229-1608153066017-fa9e41779b4596b1fc8b4cfefdad5adc.png" },
    { name: "Austrian Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/36d4b006-88a3-4f8b-b8cb-8b8964eaaec8-1608007941732-5048cd95fd01daff5139b0bab657d05d.png" },
    { name: "Singapore Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/4f2bec52-f9d8-4fb5-812e-b48f2f55df1e-1608153297684-a3d7e8de8c9928c1e2fde84c53c98c80.png" },
    { name: "MYWAY AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/0dd3504e-6168-41df-b331-65ccc617d4ad-1608007545901-49765ffd001ea06958586b6eb66e6391.png" },
    { name: "Royal Brunei Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/fdfd4417-3ac7-44f2-8028-00dbf55e5ee4-1608152189016-2afe39f500f648ca6179bd7d2a366b00.png" },
    { name: "AIR BALTIC", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/6b2e2f4b-83f8-484d-a784-72d2f7781245-1731945283556-7bd71f3882ec7934c0dbea37b23167c9.png" },
    { name: "CONDOR FLUGDIENST", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/08f102d4-ad7a-4e6a-8e3f-c629ef0ed469-1731945354765-d1b36b2f69a3d42bc3708c482ac33dab.png" },
    { name: "Hong Kong Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/9b0a96ab-a0de-46a9-b24e-01df9c3978a5-1608152625458-a795bac7b4b372718ac44b6f9427ff30.png" },
    { name: "CHINA UNITED AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/9451d1c8-6609-4ae9-b1c3-0cf4b131f4b5-1731978690313-92c072e3acab0d41b7a50edf7ad9b658.png" },
    { name: "Wings Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/4f2ebba8-1f1c-45b3-8bcb-4a85550672d0-1608152701227-37b2066c2544a688c2fee554bba6fe2d.png" },
    { name: "NAM Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/25138da4-9c51-45f6-aaaa-8824c7df00eb-1608152686757-c3c6c662a93e1b599e001ac03c086fa4.png" },
    { name: "MIDDLE EAST AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/23d3f0c1-d142-44a6-91b4-a4fb87e42d66-1731977269497-8aa8afc0ade752bc7ac1bfd117b074ae.png" },
    { name: "Air Japan", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/27599304-9032-4909-ac72-500a3bfa5537-1722840384309-3c6988865232fe4acdab09d2f6a25b01.png" },
    { name: "Thai Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/aefc3576-0af8-4b0e-94a6-14621e19e254-1608153326395-f6b0470887819ec9021b16e0bf7f713e.png" },
    { name: "AIR EUROPA", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/2ac525d9-2d6a-4731-b0f1-844cd702ce19-1608011665251-1ba1fb0436a385abaeab9aa19d5dae78.png" },
    { name: "Turkish Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/06/24/612b1064-47df-4a1c-af84-f236282d47d1-1656058750335-9664bf50f39b6efacdf570b416dcff94.jpg" },
    { name: "MANDARIN AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/aee18d15-159b-495b-9eac-e1a61bc1f128-1731945123137-a6f49be3da6c9841ae0deefac5e4880c.png" },
    { name: "EVA Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/9c879fe5-9508-4151-b816-58f431428c5f-1608152223080-b5fddecc9fcde0ce463e6a701c47be22.png" },
    { name: "Garuda Indonesia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/884009ae-b512-478a-9c3d-f4dbf22386eb-1608152537048-0c289e6d3a1bcb518efdd93be5ae139c.png" },
    { name: "HAHN AIR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/b56cdeb9-ad06-480a-9389-176aec72b7a5-1608002597855-facdd12f6e362dcc1d52e664b830e508.png" },
    { name: "All Nippon Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/03/08/348b917d-bcdf-4c1d-807e-cb4224223b90-1678253861951-95c8fe5c179e0f0fcc74fe329b8dca1c.png" },
    { name: "SIBERIA AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/c16aaba6-16aa-4019-877a-82716e7cdc72-1731977793670-cf82f82a0341b57dff79be28332eb4d1.png" },
    { name: "UKRAINE INTERNATIONAL", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/f68e944a-f309-46f7-8951-faefa8e34496-1608008251572-f871286d460c0a29e89e34cf27e7bcce.png" },
    { name: "Lao Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/8e5c452a-c614-428a-a1e2-45b545a0326c-1608008500947-855e7e308f9eac9e7213bb1ddf4cd049.png" },

    // Slide 3 (British Airways sampai Eastar Jet)
    { name: "British Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/a86b5439-d4fe-41aa-b099-c8d82accd13d-1608152170334-428ee3e085ca96a77b5e2c28c4b329b5.png" },
    { name: "Air Busan", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/08/11/727530d2-060f-4db4-91cc-af1711a304b3-1660152986505-21a658f75f92ca5ffdd3463c45637d7b.png" },
    { name: "AirAsia X Berhad", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/01/06/6b3b29b8-cc04-4cea-b9a2-2a3ee698649d-1673005899884-d72b0a36ec59088a4a1dfc6ecf6b350e.jpg" },
    { name: "FLYADEAL", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/6180c322-558b-4758-87da-2c31ac71e550-1731945697320-32b7f8b54ea99c45f7e08117037f50b6.png" },
    { name: "Batik Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/4d7fa58c-a41f-4424-a599-7a2ccd27f270-1608152644158-75f5ada3c1800a50a7ba02a56ae2603b.png" },
    { name: "THAI AirAsia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/10/12/8fcf9032-783e-4d81-aefc-59d2906cb100-1602473901708-8d6b266fb10ecab80f3539296a90e77b.jpg" },
    { name: "AIR MACAU", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/e0fd3a8e-271f-447a-9a20-a54334dd2ca5-1608153044110-1ebed4695e1f37fb9fe31daeccaf4d09.png" },
    { name: "AIR MADAGASCAR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/73f08521-e5b4-4881-9701-39bf89af9b32-1608152925688-ce15a38fa937a168acb82dcdda2a48fb.png" },
    { name: "HK Express", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/4c343668-ab07-42c5-a4ed-e9d5a77bea86-1722840478771-cc4c4fdc12ffc910300ce6e3411acaf3.png" },
    { name: "TransNusa", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/11/18/d4e8e0be-47bd-4c18-a62c-01cb4966049f-1763459613860-e4627ae2d4250582771cdb643e0f9045.png" },
    { name: "Air France", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/924958eb-c71b-45a9-9489-abe80c71b988-1608152119369-de9de6fba2aab8ef5a693a2af673a0fe.png" },
    { name: "Alaska Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/04/27/3ec7dca7-19c9-4f34-ae0c-f93a84df50d6-1651073664828-1cede27a184a8abde178f42284f5e710.png" },
    { name: "TAAG", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/79057eff-c489-42ff-8483-258e5a167973-1608001670189-a8eeddc4defdd0d7f83aa28d950189ba.png" },
    { name: "Air China", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/620b0f93-571f-4908-a7d4-3484ab6f496b-1608152236728-90089b648176bdddf6e027fe4bcaf0c0.png" },
    { name: "Pobeda", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/10/20/47f7e0d1-287e-4ed6-b274-1c041d9741e0-1760947321745-e0a2e4bd29cb74de719ec519177038d4.jpg" },
    { name: "Hainan Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/806226d7-7d35-4ce1-ad2b-2d27b32bcaf7-1731977059136-403b0288a686e4df627d5306f9852d03.png" },
    { name: "KENYA AIRWAYS", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/b334d4b5-598b-488f-9e11-efae2c38f8fd-1608007319676-713b3c2834e96c94cd1fef8aa54dbba6.png" },
    { name: "Lufthansa", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/d7263adf-71e2-484f-bef9-54401c78333c-1608152870335-b654fc9d685f48fa6d98b6e51de0a1d5.png" },
    { name: "Japan Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/90d7ee34-96c6-4603-be8a-8a18646b63b6-1608152725646-dee407fe660bed1b1ce342b305472879.png" },
    { name: "PORTER AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/8d464c90-c9e8-4970-98a9-cf6a4a9e26ba-1731977443621-14819d9d6dfdf98743e4e57399917478.png" },
    { name: "Air Vanuatu", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/d4d694e7-12f4-45ef-8bf2-8cd2c909418b-1724872139008-32179b558dac8ab28307182953b35fb8.png" },
    { name: "AIR CAIRO", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/5c53e3be-c977-4124-b9b7-c852d767d788-1731977857467-3f9d72323b045e935ed707e50c6a646e.png" },
    { name: "Sriwijaya Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png" },
    { name: "JAPAN TRANSOCEAN AIR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/8630f5d8-691c-46b8-a7c7-85c87572c67f-1731978726987-69a15af2fbcbf2bb61620b0cad35e841.png" },

    // Slide 4 (Cebu Pacific sampai Zipair Tokyo)
    { name: "Cebu Pacific", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/ee7f8405-d71d-4da1-af84-daf29b94b644-1722848250749-4b8af810e92d96076e8d13ca253362c2.png" },
    { name: "Avianca", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/01/21/9e1c74d3-96d9-4087-8624-3476cbe4a4ee-1642739558100-fd7a47cc7401d7444dfb3c8449b23674.png" },
    { name: "AirAsia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/06/25/92f0eed9-d3ef-4511-83c8-c065e97746cc-1750836499054-ce0d03635ffb0eb2e6e28a2809b2c9ba.png" },
    { name: "BLUE PANORAMA", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/c7abb0a6-1bca-4167-b1d4-d1d3ea2e82d1-1731978591856-b21995426c8347410e284ccc1de488ba.png" },
    { name: "AER LINGUS", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/25d9defd-a86e-4bae-8ce1-43cff7c8e8df-1731945629840-ed4655ea2ea2bba1f85ab42332499b61.png" },
    { name: "AIR ARABIA EGYPT", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/02c61457-401f-41f0-bc12-b5ac94c880d2-1731945578177-d04c7a2b1ce65d23d557e996c6ff43e6.png" },
    { name: "Korean Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/06/03/8432714c-b2b3-4f0d-8d41-179c5327ae55-1748923802006-5a511be0f0f9465d9bf10635958b1df9.png" },
    { name: "APG AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/747b8218-5ef5-4a6f-8df2-182b4440c435-1608002443037-6c8c374624292c05a5d8715a3e703934.jpg" },
    { name: "Air Seoul", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/06/21/03216b1c-caa9-4408-a345-e3497d158678-1687283066986-bc6b899e7f6654602bf73ecf0fb86a53.png" },
    { name: "Swiss", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/21a07a44-afdd-4916-98e3-af528954cd0a-1608152910327-82fdfbbca110f28df26f9fe8aa8e6e29.png" },
    { name: "SPRING AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/cb6fcf17-7894-4906-a6c7-f598114d51e4-1731978490425-9943890dda3b4cc860030948d6af1c53.png" },
    { name: "Emirates", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/01/18/807e4d2a-40da-4b82-b388-3684184a3ec0-1674047194348-7e16df154d2abe5ff37047ca41e87ddf.png" },
    { name: "China Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/249e02ba-4566-4078-a84e-899d919c56b8-1608152326329-6175a96a8df97982f65fca038d27cd4d.png" },
    { name: "Frontier Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/12fda463-d3fd-4806-9d72-c3a339058304-1724871700717-893b803ef46e0b57bf0dfdd591697ca3.png" },
    { name: "STARLUX Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/05/06/68923976-b913-4484-91e2-f047b09368bc-1714981738157-0337accb63f3c95284dfe9a15d7daed0.png" },
    { name: "Gol Transportes", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/79b7666e-b639-4014-8544-4d3c1cc8f91d-1724871960809-e366124333b87101270cb50280949a59.jpg" },
    { name: "Qatar Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/dc7c800d-c7bd-452e-a995-033de8d01487-1608153238878-1bc4a7ce106670f49f3fae829f36cef2.png" },
    { name: "Malaysia Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/02/15/a0e34262-48bb-47df-a6fc-e94ca7cffc38-1676438137577-79efb3040ce4639f217fa11f6278d350.png" },
    { name: "EASYJET", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/9458a244-defa-477d-9216-7b640e7db710-1731978209754-d18c4d1b174d2598228b3a0574bcfa1c.png" },
    { name: "Akasa Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/07/25/77d1fe41-d25d-487f-9cc6-fefe14d217e2-1753376910840-e6a7df3520e45644718196d4f10eca7a.jpg" },
    { name: "SICHUAN AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/02/3e20eb6a-c4d0-4597-8ff8-7d79ae4f9642-1722584149524-6d03f465274d7406fa58e8b84c500c92.jpg" },
    { name: "Ethiophian", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/899cfadb-e2b2-4596-b9ec-3f33a181a1f9-1608152451751-43788cd2b2fa3c03300fe717786ae99b.png" },
    { name: "PEACH AVIATION", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/7103114a-61aa-4b91-a244-0f025522f6c6-1731977322224-22f025bcf08d8752ff47d15f8f15f8f4.png" },
    { name: "Bangkok Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/aac19f61-09d0-4e34-99fe-62fd53c13139-1608153184940-7cd4982e2677432e9003f4f7e9f53156.png" },

    // Slide 5 (Oman Air sampai Eastar Jet)
    { name: "Oman Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/9809b2bd-45a2-4daf-92df-58f02f0c25cd-1608153447081-67e7bca8558e557cbbda8a02046ef4d6.png" },
    { name: "Vietnam Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/feda7720-8f70-4282-95a1-bfbd08d7815a-1608153433598-f2cba57310c462b96c2e7bb7a08dbb4a.png" },
    { name: "VIRGIN ATLANTIC", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/fbd0eb9e-47f0-47b6-a34a-38e67dd8fe92-1731978334872-e33845050ecdd7b1cd12a5058c9af820.png" },
    { name: "WestJet", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/c909ad34-e937-493c-95e5-966d5cc6e282-1724873300257-b50cd5d7ea9c4a5a0a7d2d15fc18f587.jpg" },
    { name: "RwandAir", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/5f3bd393-43c0-493f-b5d9-63596cb55898-1731978433443-290555dc4a2a72f030da82ef889b1753.png" },
    { name: "Thai Vietjet", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/12/21/0319f275-6318-420e-aafc-85fa9b366128-1703092523748-ec4447035866fa1c45ef97b197b137c5.jpg" },
    { name: "Aero Dili", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/09/15/3992010d-6aeb-4b35-8230-ab4938b25966-1694766931159-57485860a5f398388b5b2678dfd22e53.png" },
    { name: "Super Air Jet", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2021/07/02/082df819-8a50-4c9d-a178-181258372b74-1625237794501-7572e19a7cdb12996c96b225c3a7efa9.png" },
    { name: "AIR PREMIA", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/06/28/f932c1af-0528-4252-bccb-78ddd8a7ef72-1687939061097-11f7ed1bee3369faaf061ff0f41385f8.png" },
    { name: "Bamboo Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/06/21/f374bbb5-f953-4323-99a0-d21b2e27f38a-1655825675244-b9e8e84d3ddb5432782b687702736756.png" },
    { name: "Shenzhen Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/55989771-042b-4e6a-a65b-89d6f1e62af0-1608011555929-07d10e9ce9f4ccccc2571efb6ee5dc5b.png" },
    { name: "Flynas", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/626e886a-5bc1-4c76-8837-0fb496a8b3fe-1724873378832-93b5039d50a05f07cbb74db284ba859d.jpg" },
    { name: "Philippines AirAsia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/10/12/1e86dec9-9c04-45e7-9e86-48ad5d277698-1602473922822-af70344f3b060c8a1453ff5dfb90e18e.jpg" },
    { name: "Cambodia Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/01/17/0165326f-b81f-466e-8dab-48e139060789-1737120090621-384c5a34540e75805618f566d7d5f59d.png" },
    { name: "FlyJaya", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/08/19/8ac87592-30d0-413d-9c22-6dd44f43d625-1755585721979-4229b904ad62da7e2a7f64806bd1b1b7.png" },
    { name: "Pelita Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/05/19/6192ae48-0b05-4176-bbaa-012817c7bb0c-1652950475747-46f1a8c106e83d47ec6300a946cb4c74.png" },
    { name: "THAI AirAsia X", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/01/06/ad643b42-0897-41c4-af2a-53efae76ad20-1673005885048-f614b4adc703345ee3953e7a23953ee6.jpg" },
    { name: "EASTAR JET", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2026/03/04/72c8ffca-5b99-461f-9ef5-a5b13880e5da-1772602025349-09da381fd8551d5a4a5347a1d0913171.png" },

    // Slide 6 (Sebagian Logo Berulang untuk Demo Slide)
    { name: "Batik Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/4d7fa58c-a41f-4424-a599-7a2ccd27f270-1608152644158-75f5ada3c1800a50a7ba02a56ae2603b.png" },
    { name: "THAI AirAsia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/10/12/8fcf9032-783e-4d81-aefc-59d2906cb100-1602473901708-8d6b266fb10ecab80f3539296a90e77b.jpg" },
    { name: "AIR MACAU", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/e0fd3a8e-271f-447a-9a20-a54334dd2ca5-1608153044110-1ebed4695e1f37fb9fe31daeccaf4d09.png" },
    { name: "AIR MADAGASCAR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/73f08521-e5b4-4881-9701-39bf89af9b32-1608152925688-ce15a38fa937a168acb82dcdda2a48fb.png" },
    { name: "HK Express", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/4c343668-ab07-42c5-a4ed-e9d5a77bea86-1722840478771-cc4c4fdc12ffc910300ce6e3411acaf3.png" },
    { name: "TransNusa", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/11/18/d4e8e0be-47bd-4c18-a62c-01cb4966049f-1763459613860-e4627ae2d4250582771cdb643e0f9045.png" },
    { name: "Air France", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/924958eb-c71b-45a9-9489-abe80c71b988-1608152119369-de9de6fba2aab8ef5a693a2af673a0fe.png" },
    { name: "Alaska Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/04/27/3ec7dca7-19c9-4f34-ae0c-f93a84df50d6-1651073664828-1cede27a184a8abde178f42284f5e710.png" },
    { name: "TAAG", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/79057eff-c489-42ff-8483-258e5a167973-1608001670189-a8eeddc4defdd0d7f83aa28d950189ba.png" },
    { name: "Air China", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/620b0f93-571f-4908-a7d4-3484ab6f496b-1608152236728-90089b648176bdddf6e027fe4bcaf0c0.png" },
    { name: "Pobeda", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/10/20/47f7e0d1-287e-4ed6-b274-1c041d9741e0-1760947321745-e0a2e4bd29cb74de719ec519177038d4.jpg" },
    { name: "Hainan Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/806226d7-7d35-4ce1-ad2b-2d27b32bcaf7-1731977059136-403b0288a686e4df627d5306f9852d03.png" },
    { name: "KENYA AIRWAYS", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/b334d4b5-598b-488f-9e11-efae2c38f8fd-1608007319676-713b3c2834e96c94cd1fef8aa54dbba6.png" },
    { name: "Lufthansa", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/d7263adf-71e2-484f-bef9-54401c78333c-1608152870335-b654fc9d685f48fa6d98b6e51de0a1d5.png" },
    { name: "Japan Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/90d7ee34-96c6-4603-be8a-8a18646b63b6-1608152725646-dee407fe660bed1b1ce342b305472879.png" },
    { name: "PORTER AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/8d464c90-c9e8-4970-98a9-cf6a4a9e26ba-1731977443621-14819d9d6dfdf98743e4e57399917478.png" },
    { name: "Air Vanuatu", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/d4d694e7-12f4-45ef-8bf2-8cd2c909418b-1724872139008-32179b558dac8ab28307182953b35fb8.png" },
    { name: "AIR CAIRO", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/5c53e3be-c977-4124-b9b7-c852d767d788-1731977857467-3f9d72323b045e935ed707e50c6a646e.png" },
    { name: "Sriwijaya Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/97329954-f734-4840-bb0b-a191d251672b-1608153267798-8b0e1941c0d909a586e08d437a15a1f6.png" },
    { name: "JAPAN TRANSOCEAN AIR", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/8630f5d8-691c-46b8-a7c7-85c87572c67f-1731978726987-69a15af2fbcbf2bb61620b0cad35e841.png" },
    { name: "Cebu Pacific", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/ee7f8405-d71d-4da1-af84-daf29b94b644-1722848250749-4b8af810e92d96076e8d13ca253362c2.png" },
    { name: "Avianca", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2022/01/21/9e1c74d3-96d9-4087-8624-3476cbe4a4ee-1642739558100-fd7a47cc7401d7444dfb3c8449b23674.png" },
    { name: "AirAsia", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/06/25/92f0eed9-d3ef-4511-83c8-c065e97746cc-1750836499054-ce0d03635ffb0eb2e6e28a2809b2c9ba.png" },
    { name: "BLUE PANORAMA", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/c7abb0a6-1bca-4167-b1d4-d1d3ea2e82d1-1731978591856-b21995426c8347410e284ccc1de488ba.png" },

    // Slide 7 (Sisa Logo)
    { name: "AER LINGUS", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/25d9defd-a86e-4bae-8ce1-43cff7c8e8df-1731945629840-ed4655ea2ea2bba1f85ab42332499b61.png" },
    { name: "AIR ARABIA EGYPT", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/18/02c61457-401f-41f0-bc12-b5ac94c880d2-1731945578177-d04c7a2b1ce65d23d557e996c6ff43e6.png" },
    { name: "Korean Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/06/03/8432714c-b2b3-4f0d-8d41-179c5327ae55-1748923802006-5a511be0f0f9465d9bf10635958b1df9.png" },
    { name: "APG AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/15/747b8218-5ef5-4a6f-8df2-182b4440c435-1608002443037-6c8c374624292c05a5d8715a3e703934.jpg" },
    { name: "Air Seoul", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/06/21/03216b1c-caa9-4408-a345-e3497d158678-1687283066986-bc6b899e7f6654602bf73ecf0fb86a53.png" },
    { name: "Swiss", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/21a07a44-afdd-4916-98e3-af528954cd0a-1608152910327-82fdfbbca110f28df26f9fe8aa8e6e29.png" },
    { name: "SPRING AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/cb6fcf17-7894-4906-a6c7-f598114d51e4-1731978490425-9943890dda3b4cc860030948d6af1c53.png" },
    { name: "Emirates", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/01/18/807e4d2a-40da-4b82-b388-3684184a3ec0-1674047194348-7e16df154d2abe5ff37047ca41e87ddf.png" },
    { name: "China Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/249e02ba-4566-4078-a84e-899d919c56b8-1608152326329-6175a96a8df97982f65fca038d27cd4d.png" },
    { name: "Frontier Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/12fda463-d3fd-4806-9d72-c3a339058304-1724871700717-893b803ef46e0b57bf0dfdd591697ca3.png" },
    { name: "STARLUX Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/05/06/68923976-b913-4484-91e2-f047b09368bc-1714981738157-0337accb63f3c95284dfe9a15d7daed0.png" },
    { name: "Gol Transportes", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/29/79b7666e-b639-4014-8544-4d3c1cc8f91d-1724871960809-e366124333b87101270cb50280949a59.jpg" },
    { name: "Qatar Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/dc7c800d-c7bd-452e-a995-033de8d01487-1608153238878-1bc4a7ce106670f49f3fae829f36cef2.png" },
    { name: "Malaysia Airlines", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2023/02/15/a0e34262-48bb-47df-a6fc-e94ca7cffc38-1676438137577-79efb3040ce4639f217fa11f6278d350.png" },
    { name: "EASYJET", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/9458a244-defa-477d-9216-7b640e7db710-1731978209754-d18c4d1b174d2598228b3a0574bcfa1c.png" },
    { name: "Akasa Air", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2025/07/25/77d1fe41-d25d-487f-9cc6-fefe14d217e2-1753376910840-e6a7df3520e45644718196d4f10eca7a.jpg" },
    { name: "SICHUAN AIRLINES", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/02/3e20eb6a-c4d0-4597-8ff8-7d79ae4f9642-1722584149524-6d03f465274d7406fa58e8b84c500c92.jpg" },
    { name: "Ethiophian", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/899cfadb-e2b2-4596-b9ec-3f33a181a1f9-1608152451751-43788cd2b2fa3c03300fe717786ae99b.png" },
    { name: "PEACH AVIATION", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/11/19/7103114a-61aa-4b91-a244-0f025522f6c6-1731977322224-22f025bcf08d8752ff47d15f8f15f8f4.png" },
    { name: "Bangkok Airways", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2020/12/17/aac19f61-09d0-4e34-99fe-62fd53c13139-1608153184940-7cd4982e2677432e9003f4f7e9f53156.png" },
    { name: "Zipair Tokyo", logo: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/string/2024/08/05/e14b5646-b5d2-4c6a-98ef-16d273634aad-1722840616338-b9eb6e33dd0a10bbb1888cf82044dbd9.png" },
  ];

  // BAGI LOGO MENJADI 24 ITEM PER HALAMAN
  const itemsPerPage = 24;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  return (
    <section className="bg-white py-12 font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-0">
        
        {/* HEADER */}
        <div className="mb-8">
          <h2 className="text-[24px] leading-[30px] font-bold text-[#11142D] mb-2">
            Partner Maskapai
          </h2>
          <p className="text-[18px] leading-[24px] text-[#71747d]">
            Dengan berbagai maskapai mitra, kami siap menerbangkan Anda ke mana pun.
          </p>
        </div>

        {/* CAROUSEL CONTAINER */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentPage * 100}%)`,
              transitionTimingFunction: 'cubic-bezier(0.2, 0.8, 0.2, 1)' 
            }}
          >
            {[...Array(totalPages)].map((_, pageIndex) => (
              <div key={pageIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 items-center justify-items-center opacity-90 pb-2">
                  {partners
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((partner, index) => (
                      <div key={index} className="w-full flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name} 
                          className="max-h-[32px] w-auto max-w-[80%] object-contain hover:scale-110 hover:opacity-100 transition-all duration-200 cursor-pointer"
                          loading="lazy"
                        />
                      </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAGINATION DOTS (Ukuran diperbaiki) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-[6px] mt-10">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === i 
                  ? 'w-[24px] h-[6px] bg-[#0064d2]' 
                  : 'w-[6px] h-[6px] bg-[#d8dce8] hover:bg-[#aeb2be]'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};