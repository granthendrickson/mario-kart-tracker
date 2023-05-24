import React from 'react';

// Components
import Cup from './Cup';

// Styles
import '../styles/tracks.css';

// IMAGES
import rosalinaHero from '../images/char_rosalina.png';
import banner from '../images/scroller3.png';

// Mushroom Cup
import mushroomCupIcon from '../images/cup-icons/MK8_Mushroom_Cup_Emblem.webp';
import marioKartStadium from '../images/track-images/mushroom-cup/MK8_Mario_Kart_Stadium_Course_Icon.webp';
import waterPark from '../images/track-images/mushroom-cup/MK8_Water_Park_Course_Icon.webp';
import sweetSweetCanyon from '../images/track-images/mushroom-cup/MK8_Sweet_Sweet_Canyon_Course_Icon.png';
import thwompRuins from '../images/track-images/mushroom-cup/MK8_Thwomp_Ruins_Course_Icon.png';

// Flower Cup
import flowerCupIcon from '../images/cup-icons/MK8_Flower_Cup_Emblem.webp';
import marioCircuit from '../images/track-images/flower-cup/MK8_Mario_Circuit_Course_Icon.png';
import toadHarbor from '../images/track-images/flower-cup/MK8_Toad_Harbor_Course_Icon.png';
import twistedMansion from '../images/track-images/flower-cup/MK8_Twisted_Mansion_Course_Icon.webp';
import shyGuyFalls from '../images/track-images/flower-cup/MK8_Shy_Guy_Falls_Course_Icon.png';

// Star Cup
import starCupIcon from '../images/cup-icons/MK8_Star_Cup_Icon.webp';
import sunShineAirport from '../images/track-images/star-cup/MK8_Sunshine_Airport_Course_Icon.png';
import dolphinShoals from '../images/track-images/star-cup/MK8_Dolphin_Shoals_Course_Icon.png';
import electrodome from '../images/track-images/star-cup/MK8_Electrodrome_Course_Icon.png';
import mountWario from '../images/track-images/star-cup/MK8_Mount_Wario_Course_Icon.webp';

// Special Cup
import specialCupIcon from '../images/cup-icons/MK8_Special_Cup_Emblem.webp';
import cloudTopCruise from '../images/track-images/special-cup/MK8_Cloudtop_Cruise_Course_Icon.webp';
import boneDryDunes from '../images/track-images/special-cup/MK8_Bone-Dry_Dunes_Course_Icon.png';
import bowsersCastle from "../images/track-images/special-cup/MK8_Bowser's_Castle_Course_Icon.webp";
import rainbowRoad from '../images/track-images/special-cup/MK8_Rainbow_Road_Course_Icon.png';

// Shell Cup
import shellCupIcon from '../images/cup-icons/MK8_Shell_Cup_Emblem.webp';
import mooMooMeadows from '../images/track-images/shell-cup/MK8_Wii_Moo_Moo_Meadows_Course_Icon.webp';
import marioCircuitGBA from '../images/track-images/shell-cup/MK8_GBA_Mario_Circuit_Course_Icon.png';
import cheepCheepBeach from '../images/track-images/shell-cup/MK8_DS_Cheep_Cheep_Beach_Course_Icon.png';
import toadsTurnpike from "../images/track-images/shell-cup/MK8_N64_Toad's_Turnpike_Course_Icon.webp";

// Banana Cup
import bananaCupIcon from '../images/cup-icons/MK8_Banana_Cup_Emblem.webp';
import dryDryDesert from '../images/track-images/banana-cup/MK8_GCN_Dry_Dry_Desert_Course_Icon.png';
import donutPlains3 from '../images/track-images/banana-cup/MK8_SNES_Donut_Plains_3_Course_Icon.png';
import royalRaceway from '../images/track-images/banana-cup/MK8_N64_Royal_Raceway_Course_Icon.webp';
import dkJungle from '../images/track-images/banana-cup/MK8_3DS_DK_Jungle_Course_Icon.webp';

// Leaf Cup
import leafCupIcon from '../images/cup-icons/MK8_Leaf_Cup_Emblem.webp';
import warioStadium from '../images/track-images/leaf-cup/MK8_DS_Wario_Stadium_Course_Icon.webp';
import sherbetLand from '../images/track-images/leaf-cup/MK8_GCN_Sherbet_Land_Course_Icon.webp';
import musicPark from '../images/track-images/leaf-cup/MK8_3DS_Music_Park_Course_Icon.webp';
import yoshiValley from '../images/track-images/leaf-cup/MK8_N64_Yoshi_Valley_Course_Icon.webp';

// Lightning Cup
import lightningCupIcon from '../images/cup-icons/MK8_Lightning_Cup_Emblem.webp';
import tickTockClock from '../images/track-images/lightning-cup/MK8_DS_Tick-Tock_Clock_Course_Icon.png';
import piranhaPlantSlide from '../images/track-images/lightning-cup/MK8_3DS_Piranha_Plant_Slide_Course_Icon.webp';
import grumbleVolcano from '../images/track-images/lightning-cup/MK8_Wii_Grumble_Volcano_Course_Icon.png';
import rainbowRoadN64 from '../images/track-images/lightning-cup/MK8_N64_Rainbow_Road_Course_Icon.webp';

// Egg Cup
import eggCupIcon from '../images/cup-icons/MK8_Egg_Cup_Emblem.webp';
import yoshiCircuit from '../images/track-images/egg-cup/MK8_GCN_Yoshi_Circuit_Course_Icon.png';
import exciteikeArena from '../images/track-images/egg-cup/MK8_Excitebike_Arena_Course_Icon.webp';
import dragonDriftway from '../images/track-images/egg-cup/MK8_Dragon_Driftway_Course_Icon.png';
import muteCity from '../images/track-images/egg-cup/MK8_Mute_City_Course_Icon.png';

// Triforce Cup
import triforceCup from '../images/cup-icons/MK8_Triforce_Cup_Emblem.webp';
import wariosGoldmine from "../images/track-images/triforce-cup/MK8_Wii_Wario's_Gold_Mine_Course_Icon.png";
import rainbowRoadSNES from '../images/track-images/triforce-cup/MK8_SNES_Rainbow_Road_Course_Icon.png';
import iceIceOutpost from '../images/track-images/triforce-cup/MK8_Ice_Ice_Outpost_Course_Icon.webp';
import hyruleCircuit from '../images/track-images/triforce-cup/MK8_Hyrule_Circuit_Course_Icon.webp';

// Crossing Cup
import crossingCupIcon from '../images/cup-icons/MK8_Crossing_Cup_Emblem.webp';
import babyPark from '../images/track-images/crossing-cup/MK8_GCN_Baby_Park_Course_Icon.png';
import cheeseLand from '../images/track-images/crossing-cup/MK8_GBA_Cheese_Land_Course_Icon.png';
import wildWoods from '../images/track-images/crossing-cup/MK8_Wild_Woods_Course_Icon.png';
import animalCrossing from '../images/track-images/crossing-cup/MK8_Animal_Crossing_Course_Icon.png';

// Bell Cup
import bellCupIcon from '../images/cup-icons/MK8_Bell_Cup_Emblem.webp';
import neoBowserCity from '../images/track-images/bell-cup/MK8_3DS_Neo_Bowser_City_Course_Icon.png';
import ribbonRoad from '../images/track-images/bell-cup/MK8_GBA_Ribbon_Road_Course_Icon.png';
import superBellSubway from '../images/track-images/bell-cup/MK8_Super_Bell_Subway_Course_Icon.webp';
import bigBlue from '../images/track-images/bell-cup/MK8_Big_Blue_Course_Icon.webp';

// Golden Dash Cup
import goldenDashCupIcon from '../images/cup-icons/MK8D_BCP_Golden_Dash_Emblem.webp';
import parisPromenade from '../images/track-images/golden-dash-cup/MK8D_Tour_Paris_Promenade_Course_Icon.png';
import toadCircuit from '../images/track-images/golden-dash-cup/MK8D_3DS_Toad_Circuit_Course_Icon.webp';
import chocoMountain from '../images/track-images/golden-dash-cup/MK8D_N64_Choco_Mountain_Course_Icon.png';
import coconutMall from '../images/track-images/golden-dash-cup/MK8D_Wii_Coconut_Mall_Course_Icon.png';

// Lucky Cat Cup
import luckyCatCupIcon from '../images/cup-icons/MK8D_BCP_Lucky_Cat_Emblem.webp';
import tokyoBlur from '../images/track-images/lucky-cat-cup/MK8D_Tour_Tokyo_Blur_Course_Icon.png';
import shroomRidge from '../images/track-images/lucky-cat-cup/MK8D_DS_Shroom_Ridge_Course_Icon.webp';
import skyGarden from '../images/track-images/lucky-cat-cup/MK8D_GBA_Sky_Garden_Course_Icon.webp';
import ninjaHideaway from '../images/track-images/lucky-cat-cup/MK8D_Ninja_Hideaway_Course_Icon.png';

// Turnip Cup
import turnipCupIcon from '../images/cup-icons/MK8D_BCP_Turnip_Emblem.webp';
import newYorkMinute from '../images/track-images/turnip-cup/MK8D_Tour_New_York_Minute_Course_Icon.png';
import marioCircuit3 from '../images/track-images/turnip-cup/MK8D_SNES_Mario_Circuit_3_Course_Icon.webp';
import kalamariDesert from '../images/track-images/turnip-cup/MK8D_N64_Kalimari_Desert_Course_Icon.webp';
import waluigiPinball from '../images/track-images/turnip-cup/MK8D_DS_Waluigi_Pinball_Course_Icon.webp';

// Propeller Cup
import propellerCupIcon from '../images/cup-icons/MK8D_BCP_Propeller_Emblem.webp';
import sydneySprint from '../images/track-images/propeller-cup/MK8D_Tour_Sydney_Sprint_Course_Icon.png';
import snowLand from '../images/track-images/propeller-cup/MK8D_GBA_Snow_Land_Course_Icon.png';
import mushroomGorge from '../images/track-images/propeller-cup/MK8D_Wii_Mushroom_Gorge_Course_Icon.webp';
import skyHighSundae from '../images/track-images/propeller-cup/MK8D_Sky-High_Sundae_Course_Icon.webp';

// Rock Cup
import rockCupIcon from '../images/cup-icons/MK8D_BCP_Rock_Emblem.webp';
import londonLoop from '../images/track-images/rock-cup/MK8D_Tour_London_Loop_Course_Icon.png';
import booLake from '../images/track-images/rock-cup/MK8D_GBA_Boo_Lake_Course_Icon.png';
import rockRockMountain from '../images/track-images/rock-cup/MK8D_3DS_Rock_Rock_Mountain_Course_Icon.png';
import mapleTreeway from '../images/track-images/rock-cup/MK8D_Wii_Maple_Treeway_Course_Icon.webp';

// Moon Cup
import moonCupIcon from '../images/cup-icons/MK8D_BCP_Moon_Emblem.webp';
import berlinByways from '../images/track-images/moon-cup/MK8D_Tour_Berlin_Byways_Course_Icon.png';
import peachGarden from '../images/track-images/moon-cup/MK8D_DS_Peach_Gardens_Course_Icon.webp';
import merryMountain from '../images/track-images/moon-cup/MK8D_Merry_Mountain_Course_Icon.webp';
import rainbowRoad3DS from '../images/track-images/moon-cup/MK8D_3DS_Rainbow_Road_Course_Icon.png';

// Fruit Cup
import fruitCupIcon from '../images/cup-icons/MK8D_BCP_Fruit_Emblem.webp';
import amsterdamDrift from '../images/track-images/fruit-cup/MK8D_Tour_Amsterdam_Drift_Course_Icon.webp';
import riversidePark from '../images/track-images/fruit-cup/MK8D_Tour_Amsterdam_Drift_Course_Icon.webp';
import dkSummit from '../images/track-images/fruit-cup/MK8D_Wii_DK_Summit_Course_Icon.webp';
import yoshisIsland from "../images/track-images/fruit-cup/MK8D_Yoshi's_Island_Course_Icon.webp";

// Boomerang Cup
import boomerangCupIcon from '../images/cup-icons/MK8D_BCP_Boomerang_Emblem.webp';
import bangkokRush from '../images/track-images/boomerang-cup/MK8D_Tour_Bangkok_Rush_Course_Icon.webp';
import marioCircuitDS from '../images/track-images/boomerang-cup/MK8D_DS_Mario_Circuit_Course_Icon.png';
import waluigiStadium from '../images/track-images/boomerang-cup/MK8D_GCN_Waluigi_Stadium_Course_Icon.webp';
import singaporeSpeedway from '../images/track-images/boomerang-cup/MK8D_Tour_Singapore_Speedway_Course_Icon.png';

export default function Tracks() {
  const toggleBase = () => {
    var base = document.getElementById('base');
    var dlc = document.getElementById('dlc');
    var btn = document.getElementById('btn');

    var toggleBase = document.getElementById('toggle-base');
    var toggleDlc = document.getElementById('toggle-dlc');

    base.style.left = '0px';
    dlc.style.left = '-3000px';
    btn.style.left = '0px';
    toggleBase.style.color = 'white';
    toggleDlc.style.color = 'black';
  };

  const toggleDlc = () => {
    var base = document.getElementById('base');
    var dlc = document.getElementById('dlc');
    var btn = document.getElementById('btn');

    var toggleBase = document.getElementById('toggle-base');
    var toggleDlc = document.getElementById('toggle-dlc');

    base.style.left = '-3000px';
    dlc.style.left = '0px';
    btn.style.left = '50%';
    toggleBase.style.color = 'black';
    toggleDlc.style.color = 'white';
  };

  return (
    <div className='tracks'>
      <div className='divider-down'>
        <img
          className='banner-pic-down'
          src={rosalinaHero}
          alt=''
        />
        <div className='carousel-banner-down'>
          <img
            className='banner-down'
            src={banner}
            alt=''
          />
        </div>
      </div>
      <div className='tracks-header'>
        <div className='section-header'>Tracks</div>
        <div className='button-box'>
          <div id='btn'></div>
          <button
            id='toggle-base'
            className='toggle-btn'
            onClick={toggleBase}
          >
            Base
          </button>
          <button
            id='toggle-dlc'
            className='toggle-btn'
            onClick={toggleDlc}
          >
            DLC
          </button>
        </div>
      </div>

      <div
        className='base-tracks-container'
        id='base'
      >
        <Cup
          cupPic={mushroomCupIcon}
          cupName={'Mushroom Cup'}
          track1Pic={marioKartStadium}
          track2Pic={waterPark}
          track3Pic={sweetSweetCanyon}
          track4Pic={thwompRuins}
          track1Name={'mario-kart-stadium'}
          track2Name={'water-park'}
          track3Name={'sweet-sweet-canyon'}
          track4Name={'thwomp-ruins'}
        />
        <Cup
          cupPic={flowerCupIcon}
          cupName={'Flower Cup'}
          track1Pic={marioCircuit}
          track2Pic={toadHarbor}
          track3Pic={twistedMansion}
          track4Pic={shyGuyFalls}
          track1Name={'mario-circuit'}
          track2Name={'toad-harbor'}
          track3Name={'twisted-mansion'}
          track4Name={'shy-guy-falls'}
        />
        <Cup
          cupPic={starCupIcon}
          cupName={'Star Cup'}
          track1Pic={sunShineAirport}
          track2Pic={dolphinShoals}
          track3Pic={electrodome}
          track4Pic={mountWario}
          track1Name={'sunshine-airport'}
          track2Name={'dolphin-shoals'}
          track3Name={'electrodrome'}
          track4Name={'mount-wario'}
        />
        <Cup
          cupPic={specialCupIcon}
          cupName={'Special Cup'}
          track1Pic={cloudTopCruise}
          track2Pic={boneDryDunes}
          track3Pic={bowsersCastle}
          track4Pic={rainbowRoad}
          track1Name={'cloudtop-cruise'}
          track2Name={'bone-dry-dunes'}
          track3Name={'bowsers-castle'}
          track4Name={'rainbow-road'}
        />
        <Cup
          cupPic={shellCupIcon}
          cupName={'Shell Cup'}
          track1Pic={mooMooMeadows}
          track2Pic={marioCircuitGBA}
          track3Pic={cheepCheepBeach}
          track4Pic={toadsTurnpike}
          track1Name={'Wii-moo-moo-meadows'}
          track2Name={'GBA-mario-circuit'}
          track3Name={'DS-cheep-cheep-beach'}
          track4Name={'N64-toads-turnpike'}
        />
        <Cup
          cupPic={bananaCupIcon}
          cupName={'Banana Cup'}
          track1Pic={dryDryDesert}
          track2Pic={donutPlains3}
          track3Pic={royalRaceway}
          track4Pic={dkJungle}
          track1Name={'GCN-dry-dry-desert'}
          track2Name={'SNES-donut-plains-3'}
          track3Name={'N64-royal-raceway'}
          track4Name={'3DS-dk-jungle'}
        />
        <Cup
          cupPic={leafCupIcon}
          cupName={'Leaf Cup'}
          track1Pic={warioStadium}
          track2Pic={sherbetLand}
          track3Pic={musicPark}
          track4Pic={yoshiValley}
          track1Name={'DS-wario-stadium'}
          track2Name={'GCN-sherbet-land'}
          track3Name={'3DS-music-park'}
          track4Name={'N64-yoshi-valley'}
        />
        <Cup
          cupPic={lightningCupIcon}
          cupName={'Lightning Cup'}
          track1Pic={tickTockClock}
          track2Pic={piranhaPlantSlide}
          track3Pic={grumbleVolcano}
          track4Pic={rainbowRoadN64}
          track1Name={'DS-tick-tock-clock'}
          track2Name={'3DS-piranha-plant-slide'}
          track3Name={'Wii-grumble-volcano'}
          track4Name={'N64-rainbow-road'}
        />
        <Cup
          cupPic={eggCupIcon}
          cupName={'Egg Cup'}
          track1Pic={yoshiCircuit}
          track2Pic={exciteikeArena}
          track3Pic={dragonDriftway}
          track4Pic={muteCity}
          track1Name={'GCN-yoshis-circuit'}
          track2Name={'excitebike-arena'}
          track3Name={'dragon-driftway'}
          track4Name={'mute-city'}
        />
        <Cup
          cupPic={triforceCup}
          cupName={'Triforce Cup'}
          track1Pic={wariosGoldmine}
          track2Pic={rainbowRoadSNES}
          track3Pic={iceIceOutpost}
          track4Pic={hyruleCircuit}
          track1Name={'Wii-warios-gold-mine'}
          track2Name={'SNES-rainbow-road'}
          track3Name={'ice-ice-outpost'}
          track4Name={'hyrule-circuit'}
        />
        <Cup
          cupPic={crossingCupIcon}
          cupName={'Crossing Cup'}
          track1Pic={babyPark}
          track2Pic={cheeseLand}
          track3Pic={wildWoods}
          track4Pic={animalCrossing}
          track1Name={'GCN-baby-park'}
          track2Name={'GBA-cheese-land'}
          track3Name={'wild-woods'}
          track4Name={'animal-crossing'}
        />
        <Cup
          cupPic={bellCupIcon}
          cupName={'Bell Cup'}
          track1Pic={neoBowserCity}
          track2Pic={ribbonRoad}
          track3Pic={superBellSubway}
          track4Pic={bigBlue}
          track1Name={'3DS-neo-bowser-city'}
          track2Name={'GBA-ribbon-road'}
          track3Name={'super-bell-subway'}
          track4Name={'big-blue'}
        />
      </div>
      <div
        className='dlc-tracks-container'
        id='dlc'
      >
        <Cup
          cupPic={goldenDashCupIcon}
          cupName={'Golden Dash Cup'}
          track1Pic={parisPromenade}
          track2Pic={toadCircuit}
          track3Pic={chocoMountain}
          track4Pic={coconutMall}
          track1Name={'paris-promenade'}
          track2Name={'toad-circuit'}
          track3Name={'choco-mountain'}
          track4Name={'coconut-mall'}
        />
        <Cup
          cupPic={luckyCatCupIcon}
          cupName={'Lucky Cat Cup'}
          track1Pic={tokyoBlur}
          track2Pic={shroomRidge}
          track3Pic={skyGarden}
          track4Pic={ninjaHideaway}
          track1Name={'tokyo-blur'}
          track2Name={'shroom-ridge'}
          track3Name={'sky-garden'}
          track4Name={'ninja-hideaway'}
        />
        <Cup
          cupPic={turnipCupIcon}
          cupName={'Turnip Cup'}
          track1Pic={newYorkMinute}
          track2Pic={marioCircuit3}
          track3Pic={kalamariDesert}
          track4Pic={waluigiPinball}
          track1Name={'new-york-minute'}
          track2Name={'mario-circuit-3'}
          track3Name={'kalamri-desert'}
          track4Name={'waluigi-pinball'}
        />
        <Cup
          cupPic={propellerCupIcon}
          cupName={'Propeller Cup'}
          track1Pic={sydneySprint}
          track2Pic={snowLand}
          track3Pic={mushroomGorge}
          track4Pic={skyHighSundae}
          track1Name={'sydney-sprint'}
          track2Name={'snow-land'}
          track3Name={'mushroom-gorge'}
          track4Name={'sky-high-sundae'}
        />
        <Cup
          cupPic={rockCupIcon}
          cupName={'Rock Cup'}
          track1Pic={londonLoop}
          track2Pic={booLake}
          track3Pic={rockRockMountain}
          track4Pic={mapleTreeway}
          track1Name={'london-loop'}
          track2Name={'boo-lake'}
          track3Name={'rock-rock-mountain'}
          track4Name={'maple-treeway'}
        />
        <Cup
          cupPic={moonCupIcon}
          cupName={'Moon Cup'}
          track1Pic={berlinByways}
          track2Pic={peachGarden}
          track3Pic={merryMountain}
          track4Pic={rainbowRoad3DS}
          track1Name={'berlin-byways'}
          track2Name={'peach-garden'}
          track3Name={'merry-mountain'}
          track4Name={'3DS-rainbow-road'}
        />
        <Cup
          cupPic={fruitCupIcon}
          cupName={'Fruit Cup'}
          track1Pic={amsterdamDrift}
          track2Pic={riversidePark}
          track3Pic={dkSummit}
          track4Pic={yoshisIsland}
          track1Name={'amsterdam-drift'}
          track2Name={'riverside-park'}
          track3Name={'dk-summit'}
          track4Name={'yoshis-island'}
        />
        <Cup
          cupPic={boomerangCupIcon}
          cupName={'Boomerang Cup'}
          track1Pic={bangkokRush}
          track2Pic={marioCircuitDS}
          track3Pic={waluigiStadium}
          track4Pic={singaporeSpeedway}
          track1Name={'bangkok-rush'}
          track2Name={'DS-mario-circuit'}
          track3Name={'waluigi-stadium'}
          track4Name={'singapore-speedway'}
        />
      </div>
    </div>
  );
}
