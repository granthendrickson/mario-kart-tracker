import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from 'rsuite';
import { ArowBack } from '@rsuite/icons';

// Firebase
import { db } from '../firebase';
import { collection, getDocs, doc, onSnapshot } from 'firebase/firestore';

// Components
import TimeTile from '../components/TimeTile';

// Track Minimap Images

// Mushroom Cup
import MK8marioKartStadium from '../images/track-minimaps/mushroom-cup/mario-kart-stadium.png';
import waterPark from '../images/track-minimaps/mushroom-cup/water-park.png';
import sweetSweetCanyon from '../images/track-minimaps/mushroom-cup/sweet-sweet-canyon.webp';
import thwompRuins from '../images/track-minimaps/mushroom-cup/thwomp-ruins.png';

// Flower Cup
import marioCircuit from '../images/track-minimaps/flower-cup/MK8_Shy_Guy_Falls_Map.png';
import toadHarbor from '../images/track-minimaps/flower-cup/MK8_Toad_Harbor_Map.png';
import twistedMansion from '../images/track-minimaps/flower-cup/MK8_Twisted_Mansion_Map.png';
import shyGuyFalls from '../images/track-minimaps/flower-cup/MK8_Shy_Guy_Falls_Map.png';

// Star Cup
import sunShineAirport from '../images/track-minimaps/star-cup/MK8_Sunshine_Airport_Map.webp';
import dolphinShoals from '../images/track-minimaps/star-cup/MK8_Dolphin_Shoals_Map.webp';
import electrodome from '../images/track-minimaps/star-cup/MK8_Electrodrome_Map.png';
import mountWario from '../images/track-minimaps/star-cup/MK8_Mount_Wario_Map.png';

// Special Cup
import cloudTopCruise from '../images/track-minimaps/special-cup/MK8_Cloudtop_Cruise_Map.png';
import boneDryDunes from '../images/track-minimaps/special-cup/MK8_Bone-Dry_Dunes_Map.png';
import bowsersCastle from "../images/track-minimaps/special-cup/MK8_Bowser's_Castle_Map.webp";
import rainbowRoad from '../images/track-minimaps/special-cup/MK8_Rainbow_Road_Map.webp';

// Shell Cup
import mooMooMeadows from '../images/track-minimaps/shell-cup/MK8_Wii_Moo_Moo_Meadows_Map.png';
import marioCircuitGBA from '../images/track-minimaps/shell-cup/MK8_GBA_Mario_Circuit_Map.png';
import cheepCheepBeach from '../images/track-minimaps/shell-cup/MK8_DS_Cheep_Cheep_Beach_Map.png';
import toadsTurnpike from "../images/track-minimaps/shell-cup/MK8_N64_Toad's_Turnpike_Map.png";

// Banana Cup
import dryDryDesert from '../images/track-minimaps/banana-cup/MK8_GCN_Dry_Dry_Desert_Map.png';
import donutPlains3 from '../images/track-minimaps/banana-cup/MK8_SNES_Donut_Plains_3_Map.png';
import royalRaceway from '../images/track-minimaps/banana-cup/MK8_N64_Royal_Raceway_Map.png';
import dkJungle from '../images/track-minimaps/banana-cup/MK8_3DS_DK_Jungle_Map.png';

// Leaf Cup
import warioStadium from '../images/track-minimaps/leaf-cup/MK8_DS_Wario_Stadium_Map.png';
import sherbetLand from '../images/track-minimaps/leaf-cup/MK8_GCN_Sherbet_Land_Map.png';
import musicPark from '../images/track-minimaps/leaf-cup/MK8_3DS_Music_Park_Map.png';
import yoshiValley from '../images/track-minimaps/leaf-cup/MK8_N64_Yoshi_Valley_Map.png';

// Lightning Cup
import tickTockClock from '../images/track-minimaps/lightning-cup/MK8_DS_Tick-Tock_Clock_Map.png';
import piranhaPlantSlide from '../images/track-minimaps/lightning-cup/MK8_3DS_Piranha_Plant_Slide_Map.png';
import grumbleVolcano from '../images/track-minimaps/lightning-cup/MK8_Wii_Grumble_Volcano_Map.png';
import rainbowRoadN64 from '../images/track-minimaps/lightning-cup/MK8_N64_Rainbow_Road_Map.webp';

// Egg Cup
import yoshiCircuit from '../images/track-minimaps/egg-cup/MK8_GCN_Yoshi_Circuit_Map.png';
import exciteikeArena from '../images/track-minimaps/egg-cup/MK8_Excitebike_Arena_Map.png';
import dragonDriftway from '../images/track-minimaps/egg-cup/MK8_Dragon_Driftway_Map.png';
import muteCity from '../images/track-minimaps/egg-cup/MK8_Mute_City_Map.webp';

// Triforce Cup
import wariosGoldmine from "../images/track-minimaps/triforce-cup/MK8_Wii_Wario's_Gold_Mine_Map.png";
import rainbowRoadSNES from '../images/track-minimaps/triforce-cup/MK8_SNES_Rainbow_Road_Map.png';
import iceIceOutpost from '../images/track-minimaps/triforce-cup/MK8_Ice_Ice_Outpost_Map.png';
import hyruleCircuit from '../images/track-minimaps/triforce-cup/MK8_Hyrule_Circuit_Map.webp';

// Crossing Cup
import babyPark from '../images/track-minimaps/crossing-cup/MK8_GCN_Baby_Park_Map.png';
import cheeseLand from '../images/track-minimaps/crossing-cup/MK8_GBA_Cheese_Land_Map.png';
import wildWoods from '../images/track-minimaps/crossing-cup/MK8_Wild_Woods_Map.png';
import animalCrossing from '../images/track-minimaps/crossing-cup/MK8_Animal_Crossing_Map.png';

// Bell Cup
import neoBowserCity from '../images/track-minimaps/bell-cup/MK8_3DS_Neo_Bowser_City_Map.png';
import ribbonRoad from '../images/track-minimaps/bell-cup/MK8_GBA_Ribbon_Road_Map.png';
import superBellSubway from '../images/track-minimaps/bell-cup/MK8_Super_Bell_Subway_Map.png';
import bigBlue from '../images/track-minimaps/bell-cup/MK8_Big_Blue_Map.png';

export default function TrackSummary() {
  // Get the current track
  const location = useLocation();
  const trackName = location.state;

  // Get the track's display name
  const [trackDisplayName, setTrackDisplayName] = useState('');
  useEffect(() => {
    const getTrackName = (trackId) => {
      const docRef = doc(db, 'tracks', trackId);
      onSnapshot(docRef, (doc) => {
        setTrackDisplayName(doc.data().displayName);
      });
    };

    getTrackName(trackName);
  }, [trackName]);

  // Create a list of time tiles to display
  const [timeTiles, setTimeTiles] = useState([]);

  useEffect(() => {
    // Get the tracks times
    const timesUrl = 'tracks/' + trackName + '/times';
    const timesRef = collection(db, timesUrl);

    getDocs(timesRef)
      .then((snapshot) => {
        // create an array of time objects
        let times = [];
        snapshot.docs.forEach((doc) => {
          times.push({ ...doc.data() });
        });
        console.log(times);

        // Sort the time objects by fastest time
        times.sort((a, b) => (a.time > b.time ? 1 : -1));

        // Create "time tiles" for each time on the track
        setTimeTiles(
          times.map((time, index) => (
            <TimeTile
              recordHolder={time.recordHolder}
              character={time.character}
              time={time.time}
              key={index}
            />
          ))
        );
      })
      .catch((error) => console.log(error));
  }, [trackName]);

  // Find out which track minimap & world record to use
  const [trackMiniMap, setTrackMiniMap] = useState();
  const [trackWR, setTrackWR] = useState();
  useEffect(() => {
    const trackName = location.state;

    if (trackName === 'mario-kart-stadium') {
      setTrackMiniMap(MK8marioKartStadium);
      setTrackWR('1:34.359');
    }
    if (trackName === 'water-park') {
      setTrackMiniMap(waterPark);
      setTrackWR('1:39.501');
    }
    if (trackName === 'sweet-sweet-canyon') {
      setTrackMiniMap(sweetSweetCanyon);
      setTrackWR('1:48.455');
    }
    if (trackName === 'thwomp-ruins') {
      setTrackMiniMap(thwompRuins);
      setTrackWR('1:48.307');
    }
    if (trackName === 'mario-circuit') {
      setTrackMiniMap(marioCircuit);
      setTrackWR('1:45.034');
    }
    if (trackName === 'toad-harbor') {
      setTrackMiniMap(toadHarbor);
      setTrackWR('2:01.794');
    }
    if (trackName === 'twisted-mansion') {
      setTrackMiniMap(twistedMansion);
      setTrackWR('1:53.499');
    }
    if (trackName === 'shy-guy-falls') {
      setTrackMiniMap(shyGuyFalls);
      setTrackWR('1:55.742');
    }
    if (trackName === 'sunshine-airport') {
      setTrackMiniMap(sunShineAirport);
      setTrackWR('1:57.399');
    }
    if (trackName === 'dolphin-shoals') {
      setTrackMiniMap(dolphinShoals);
      setTrackWR('1:52.798');
    }
    if (trackName === 'electrodrome') {
      setTrackMiniMap(electrodome);
      setTrackWR('1:55.581');
    }
    if (trackName === 'mount-wario') {
      setTrackMiniMap(mountWario);
      setTrackWR('1:41.838');
    }
    if (trackName === 'cloudtop-cruise') {
      setTrackMiniMap(cloudTopCruise);
      setTrackWR('1:59.551');
    }
    if (trackName === 'bone-dry-dunes') {
      setTrackMiniMap(boneDryDunes);
      setTrackWR('1:46.849');
    }
    if (trackName === 'bowsers-castle') {
      setTrackMiniMap(bowsersCastle);
      setTrackWR('1:57.655');
    }
    if (trackName === 'rainbow-road') {
      setTrackMiniMap(rainbowRoad);
      setTrackWR('1:58.454');
    }
    if (trackName === 'Wii-moo-moo-meadows') {
      setTrackMiniMap(mooMooMeadows);
      setTrackWR('1:23.981');
    }
    if (trackName === 'GBA-mario-circuit') {
      setTrackMiniMap(marioCircuitGBA);
      setTrackWR('1:23.414');
    }
    if (trackName === 'DS-cheep-cheep-beach') {
      setTrackMiniMap(cheepCheepBeach);
      setTrackWR('1:46.556');
    }
    if (trackName === 'N64-toads-turnpike') {
      setTrackMiniMap(toadsTurnpike);
      setTrackWR('1:45.845');
    }
    if (trackName === 'GCN-dry-dry-desert') {
      setTrackMiniMap(dryDryDesert);
      setTrackWR('1:52.887');
    }
    if (trackName === 'SNES-donut-plains-3') {
      setTrackMiniMap(donutPlains3);
      setTrackWR('1:12.833');
    }
    if (trackName === 'N64-royal-raceway') {
      setTrackMiniMap(royalRaceway);
      setTrackWR('1:55.277');
    }
    if (trackName === '3DS-dk-jungle') {
      setTrackMiniMap(dkJungle);
      setTrackWR('2:00.994');
    }
    if (trackName === 'DS-wario-stadium') {
      setTrackMiniMap(warioStadium);
      setTrackWR('1:50.614');
    }
    if (trackName === 'GCN-sherbet-land') {
      setTrackMiniMap(sherbetLand);
      setTrackWR('1:46.625');
    }
    if (trackName === '3DS-music-park') {
      setTrackMiniMap(musicPark);
      setTrackWR('1:50.614');
    }
    if (trackName === 'N64-yoshi-valley') {
      setTrackMiniMap(yoshiValley);
      setTrackWR('1:57.908');
    }
    if (trackName === 'DS-tick-tock-clock') {
      setTrackMiniMap(tickTockClock);
      setTrackWR('1:41.679');
    }
    if (trackName === '3DS-piranha-plant-slide') {
      setTrackMiniMap(piranhaPlantSlide);
      setTrackWR('1:58.313');
    }
    if (trackName === 'Wii-grumble-volcano') {
      setTrackMiniMap(grumbleVolcano);
      setTrackWR('1:52.643');
    }
    if (trackName === 'N64-rainbow-road') {
      setTrackMiniMap(rainbowRoadN64);
      setTrackWR('1:19.406');
    }
    if (trackName === 'GCN-yoshis-circuit') {
      setTrackMiniMap(yoshiCircuit);
      setTrackWR('1:41:614');
    }
    if (trackName === 'excitebike-arena') {
      setTrackMiniMap(exciteikeArena);
      setTrackWR('1:39.305');
    }
    if (trackName === 'dragon-driftway') {
      setTrackMiniMap(dragonDriftway);
      setTrackWR('1:40.175');
    }
    if (trackName === 'mute-city') {
      setTrackMiniMap(muteCity);
      setTrackWR('1:51.112');
    }
    if (trackName === 'Wii-warios-gold-mine') {
      setTrackMiniMap(wariosGoldmine);
      setTrackWR('2:01.951');
    }
    if (trackName === 'SNES-rainbow-road') {
      setTrackMiniMap(rainbowRoadSNES);
      setTrackWR('1:25.878');
    }
    if (trackName === 'ice-ice-outpost') {
      setTrackMiniMap(iceIceOutpost);
      setTrackWR('1"44.738');
    }
    if (trackName === 'hyrule-circuit') {
      setTrackMiniMap(hyruleCircuit);
      setTrackWR('1:47.069');
    }
    if (trackName === 'GCN-baby-park') {
      setTrackMiniMap(babyPark);
      setTrackWR('1:01.934');
    }
    if (trackName === 'GBA-cheese-land') {
      setTrackMiniMap(cheeseLand);
      setTrackWR('1:41.757');
    }
    if (trackName === 'wild-woods') {
      setTrackMiniMap(wildWoods);
      setTrackWR('1:45.757');
    }
    if (trackName === 'animal-crossing') {
      setTrackMiniMap(animalCrossing);
      setTrackWR('1:35.976');
    }
    if (trackName === '3DS-neo-bowser-city') {
      setTrackMiniMap(neoBowserCity);
      setTrackWR('1:42.384');
    }
    if (trackName === 'GBA-ribbon-road') {
      setTrackMiniMap(ribbonRoad);
      setTrackWR('1:44.300');
    }
    if (trackName === 'super-bell-subway') {
      setTrackMiniMap(superBellSubway);
      setTrackWR('1:40.002');
    }
    if (trackName === 'big-blue') {
      setTrackMiniMap(bigBlue);
      setTrackWR('1:23.455');
    }
  }, [location.state]);

  return (
    <div className='track-summary-page'>
      <Link to='/'>
        <IconButton
          className='back-icon'
          id='back-icon'
          icon={<ArowBack />}
          appearance='primary'
        />
      </Link>

      <h1 className='track-name-header'>
        {trackDisplayName} - {trackWR}
      </h1>
      <div className='track-summary'>
        {timeTiles}
        <img
          className='track-mimimap-img'
          src={trackMiniMap}
          alt=''
        />
      </div>
    </div>
  );
}
