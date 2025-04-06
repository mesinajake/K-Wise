import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./PC-Parts.css";
import logo1 from "./assets/LOGO1.png";
import CPU1 from "./assets/CPU1.png";
import Motherboard1 from "./assets/Motherboard1.png";
import GPU1 from "./assets/GPU1.png";
import Ram from "./assets/Ram.png";
import Storage1 from "./assets/Storage1.png";
import PSU1 from "./assets/PSU1.png";
import SystemUnit1 from "./assets/SystemUnit1.png";
import Stats from "./assets/Stats.png";
import Chest from "./assets/Chest.png";
import RX6600 from "./assets/RX6600.jpg";
import B550MK from "./assets/B550M-K.jpg";
import Ryzen from "./assets/Ryzen.webp";
import IntelCorei5 from "./assets/IntelCorei5.webp";
import IntelCorei7 from "./assets/IntelCorei7.webp";
import IntelCoreUltra from "./assets/IntelCoreUltra.webp";
import AsusMotherboard from "./assets/AsusMotherboard.png";
import GigabyteMotherboard from "./assets/GigabyteMotherboard.png";
import ASrockMotherboard from "./assets/ASrockMotherboard.png";
import RX550 from "./assets/RX550.png";
import RX580 from "./assets/RX580.png";
import RX7600XT from "./assets/RX7600XT.webp";
import RX7700XT from "./assets/RX7700XT.png";
import RX7800XT from "./assets/RX7800XT.webp";
import GB8Team from "./assets/8GBTeam.png";
import GB16Team from "./assets/16GBTeam.png";
import GB16Kingston from "./assets/16GBKingston.png";
import GB16TFORCEBlack from "./assets/16GBTFORCEBlack.webp";
import GB16TForceDarkZa from "./assets/16GBTForceDarkZa.png";
import GB16TFORCEWhite from "./assets/16GBTFORCEWhite.png";
import GB32GSkillTridentZ from "./assets/32GBG.SKILLTridentZ.png";
import TFORCEVULCAN from "./assets/TFORCEVULCAN.png";
import SAMSUNG870EVO from "./assets/SAMSUNG870EVO.png";
import WDGREEN from "./assets/WDGREEN.png";
import WDGREENGEN3 from "./assets/WDGREENGEN3.png";
import WDBLUEGEN4 from "./assets/WDBLUEGEN4.png";
import WDBLACKGEN4 from "./assets/WDBLACKGEN4.png";
import TEAMGROUPMP33PRO from "./assets/TEAMGROUPMP33PRO.png";
import XPGSX8200PROGEN4 from "./assets/XPGSX8200PROGEN4.png";
import YGTKY750 from "./assets/YGTKY750.png";
import COUGARSTC500 from "./assets/COUGARSTC500.png";
import CORSAIRCX550 from "./assets/CORSAIRCX550.webp";
import FSPHydroMPRO from "./assets/FSPHydroMPRO.png";
import FSPVITAGM from "./assets/FSPVITAGM.png";
import GIGABYTEP550SS from "./assets/GIGABYTEP550SS.png";
import GIGABYTEP550SSSILVERWhite from "./assets/GIGABYTEP550SSSILVERWhite.webp"; 
import YGTMARS8 from "./assets/YGTMARS8.png";
import POWERLOGICSLIM from "./assets/POWERLOGICSLIM.png";
import KEYTECHROBINLITE from "./assets/KEYTECHROBINLITE.png";
import KEYTECHROBINVIEW from "./assets/KEYTECHROBINVIEW.png";
import INPLAYOPENVIEWV100 from "./assets/INPLAYOPENVIEWV100.png";
import PlayerMIKU2 from "./assets/PlayerMIKU2.png";
import DARKFLASHDB330M from "./assets/DARKFLASHDB330M.png";
import COOLMANREYNA from "./assets/COOLMANREYNA.png";
import LIANLIO11DynamicMINI from "./assets/LIANLIO11DynamicMINI.png";
import LogitechG502HERO from "./assets/LogitechG502HERO.webp";
import RazerDeathAdderV2 from "./assets/RazerDeathAdderV2.webp";
import SteelSeriesApex3KL from "./assets/SteelSeriesApex3KL.webp";
import HyperXAlloyOriginsCore from "./assets/HyperXAlloyOriginsCore.png";
import RazerBlackSharkV2X from "./assets/RazerBlackSharkV2X.png";
import LogitechG435Wireless from "./assets/LogitechG435Wireless.webp";
import SteelSeriesQcKHeavyMousePad from "./assets/SteelSeriesQcKHeavyMousePad.png";
import HyperXPulsefireHaste from "./assets/HyperXPulsefireHaste.png";


// Sample Product Data (Replace with your database fetch logic)
export const menuItems = [
  { name: "Central Processing Unit", image: CPU1, category: "cpu", products: [
    { 
      name: "AMD RYZEN 3 4100",
      image: Ryzen, 
      price: "PHP 3,495",
      details: "A budget-friendly quad-core processor designed for efficient performance in gaming and productivity tasks.",
      specifications: "4 Cores | 8 Threads | 3.8 GHz Base | 4.0 GHz Boost | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 3400G", 
      image: Ryzen, 
      price: "PHP 4,295",
      details: "A great entry-level APU with integrated Vega 11 graphics, ideal for budget gaming and office use.",
      specifications: "4 Cores | 8 Threads | 3.7 GHz Base | 4.2 GHz Boost | 11 Vega Graphics | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 5500", 
      image: Ryzen, 
      price: "PHP 4,985",
      details: "Mid-range gaming and multitasking processor with solid performance at an affordable price.",
      specifications: "6 Cores | 12 Threads | 3.6 GHz Base | 4.2 GHz Boost | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 5600", 
      image: Ryzen, 
      price: "PHP 5,985",
      details: "A powerful six-core processor for gaming and productivity, built on the Zen 3 architecture.",
      specifications: "6 Cores | 12 Threads | 3.5 GHz Base | 4.4 GHz Boost | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 4600G", 
      image: Ryzen, 
      price: "PHP 5,495",
      details: "A strong APU with integrated Radeon graphics, ideal for systems without a dedicated GPU.",
      specifications: "6 Cores | 12 Threads | 3.7 GHz Base | 4.2 GHz Boost | Radeon Graphics | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 5600GT", 
      image: Ryzen, 
      price: "PHP 7,185",
      details: "A high-performance CPU with integrated graphics, perfect for casual gaming and workstation tasks.",
      specifications: "6 Cores | 12 Threads | 3.9 GHz Base | 4.4 GHz Boost | Radeon Graphics | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 5 5600X", 
      image: Ryzen, 
      price: "PHP 6,995",
      details: "One of the best gaming processors in its class, featuring superior single-core performance.",
      specifications: "6 Cores | 12 Threads | 3.7 GHz Base | 4.6 GHz Boost | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 7 5700X", 
      image: Ryzen, 
      price: "PHP 7,895",
      details: "A high-performance 8-core processor ideal for gaming and content creation.",
      specifications: "8 Cores | 16 Threads | 3.4 GHz Base | 4.6 GHz Boost | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 7 5700G", 
      image: Ryzen, 
      price: "PHP 8,495",
      details: "A high-performance APU with Radeon graphics, excellent for gaming and multitasking.",
      specifications: "8 Cores | 16 Threads | 3.8 GHz Base | 4.6 GHz Boost | Radeon Graphics | 65W TDP | AM4 Socket"
    },
    { 
      name: "AMD RYZEN 7 5700X3D", 
      image: Ryzen, 
      price: "PHP 11,995",
      details: "An advanced gaming processor with 3D V-Cache for enhanced performance in demanding titles.",
      specifications: "8 Cores | 16 Threads | 3.4 GHz Base | 4.5 GHz Boost | 105W TDP | AM4 Socket"
    },
    { 
      name: "Intel Core i5 12400F", 
      image: IntelCorei5,
      price: "PHP 7,480",
      details: "A budget-friendly 12th-gen processor with excellent gaming performance.",
      specifications: "6 Cores | 12 Threads | 2.5 GHz Base | 4.4 GHz Boost | 65W TDP | LGA 1700 Socket"
    },
    { 
      name: "Intel Core i5 12400", 
      image: IntelCorei5,
      price: "PHP 8,995",
      details: "A non-F version of the i5 12400 with integrated UHD Graphics 730.",
      specifications: "6 Cores | 12 Threads | 2.5 GHz Base | 4.4 GHz Boost | 65W TDP | LGA 1700 Socket"
    },
    { 
      name: "Intel Core i7 12700F", 
      image: IntelCorei7,
      price: "PHP 15,495",
      details: "A powerful 12-core hybrid CPU, excellent for gaming and productivity tasks.",
      specifications: "12 Cores | 20 Threads | 2.1 GHz Base | 4.9 GHz Boost | 125W TDP | LGA 1700 Socket"
    },
    { 
      name: "Intel Core i5 14400F", 
      image: IntelCorei5,
      price: "PHP 11,190",
      details: "A strong mid-range processor from the 14th-gen lineup, offering efficiency and power.",
      specifications: "10 Cores | 16 Threads | 2.5 GHz Base | 4.7 GHz Boost | 65W TDP | LGA 1700 Socket"
    },
    { 
      name: "Intel Core i7 14700F", 
      image: IntelCorei7,
      price: "PHP 19,495",
      details: "A high-end gaming and productivity processor with enhanced efficiency cores.",
      specifications: "20 Cores | 28 Threads | 2.1 GHz Base | 5.4 GHz Boost | 125W TDP | LGA 1700 Socket"
    },
    { 
      name: "Intel Core ULTRA 5 245KF", 
      image: IntelCoreUltra,
      price: "PHP 19,050",
      details: "A next-gen Intel processor with AI-enhanced performance capabilities.",
      specifications: "14 Cores | 20 Threads | 3.0 GHz Base | 5.2 GHz Boost | 125W TDP | LGA 1851 Socket"
    },
    { 
      name: "Intel Core ULTRA 7 265", 
      image: IntelCoreUltra,
      price: "PHP 25,996",
      details: "A top-tier processor designed for AI-driven workloads and high-performance computing.",
      specifications: "16 Cores | 24 Threads | 3.2 GHz Base | 5.4 GHz Boost | 125W TDP | LGA 1851 Socket"
    },
    { 
      name: "Intel Core ULTRA 9 285K", 
      image: IntelCoreUltra,
      price: "PHP 37,090",
      details: "The ultimate processor for gamers and content creators, featuring cutting-edge AI technology.",
      specifications: "24 Cores | 32 Threads | 3.5 GHz Base | 5.8 GHz Boost | 125W TDP | LGA 1851 Socket"
    }
  ], 
  brands: ["AMD", "Intel"] 
},
  { name: "Motherboard", image: Motherboard1, category: "motherboard", products: [
    { 
      name: "GIGABYTE B450M-K", 
      image: GigabyteMotherboard,
      price: "PHP 3,899",
      details: "A budget-friendly microATX motherboard supporting AMD Ryzen processors with basic connectivity.",
      specifications: "MicroATX | AM4 Socket | 2x DDR4 Slots (up to 32GB) | PCIe 3.0 | HDMI | USB 3.1"
    },
    { 
      name: "ASUS TUF GAMING A620M-PLUS", 
      image: AsusMotherboard,
      price: "PHP 8,899",
      details: "A durable gaming motherboard designed for AM5 Ryzen CPUs, featuring high-speed connectivity and cooling solutions.",
      specifications: "MicroATX | AM5 Socket | 4x DDR5 Slots (up to 128GB) | PCIe 4.0 | USB 3.2 | WiFi 6 | AI Noise Cancellation"
    },
    { 
      name: "GIGABYTE B450M DS3H V3",
      image: GigabyteMotherboard, 
      price: "PHP 4,199",
      details: "A solid microATX motherboard with extended durability and hybrid digital VRM design.",
      specifications: "MicroATX | AM4 Socket | 4x DDR4 Slots (up to 64GB) | PCIe 3.0 | USB 3.1 | HDMI/DVI"
    },
    { 
      name: "GIGABYTE A520M DS3H AC",
      image: GigabyteMotherboard, 
      price: "PHP 4,995",
      details: "An affordable A520 chipset motherboard with built-in WiFi, ideal for Ryzen 3rd and 4th Gen CPUs.",
      specifications: "MicroATX | AM4 Socket | 4x DDR4 Slots (up to 64GB) | PCIe 3.0 | USB 3.2 | WiFi 5 | HDMI"
    },
    { 
      name: "GIGABYTE B550M-K", 
      price: "PHP 5,199",
      details: "A solid entry-level B550 motherboard with support for Ryzen 5000 series CPUs and PCIe 4.0.",
      specifications: "MicroATX | AM4 Socket | 2x DDR4 Slots (up to 64GB) | PCIe 4.0 | USB 3.2 | HDMI",
      image: B550MK,
    },
    { 
      name: "ASROCK B550M PRO SE", 
      image: ASrockMotherboard,
      price: "PHP 5,799",
      details: "A high-performance microATX motherboard featuring PCIe 4.0 and robust VRM for stable overclocking.",
      specifications: "MicroATX | AM4 Socket | 4x DDR4 Slots (up to 128GB) | PCIe 4.0 | USB 3.2 | HDMI/DP"
    },
    { 
      name: "GIGABYTE B550M DS3H AC", 
      image: GigabyteMotherboard,
      price: "PHP 6,399",
      details: "A well-rounded motherboard with WiFi, great for mid-range gaming builds.",
      specifications: "MicroATX | AM4 Socket | 4x DDR4 Slots (up to 128GB) | PCIe 4.0 | USB 3.2 | WiFi 5 | HDMI"
    },
    { 
      name: "AORUS ELITE B550M AX", 
      image: ASrockMotherboard,
      price: "PHP 7,699",
      details: "A feature-rich gaming motherboard with reinforced PCIe slots and high-speed networking.",
      specifications: "MicroATX | AM4 Socket | 4x DDR4 Slots (up to 128GB) | PCIe 4.0 | USB 3.2 | WiFi 6 | HDMI/DP"
    },
    { 
      name: "ASROCK A620M-HDV/M.2", 
      image: ASrockMotherboard,
      price: "PHP 5,995",
      details: "An affordable AM5 motherboard with M.2 storage support, great for budget Ryzen 7000 builds.",
      specifications: "MicroATX | AM5 Socket | 2x DDR5 Slots (up to 64GB) | PCIe 4.0 | USB 3.2 | HDMI"
    },
    { 
      name: "GIGABYTE B650M GAMING", 
      image: GigabyteMotherboard,
      price: "PHP 7,199",
      details: "A high-speed gaming motherboard with PCIe 5.0 support, ideal for next-gen Ryzen CPUs.",
      specifications: "MicroATX | AM5 Socket | 4x DDR5 Slots (up to 128GB) | PCIe 5.0 | USB 3.2 | WiFi 6 | HDMI/DP"
    },
    { 
      name: "ASUS TUF GAMING A620M-PLUS", 
      image: AsusMotherboard,
      price: "PHP 8,899",
      details: "Built for durability and gaming performance, this AM5 motherboard is optimized for Ryzen 7000 series.",
      specifications: "MicroATX | AM5 Socket | 4x DDR5 Slots (up to 128GB) | PCIe 4.0 | USB 3.2 | WiFi 6 | AI Cooling"
    }
  ], 
  brands: ["ASUS", "MSI", "Gigabyte", "ASRock"] 
},
  { name: "Graphics Processing Units", image: GPU1, category: "gpu", products: [
    { 
      name: "4GB RX550 RAMSTA",
      image: RX550, 
      price: "PHP 4,995",
      details: "A budget-friendly entry-level GPU, suitable for casual gaming and multimedia tasks.",
      specifications: "4GB GDDR5 | 128-bit | 1183 MHz Core Clock | DirectX 12 | HDMI/DVI/DP"
    },
    { 
      name: "8GB RX580 XFX GTS", 
      image: RX580,
      price: "PHP 6,995",
      details: "A mid-range GPU offering solid 1080p gaming performance with DirectX 12 support.",
      specifications: "8GB GDDR5 | 256-bit | 1366 MHz Boost Clock | DirectX 12 | 1x HDMI, 3x DP, 1x DVI"
    },
    { 
      name: "8GB RX6600 GIGABYTE", 
      price: "PHP 13,995",
      details: "A great 1080p gaming card with RDNA 2 architecture and low power consumption.",
      specifications: "8GB GDDR6 | 128-bit | 2491 MHz Boost Clock | PCIe 4.0 | 1x HDMI, 3x DP",
      image: RX6600,
    },
    { 
      name: "16GB RX7600XT GIGABYTE", 
      image: RX7600XT,
      price: "PHP 23,995",
      details: "An upper mid-range card with improved ray tracing and AI-driven performance.",
      specifications: "16GB GDDR6 | 128-bit | 2755 MHz Boost Clock | PCIe 4.0 | 1x HDMI, 3x DP"
    },
    { 
      name: "12GB RX7700XT GIGABYTE", 
      image: RX7700XT,
      price: "PHP 27,995",
      details: "A high-performance GPU ideal for 1440p gaming with advanced cooling technology.",
      specifications: "12GB GDDR6 | 192-bit | 2544 MHz Boost Clock | PCIe 4.0 | 2x HDMI, 2x DP"
    },
    { 
      name: "16GB RX7800XT GIGABYTE", 
      image: RX7800XT,
      price: "PHP 34,995",
      details: "A powerful GPU for 1440p gaming and creative workloads, featuring RDNA 3 architecture.",
      specifications: "16GB GDDR6 | 256-bit | 2430 MHz Boost Clock | PCIe 4.0 | 2x HDMI, 2x DP"
    },
  ], 
  brands: ["NVIDIA", "AMD", "ASRock", "Gigabyte"] 
},
  { name: "Random Access Memory", image: Ram, category: "ram", products: [
    {
      name: "8GB Team Elite Plus DDR4 3200MHz",
      image: GB8Team,
      price: "PHP 1,199",
      details: "An affordable DDR4 memory stick ideal for budget gaming and office use.",
      specifications: "8GB DDR4 | 3200MHz | CL22 | 1.2V | Non-ECC | Unbuffered"
    },
    {
      name: "16GB Team Elite Plus DDR4 3200MHz",
      image: GB16Team,
      price: "PHP 2,199",
      details: "A single-stick high-speed memory designed for multitasking and gaming.",
      specifications: "16GB DDR4 | 3200MHz | CL22 | 1.2V | Non-ECC | Unbuffered"
    },
    {
      name: "16GB Kingston Fury Beast DDR4 3200MHz",
      image: GB16Kingston,
      price: "PHP 2,399",
      details: "Reliable and durable RAM with Kingston’s Fury Beast design for enhanced cooling.",
      specifications: "16GB DDR4 | 3200MHz | CL16 | 1.35V | XMP 2.0 | Heat Spreader"
    },
    {
      name: "16GB T-Force DarkZa Kit 3600MHz",
      image: GB16TForceDarkZa,
      price: "PHP 2,499",
      details: "Optimized for gaming and high-performance computing with fast speeds.",
      specifications: "16GB (2x8GB) DDR4 | 3600MHz | CL18 | 1.35V | XMP 2.0 | Heat Spreader"
    },
    {
      name: "16GB T-FORCE DELTA RGB TUF 3600MHz Black",
      image: GB16TFORCEBlack,
      price: "PHP 3,195",
      details: "A stylish RGB RAM module certified by ASUS TUF Gaming Alliance.",
      specifications: "16GB DDR4 | 3600MHz | CL18 | 1.35V | XMP 2.0 | RGB Lighting"
    },
    {
      name: "16GB T-FORCE DELTA RGB 3600MHz White",
      image: GB16TFORCEWhite,
      price: "PHP 3,195",
      details: "An aesthetically pleasing white RAM with vibrant RGB lighting.",
      specifications: "16GB DDR4 | 3600MHz | CL18 | 1.35V | XMP 2.0 | RGB Lighting"
    },
    {
      name: "32GB T-Force DarkZa Kit 3600MHz",
      image: GB16TForceDarkZa,
      price: "PHP 3,900",
      details: "A dual-stick RAM kit for content creators and heavy multitasking.",
      specifications: "32GB (2x16GB) DDR4 | 3600MHz | CL18 | 1.35V | XMP 2.0 | Heat Spreader"
    },
    {
      name: "32GB T-FORCE DELTA RGB 3600MHz White",
      image: GB16TFORCEWhite,
      price: "PHP 5,495",
      details: "Premium high-capacity RGB RAM for gaming and workstation setups.",
      specifications: "32GB DDR4 | 3600MHz | CL18 | 1.35V | XMP 2.0 | RGB Lighting"
    },
    {
      name: "32GB G.SKILL Trident Z RGB 3600MHz",
      image: GB32GSkillTridentZ,
      price: "PHP 5,495",
      details: "High-performance RAM with aggressive heat spreaders and customizable RGB lighting.",
      specifications: "32GB DDR4 | 3600MHz | CL16 | 1.35V | XMP 2.0 | RGB Lighting"
    },
    {
      name: "16GB TEAM ELITE PLUS DDR5 5600 Gold",
      image: GB16Team,
      price: "PHP 2,895",
      details: "An entry-level DDR5 module with improved bandwidth and energy efficiency.",
      specifications: "16GB DDR5 | 5600MHz | CL46 | 1.1V | Non-ECC | Unbuffered"
    },
    {
      name: "16GB T-FORCE DELTA RGB 6000MHz Black",
      image: GB16TFORCEBlack,
      price: "PHP 3,395",
      details: "Fast DDR5 RAM with stunning RGB effects and high overclocking potential.",
      specifications: "16GB DDR5 | 6000MHz | CL36 | 1.35V | XMP 3.0 | RGB Lighting"
    },
    {
      name: "16GB T-FORCE DELTA RGB 6000MHz White",
      image: GB16TFORCEWhite,
      price: "PHP 3,495",
      details: "A high-speed DDR5 RAM module designed for next-gen performance.",
      specifications: "16GB DDR5 | 6000MHz | CL36 | 1.35V | XMP 3.0 | RGB Lighting"
    },
    {
      name: "32GB T-FORCE DELTA RGB Kit 6400MHz Black",
      image: GB16TFORCEBlack,
      price: "PHP 7,499",
      details: "A top-tier RAM kit for overclocking and extreme gaming performance.",
      specifications: "32GB (2x16GB) DDR5 | 6400MHz | CL32 | 1.4V | XMP 3.0 | RGB Lighting"
    },
  ],
  brands: ["Corsair", "Kingston", "G.Skill", "TeamGroup"]
},
  { name: "Storage", image: Storage1, category: "storage", products: [
    {
      name: "256GB T-FORCE VULCAN Z",
      image: TFORCEVULCAN,
      price: "PHP 1,499",
      details: "A budget-friendly SATA SSD with solid performance for general computing.",
      specifications: "256GB SATA III | Read: 550MB/s | Write: 500MB/s | 2.5-inch | 3D NAND"
    },
    {
      name: "512GB T-FORCE VULCAN Z",
      image: TFORCEVULCAN,
      price: "PHP 2,499",
      details: "A larger capacity SATA SSD offering reliable speeds and durability.",
      specifications: "512GB SATA III | Read: 550MB/s | Write: 500MB/s | 2.5-inch | 3D NAND"
    },
    {
      name: "500GB SAMSUNG 870 EVO",
      image: SAMSUNG870EVO,
      price: "PHP 3,199",
      details: "One of the best SATA SSDs for performance and reliability.",
      specifications: "500GB SATA III | Read: 560MB/s | Write: 530MB/s | 2.5-inch | 3D V-NAND"
    },
    {
      name: "1TB WD GREEN",
      image: WDGREEN,
      price: "PHP 3,899",
      details: "An eco-friendly, budget HDD designed for everyday storage needs.",
      specifications: "1TB HDD | 5400 RPM | 256MB Cache | SATA III | 3.5-inch"
    },
    {
      name: "500GB WD GREEN GEN3",
      image: WDGREENGEN3,
      price: "PHP 2,695",
      details: "A cost-effective NVMe SSD for faster data transfers than SATA drives.",
      specifications: "500GB NVMe PCIe Gen3 | Read: 2400MB/s | Write: 1750MB/s | M.2 2280"
    },
    {
      name: "500GB WD BLUE GEN4",
      image: WDBLUEGEN4,
      price: "PHP 3,295",
      details: "A Gen4 NVMe SSD delivering significant performance improvements over Gen3.",
      specifications: "500GB NVMe PCIe Gen4 | Read: 4100MB/s | Write: 2000MB/s | M.2 2280"
    },
    {
      name: "1TB WD BLUE GEN4",
      image: WDBLUEGEN4,
      price: "PHP 4,799",
      details: "A high-speed NVMe SSD suitable for gaming and productivity workloads.",
      specifications: "1TB NVMe PCIe Gen4 | Read: 5200MB/s | Write: 4500MB/s | M.2 2280"
    },
    {
      name: "500GB WD BLACK GEN4",
      image: WDBLACKGEN4,
      price: "PHP 3,495",
      details: "A high-performance NVMe SSD designed for gaming and intensive tasks.",
      specifications: "500GB NVMe PCIe Gen4 | Read: 7000MB/s | Write: 4100MB/s | M.2 2280"
    },
    {
      name: "1TB WD BLACK GEN4",
      image: WDBLACKGEN4,
      price: "PHP 5,499",
      details: "An ultra-fast NVMe SSD for gaming, content creation, and high-speed operations.",
      specifications: "1TB NVMe PCIe Gen4 | Read: 7300MB/s | Write: 5300MB/s | M.2 2280"
    },
    {
      name: "512GB TEAMGROUP MP33 PRO",
      image: TEAMGROUPMP33PRO,
      price: "PHP 2,699",
      details: "A budget NVMe SSD with decent speed improvements over SATA SSDs.",
      specifications: "512GB NVMe PCIe Gen3 | Read: 1700MB/s | Write: 1400MB/s | M.2 2280"
    },
    {
      name: "1TB XPG SX8200 PRO GEN4",
      image: XPGSX8200PROGEN4,
      price: "PHP 4,099",
      details: "A high-end Gen4 SSD delivering impressive speed for gaming and heavy workloads.",
      specifications: "1TB NVMe PCIe Gen4 | Read: 5000MB/s | Write: 4400MB/s | M.2 2280"
    }
  ],
  brands: ["Samsung", "Western Digital", "Crucial", "Seagate"]
},
  { name: "Power Supply", image: PSU1, category: "power supply", products: [
    {
      name: "750W YGT KY-750",
      image: YGTKY750,
      price: "PHP 800",
      details: "A budget-oriented power supply with basic performance, recommended for low-power builds.",
      specifications: "750W | Non-Certified | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "500W COUGAR STC500 80+ White",
      image: COUGARSTC500,
      price: "PHP 2,280",
      details: "An entry-level 80+ White certified PSU for basic system builds.",
      specifications: "500W | 80+ White | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "550W CORSAIR CX550 80+ Bronze",
      image: CORSAIRCX550,
      price: "PHP 2,995",
      details: "A reliable 80+ Bronze PSU for mid-range gaming and workstation builds.",
      specifications: "550W | 80+ Bronze | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "650W CORSAIR CX650 80+ Bronze",
      image: CORSAIRCX550,
      price: "PHP 3,485",
      details: "A durable PSU with Bronze efficiency, ideal for mid-range gaming PCs.",
      specifications: "650W | 80+ Bronze | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "750W CORSAIR CX750 80+ Bronze",
      image: CORSAIRCX550,
      price: "PHP 3,985",
      details: "A high-capacity PSU for gaming and workstation builds with decent efficiency.",
      specifications: "750W | 80+ Bronze | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "850W CORSAIR RM850e 80+ GOLD",
      image: CORSAIRCX550,
      price: "PHP 8,195",
      details: "A fully modular, high-performance PSU with Gold efficiency for powerful builds.",
      specifications: "850W | 80+ Gold | Fully Modular | 135mm Fan | Standard ATX"
    },
    {
      name: "600W FSP Hydro M PRO 80+ Bronze",
      image: FSPHydroMPRO,
      price: "PHP 3,750",
      details: "A mid-range semi-modular PSU with Bronze certification for reliable performance.",
      specifications: "600W | 80+ Bronze | Semi-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "700W FSP Hydro M PRO 80+ Bronze",
      image: FSPHydroMPRO,
      price: "PHP 3,750",
      details: "An efficient and budget-friendly PSU suitable for mid to high-end gaming PCs.",
      specifications: "700W | 80+ Bronze | Semi-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "800W FSP Hydro M PRO 80+ Bronze",
      image: FSPHydroMPRO,
      price: "PHP 3,950",
      details: "A semi-modular power supply for high-power gaming setups.",
      specifications: "800W | 80+ Bronze | Semi-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "850W FSP VITA GM 80+ GOLD",
      image: FSPVITAGM,
      price: "PHP 7,300",
      details: "A high-efficiency, Gold-certified PSU for gaming and overclocking builds.",
      specifications: "850W | 80+ Gold | Fully Modular | 135mm Fan | Standard ATX"
    },
    {
      name: "850W FSP VITA GM 80+ GOLD White",
      image: FSPVITAGM,
      price: "PHP 7,495",
      details: "The same powerful 850W Gold PSU, now in a sleek white edition.",
      specifications: "850W | 80+ Gold | Fully Modular | 135mm Fan | Standard ATX | White"
    },
    {
      name: "1000W FSP VITA GM 80+ GOLD",
      image: FSPVITAGM,
      price: "PHP 8,500",
      details: "A high-capacity, fully modular PSU designed for extreme performance systems.",
      specifications: "1000W | 80+ Gold | Fully Modular | 135mm Fan | Standard ATX"
    },
    {
      name: "550W GIGABYTE P550SS 80+ SILVER",
      image: GIGABYTEP550SS,
      price: "PHP 2,395",
      details: "A budget Silver-rated PSU for stable and efficient performance.",
      specifications: "550W | 80+ Silver | Non-Modular | 120mm Fan | Standard ATX"
    },
    {
      name: "550W GIGABYTE P550SS 80+ SILVER White",
      image: GIGABYTEP550SSSILVERWhite,
      price: "PHP 2,495",
      details: "A stylish white variant of the P550SS, providing stable power efficiency.",
      specifications: "550W | 80+ Silver | Non-Modular | 120mm Fan | Standard ATX | White"
    }
  ],
  brands: ["Corsair", "EVGA", "Seasonic", "FSP"]
},
  { name: "Case", image: SystemUnit1, category: "case", products: [
    {
      name: "YGT MARS 8 W/ 700W PSU",
      image: YGTMARS8,
      price: "PHP 1,000",
      details: "A budget-friendly mid-tower case with an included 700W non-certified PSU.",
      specifications: "Form Factor: Mid-Tower | Pre-installed PSU: 700W | Material: Steel & Plastic | Cooling Support: Basic Airflow"
    },
    {
      name: "POWERLOGIC SLIM W/ 700W PSU",
      image: POWERLOGICSLIM,
      price: "PHP 1,350",
      details: "A compact and slim case for office or entry-level builds with a pre-installed PSU.",
      specifications: "Form Factor: Mini-Tower | Pre-installed PSU: 700W | Material: Steel & Plastic | Cooling Support: Limited"
    },
    {
      name: "KEYTECH ROBIN LITE",
      image: KEYTECHROBINLITE,
      price: "PHP 1,480",
      details: "A minimalist and affordable mid-tower case with solid build quality.",
      specifications: "Form Factor: Mid-Tower | PSU: Not Included | Material: Steel & Plastic | Cooling Support: 120mm Fans"
    },
    {
      name: "KEYTECH ROBIN VIEW",
      image: KEYTECHROBINVIEW,
      price: "PHP 1,480",
      details: "An upgraded version of Robin Lite featuring a tempered glass panel.",
      specifications: "Form Factor: Mid-Tower | PSU: Not Included | Material: Steel & Tempered Glass | Cooling Support: 120mm Fans"
    },
    {
      name: "INPLAY OPENVIEW V100",
      image: INPLAYOPENVIEWV100,
      price: "PHP 1,499",
      details: "A stylish case with a transparent side panel for an elegant build.",
      specifications: "Form Factor: Mid-Tower | PSU: Not Included | Material: Steel & Acrylic | Cooling Support: 120mm Fans"
    },
    {
      name: "1stPlayer MIKU 2",
      image: PlayerMIKU2,
      price: "PHP 1,700",
      details: "A sleek and modern case with good airflow for budget gaming PCs.",
      specifications: "Form Factor: Mid-Tower | PSU: Not Included | Material: Steel & Tempered Glass | Cooling Support: 120mm Fans, RGB Compatibility"
    },
    {
      name: "DARKFLASH DB330M",
      image: DARKFLASHDB330M,
      price: "PHP 1,850",
      details: "A compact Micro-ATX case with excellent airflow and RGB compatibility.",
      specifications: "Form Factor: Micro-ATX | PSU: Not Included | Material: Steel & Tempered Glass | Cooling Support: 120mm & 140mm Fans, RGB Fans Support"
    },
    {
      name: "COOLMAN REYNA",
      image: COOLMANREYNA,
      price: "PHP 1,850",
      details: "A mid-range case with a futuristic design and support for high-performance cooling.",
      specifications: "Form Factor: Mid-Tower | PSU: Not Included | Material: Steel & Tempered Glass | Cooling Support: 120mm & 140mm Fans, Water Cooling Radiator Support"
    },
    {
      name: "LIANLI O11 Dynamic MINI",
      image: LIANLIO11DynamicMINI,
      price: "PHP 6,000",
      details: "A premium small-form-factor case designed for high-performance builds.",
      specifications: "Form Factor: Mini-Tower | PSU: Not Included | Material: Aluminum & Tempered Glass | Cooling Support: 120mm & 140mm Fans, Water Cooling Radiator Support, Modular Design"
    }
  ],
  brands: ["NZXT", "Cooler Master", "Lian Li", "DarkFlash"]
},
  { name: "Peripherals", image: "./assets/peripherals.png", category: "peripherals", products: [
    {
      name: "Logitech G502 HERO",
      image: LogitechG502HERO,
      price: "PHP 3,195",
      details: "High-performance gaming mouse with HERO 25K sensor for precise tracking.",
      specifications: "DPI: 100-25,600 | Buttons: 11 | Weight Tuning System: Yes | RGB: Yes"
    },
    {
      name: "Razer DeathAdder V2",
      image: RazerDeathAdderV2,
      price: "PHP 2,795",
      details: "Ergonomic gaming mouse with Focus+ Optical Sensor and Speedflex cable.",
      specifications: "DPI: 20,000 | Buttons: 8 | Weight: 82g | RGB: Yes"
    },
    {
      name: "SteelSeries Apex 3 TKL",
      image: SteelSeriesApex3KL,
      price: "PHP 2,599",
      details: "Water-resistant gaming keyboard with customizable RGB lighting.",
      specifications: "Switches: Whisper-Quiet Membrane | RGB: Yes | Connectivity: Wired | Water Resistance: IP32"
    },
    {
      name: "HyperX Alloy Origins Core",
      image: HyperXAlloyOriginsCore,
      price: "PHP 4,695",
      details: "Compact TKL mechanical keyboard with HyperX Red switches.",
      specifications: "Switches: HyperX Red (Linear) | RGB: Yes | Connectivity: Wired | Frame: Aluminum"
    },
    {
      name: "Razer BlackShark V2 X",
      image: RazerBlackSharkV2X,
      price: "PHP 2,995",
      details: "Lightweight gaming headset with 50mm Triforce drivers and HyperClear Cardioid Mic.",
      specifications: "Drivers: 50mm | Connection: 3.5mm | Noise Cancellation: Passive | Weight: 240g"
    },
    {
      name: "Logitech G435 Wireless",
      image: LogitechG435Wireless,
      price: "PHP 3,295",
      details: "Ultra-lightweight gaming headset with Bluetooth and Lightspeed Wireless.",
      specifications: "Drivers: 40mm | Connection: Bluetooth & Lightspeed | Weight: 165g | Battery Life: 18 Hours"
    },
    {
      name: "SteelSeries QcK Heavy Mouse Pad",
      image: SteelSeriesQcKHeavyMousePad,
      price: "PHP 1,495",
      details: "Thick gaming mouse pad with micro-woven cloth for precision tracking.",
      specifications: "Size: Large | Material: Cloth | Base: Non-Slip Rubber"
    },
    {
      name: "HyperX Pulsefire Haste",
      image: HyperXPulsefireHaste, 
      price: "PHP 2,195",
      details: "Ultra-light honeycomb gaming mouse with Pixart 3335 sensor.",
      specifications: "DPI: 16,000 | Buttons: 6 | Weight: 59g | RGB: Yes"
    }
  ],
  brands: ["Logitech", "Razer", "SteelSeries", "HyperX"]
}
];


//Generating a sample products above by using item category or components
const generateSampleProducts = (category) => {
  const categoryData = menuItems.find((item) => item.category === category);

  if (!categoryData || !categoryData.products) {
    return []; // Return an empty array to prevent errors
  }

  return categoryData.products; 
};


  // Inside PC-Parts.js
  //Function for a notification in cart-icon
  export const updateCartIcon = () => {
    console.log(document.querySelector(".cart-icon"))
    const cartIcon = document.querySelector(".cart-icon");
    if (!cartIcon) return; // Prevent errors if cart icon is not found
  
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    cartIcon.setAttribute("data-count", cartCount);
  };
  

function PCCustomized() {
  const location = useLocation();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [manufacturerOpen, setManufacturerOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [cart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
  const [selectedItem, setSelectedItem] = useState(0); // Start with CPU as default
  const [unlockedCategories, setUnlockedCategories] = useState([0]); // Only CPU unlocked initially
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);


    // Track purchased categories to unlock next components
    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const purchasedCategories = new Set();
      
      cartItems.forEach(item => {
        const categoryIndex = menuItems.findIndex(menuItem => 
          menuItem.products.some(product => product.name === item.name)
        );
        if (categoryIndex !== -1) purchasedCategories.add(categoryIndex);
      });
  
      // Unlock categories in sequence (CPU → Motherboard → GPU → etc.)
      const newUnlocked = [0]; // CPU is always unlocked
      for (let i = 1; i < menuItems.length; i++) {
        if (purchasedCategories.has(i - 1)) {
          newUnlocked.push(i);
        } else {
          break; // Stop at first missing category
        }
      }
      
      setUnlockedCategories(newUnlocked);
    }, [cartCount]);
  

    useEffect(() => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const count = cartItems.reduce((acc, item) => acc + item.quantity, 0);
      setCartCount(count);
    }, [cartCount]);
    
  


  //Function to compute the total price
  const getPrice = (item) => {
    if (!item.price) return 0;
    return typeof item.price === "number" 
      ? item.price 
      : parseFloat(item.price.replace(/[^\d.]/g, "")) || 0;
  };
  

  useEffect(() => {
    const calculateTotalPrice = () => {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      return cartItems.reduce((acc, item) => acc + getPrice(item) * item.quantity, 0);
    };
  
    setTotalPrice(calculateTotalPrice());
  }, [cart]); // ✅ No warning, no unnecessary function dependencies




  // Listen for cart reset event in QueuingDisplay
  useEffect(() => {
    const handleCartReset = () => {
      setCartCount(0);
      setTotalPrice(0);
      localStorage.setItem("cartCount", "0");
      localStorage.setItem("cartTotal", "0");
    };
  
    window.addEventListener("cartReset", handleCartReset);
    return () => window.removeEventListener("cartReset", handleCartReset);
  }, []);
  


  // Function to clear cart and reset values when clicking button cancel-item and start-over
const clearCart = () => {
  localStorage.removeItem("cart");  // Clear cart from localStorage
  setCartCount(0);                  // Reset cart count
  setTotalPrice(0);                  // Reset total price
};

// Cancel Order - Only clears the cart without navigation
const handleCancelOrder = () => {
  clearCart();
};

// Start Over - Clears cart and redirects to "/app"
const handleStartOver = () => {
  clearCart();
  navigate("/app");
};




  //Fuction to identify the fetch products listed above
  useEffect(() => {
    if (menuItems.length > 0 && selectedItem >= 0 && selectedItem < menuItems.length) {
      const selectedCategory = menuItems[selectedItem]?.category;
  
      if (selectedCategory) {
        console.log("Fetching products for category:", selectedCategory);
  
        const fetchedProducts = generateSampleProducts(selectedCategory); 
  
        const updatedProducts = fetchedProducts.map(product => ({
          ...product,
          price: product.price
            ? Number(product.price.replace(/[^\d.]/g, "")) // ✅ Extracts only numbers
            : null,  // ✅ Use null for unavailable prices
          details: product.details || "No details available",
          specifications: product.specifications || "No specifications provided"
        }));
  
        setProducts(updatedProducts);
      } else {
        setProducts([]); 
      }
    }
  }, [selectedItem]);
  
  







    //Function for every Category or Components
    const handleMenuItemClick = (index) => {
      if (unlockedCategories.includes(index)) {
        setSelectedItem(index);
      }
    };



  //Function for Product-List
  const handleProductClick = (category, product, index) => {
    const safeCategory = category || "unknown-category"; 
  
    const formattedPrice = 
      typeof product.price === "number"
        ? product.price
        : (typeof product.price === "string" 
            ? parseFloat(product.price.replace(/[^\d.]/g, "")) || 0 
            : 0);
  
    navigate(`/product/${safeCategory}-${index}`, { 
      state: { 
        productName: product.name,
        productPrice: formattedPrice,
        productImage: product.image || "./assets/default.png",
        details: product.details || "No details available.",
        specifications: product.specifications || "No specifications provided.",
        previousCategory: selectedItem,
      }
    });
  };
  
  

  
    // Toggle filter pop-up
    //Function for Filter & Sort
    const toggleFilterPopup = () => setShowFilter(!showFilter);

    // Close pop-up when clicking outside
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("popup-overlay")) {
        setShowFilter(false);
      }
    };


  return (
    <div className="pc-parts-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo1">
          <img src={logo1} alt="PC Wise" className="logo" />
        </div>
        <div className="menu">
          {menuItems.map((item, index) => (
            <button
                key={index}
                className={`menu-item ${
                  selectedItem === index ? "active" : "inactive"
                } ${!unlockedCategories.includes(index) ? "locked" : ""}`}
                onClick={() => handleMenuItemClick(index)}
                disabled={!unlockedCategories.includes(index)} // 🔒 disabled if locked
              >

              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <span className="menu-item-text">{item.name}</span>
            </button>
          ))}
        </div>
            {/* Back Button at the Bottom */}
            <div className="back-button-container">
              <button className="back-button" onClick={() => navigate("/transaction")}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back</span>
              </button>
            </div>
        </div>
      

          {/* Main Content with Scrollbar */}
          <div className="main-content">
        {/* Product Category Header */}
        <div className="category-header">
          <h2 className="category-title">{menuItems[selectedItem].name}</h2>
          <span className="category-count">[{products.length}]</span>
        </div>

        {!unlockedCategories.includes(selectedItem) && (
          <div className="unlock-message">
            <p>Please select a {menuItems[selectedItem - 1]?.name} first</p>
          </div>
        )}

        {unlockedCategories.includes(selectedItem) && (
          <>
            <div className="brand-filter-container">
              <div className="brand-section">
                <p className="brand-label">Brands:</p>
                <div className="brand-list">
                  {menuItems[selectedItem].brands?.map((brand, index) => (
                    <div key={index} className="brand-item">
                      <span>{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button className="filter-button" onClick={toggleFilterPopup}>FILTER & SORT</button>
            </div>

        
          {/* Product List */}
          <div className="scroll-container">
            <div className="grid">
              {products && products.length > 0 ? (
                products.map((product, idx) => (
                  <button
                    key={`${product.name}-${idx}`} // ✅ Ensure unique key by combining name and index
                    className="grid-item"
                    onClick={() =>
                      handleProductClick(
                        menuItems[selectedItem]?.category || "unknown",
                        product,
                        idx
                      )
                    }
                    aria-label={`View details for ${product.name}`}
                  >
                    <div className="dot"></div>
                    <div>{product.name}</div>
                    <div className="price">
                      {product.price
                        ? `₱${product.price.toLocaleString()}`
                        : "Price Unavailable"}
                    </div>
                  </button>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>
          </div>
                </>
                )}
          </div>

    <div className="bottom-section">
    <div className="stats-icon">
        <img
          src={Stats}
          alt="Statistics Icon"
          onClick={() => {
            if (cartCount > 0) navigate("/pentagon-stats");
          }}
        />
        <p>STATISTICS</p>
      </div>

      <div className="process-container">
      <div className="order-info">
      <div className="cart-icon" data-count={cartCount}>
          <img src={Chest} alt="Cart Icon" />
          <span className="notification">{cartCount}</span>
        </div>
        <span className="price">₱{totalPrice.toLocaleString()}</span>
        <button className="order-summary" onClick={() => navigate("/order-summary")}>
          Order Summary
        </button>
      </div>
      <div className="action-buttons">
        <button className="cancel-order" onClick={handleCancelOrder}>Cancel Order</button>
        <button className="start-over" onClick={handleStartOver}>Start Over</button>
      </div>
      </div>
    </div>

        {/* Filter & Sort Pop-up */}
        {showFilter && (
          <div className="popup-overlay" onClick={handleOutsideClick}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
              <h3 className="popup-title">FILTER & SORT</h3>
              <p className="clear-all">Clear All</p>

              {/* Manufacturer Filter */}
              <div className="filter-section">
                <div className="filter-header">
                  <span>MANUFACTURER</span>
                  <button onClick={() => setManufacturerOpen(!manufacturerOpen)} className="toggle-button">
                    {manufacturerOpen ? "−" : "+"}
                  </button>
                </div>
                {manufacturerOpen && (
                  <div className="filter-options">
                    <button className="filter-btn active">ALL</button>
                    <button className="filter-btn">AMD</button>
                    <button className="filter-btn">Intel</button>
                  </div>
                )}
              </div>

              {/* Series Filter */}
              <div className="filter-section">
                <div className="filter-header">
                  <span>SERIES</span>
                  <button onClick={() => setSeriesOpen(!seriesOpen)} className="toggle-button">
                    {seriesOpen ? "−" : "+"}
                  </button>
                </div>
                {seriesOpen && (
                  <div className="filter-options">
                    <button className="filter-btn active">ALL</button>
                    <button className="filter-btn">AMD Ryzen</button>
                    <button className="filter-btn">Intel Core</button>
                  </div>
                )}
              </div>

              {/* Price Filter */}
              <div className="filter-section">
                <div className="filter-header">
                  <span>PRICE</span>
                  <button onClick={() => setPriceOpen(!priceOpen)} className="toggle-button">
                    {priceOpen ? "−" : "+"}
                  </button>
                </div>
                {priceOpen && (
                  <div className="price-slider">
                    <span>₱0</span>
                    <input type="range" min="0" max="99999" step="1000" />
                    <span>₱99999</span>
                  </div>
                )}
              </div>

              {/* Games Filter */}
              <div className="filter-section">
                <div className="filter-header">
                  <span>GAMES</span>
                  <button onClick={() => setGamesOpen(!gamesOpen)} className="toggle-button">
                    {gamesOpen ? "−" : "+"}
                  </button>
                </div>
                {gamesOpen && (
                  <div className="filter-options">
                    <button className="filter-btn active">DOTA 2</button>
                    <button className="filter-btn">MINECRAFT</button>
                    <button className="filter-btn">LEFT4DEAD 2</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

export default PCCustomized;