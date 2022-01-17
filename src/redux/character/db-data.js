export const DataCharacter = {
  id: "G0008",
  name: "Yun Jin",
  imgSrc: "/assets/character/yunjin.png",
  routeName: "yunjin",
  visionImgSrc: "/assets/vision/geo.png",
  vision: "Geo",
  rarity: "/assets/icon/4star.png",
  rating: "A",
  weapon_type: "Polearm",
  build: {
    title_build: "Best Yun Jin Builds",
    role_build: "Geo Support Build",
    description:
      "Yun Jin excels at empowering DPS characters that rely on their normal attacks.",
    weapon_build: [
      {
        id: "WP0030",
        name: "Staff of Homa",
        description:
          "HP increased by 20~40%. Additionally, provides an ATK Bonus based on 0.8~1.6% of the wielder's Max HP. When the wielder's HP is less than 50%, this ATK bonus is increased by an additional 1~1.8% of Max HP.",
        imgSrc: "/assets/weapon/staff_of_homa.png",
        sub_description: "CRIT DMG",
        rarity: "/assets/icon/5star.png",
        set: "1",
      },
      {
        id: "WP0039",
        name: "Favonius Lance",
        description:
          "CRIT hits have a 60~100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12~6s.",
        imgSrc: "/assets/weapon/favonius_lance.png",
        sub_description: "Energy Recharge",
        rarity: "/assets/icon/4star.png",
      },
    ],
    artifact_build: [
      {
        id: "husk_of_opulent_dreams",
        name: "Husk of Opulent Dreams",
        imgSrc: "/assets/artifact/husk_of_opulent_dreams.png",
        sub_description: "ER / DEF / CRIT Rate",
        rarity: "/assets/icon/5star.png",
        set: "1",
        pieceBonus: [
          {
            setBonus: "2-Piece",
            description: "DEF +30%.",
          },
          {
            setBonus: "2-Piece",
            description: "A character equipped with this Artifact set will obtain the Curiosity effect in the following conditions: When on the field, the character gains 1 stack after hitting an opponent with a Geo attack, triggering a maximum of once every 0.3s. When off the field, the character gains 1 stack every 3s. Curiosity can stack up to 4 times, each providing 6% DEF and a 6% Geo DMG Bonus. When 6 seconds pass without gaining a Curiosity stack, 1 stack is lost.",
          },
        ],
      },
      {
        id: "husk_of_opulent_dreams",
        name: "Husk of Opulent Dreams",
        imgSrc: "/assets/artifact/husk_of_opulent_dreams.png",
        sub_description: "ER / DEF / CRIT Rate",
        rarity: "/assets/icon/5star.png",
        pieceBonus: [
          {
            setBonus: "2-Piece",
            description: "DEF +30%.",
          },
        ],
      },
      {
        id: "noblesse_oblige",
        name: "Noblesse Oblige",
        imgSrc: "/assets/artifact/noblesse_oblige.png",
        sub_description: "ER / DEF / CRIT Rate",
        rarity: "/assets/icon/5star.png",
        pieceBonus: [
          {
            setBonus: "2-Piece",
            description: "Elemental Burst DMG +20%.",
          },
        ],
      },
    ],
  },
  constellation: {
    title: "Yun Jin Constellations",
    list: [
      {
        id: "c1",
        name: "Thespian Gallop",
        sub_description: "Constellation Level 1",
        description: "Opening Flourish's CD is decreased by 18%.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c1.png",
      },
      {
        id: "c2",
        name: "Myriad Mise-En-Scene",
        sub_description: "Constellation Level 2",
        description: "After Cliffbreaker's Banner is unleashed, all nearby party members' Normal Attack DMG is increased by 15% for 12s.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c2.png",
      },
      {
        id: "c3",
        name: "Seafaring General",
        sub_description: "Constellation Level 3",
        description:
          "Increases the Level of Cliffbreaker's Banner by 3.\nMaximum upgrade level is 15.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c3.png",
      },
      {
        id: "c4",
        name: "Flower and a Fighter",
        sub_description: "Constellation Level 4",
        description: "When Yun Jin triggers the Crystallize Reaction, her DEF is increased by 20% for 12s.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c4.png",
      },
      {
        id: "c5",
        name: "Famed Throughout the Land",
        sub_description: "Constellation Level 5",
        description:
          "Increases the Level of Opening Flourish by 3.\nMaximum upgrade level is 15.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c5.png",
      },
      {
        id: "c6",
        name: "Decorous Harmony",
        sub_description: "Constellation Level 6",
        description:
          "Characters under the effects of the Flying Cloud Flag Formation have their Normal ATK SPD increased by 12%.",
        imgSrc: "/assets/character-detail/yunjin/constellation/c6.png",
      },
    ],
  },
  skill_talent: {
    title: "Yun Jin Skills Talents",
    list: [
      {
        id: "skill-1",
        name: "Cloud-Grazing Strike",
        sub_description: "Normal Attack",
        description:
          "Normal Attack\n\nPerforms up to 5 consecutive strikes.\n\nCharged Attack\n\nConsumes a certain amount of Stamina to lunge forward, dealing damage to enemies along the way.\n\nPlunging Attack\n\nPlunges from mid-air to strike the ground below, damaging enemies along the path and dealing AoE DMG upon impact.",
        imgSrc:
          "/assets/character-detail/yunjin/skill-talent/skill-1.png",
      },
      {
        id: "skill-2",
        name: "Opening Flourish",
        sub_description: "Elemental Skill",
        description:
          "Ms. Yun may just be acting out fights on stage, but her skills with the spear are real enough to defend against her foes.\n\nPress\n\nFlourishes her polearm in a cloud-grasping stance, dealing Geo DMG.\n\nHold\n\nTakes up the Opening Flourish stance and charges up, forming a shield. DMG Absorption is based on Yun Jin's Max HP and has 150% effectiveness against all Elemental DMG and Physical DMG. The shield lasts until she finishes unleashing her Elemental Skill. When the skill is released, when its duration ends, or when the shield breaks, Yun Jin will unleash the charged energy as an attack, dealing Geo DMG.\nBased on the time spent charging, it will either unleash an attack at Charge Level 1 or Level 2.",
        imgSrc:
          "/assets/character-detail/yunjin/skill-talent/skill-2.png",
      },
      {
        id: "skill-3",
        name: "Cliffbreaker's Banner",
        sub_description: "Elemental Burst",
        description:
          "Deals AoE Geo DMG and grants all nearby party members a Flying Cloud Flag Formation.\n\nFlying Cloud Flag Formation\n\nWhen Normal Attack DMG is dealt to opponents, Bonus DMG will be dealt based on Yun Jin's current DEF. The effects of this skill will be cleared after a set duration or after being triggered a specific number of times.\nWhen one Normal Attack hits multiple opponents, the effect is triggered multiple times according to the number of opponents hit. The number of times that the effect is triggered is counted independently for each member of the party with Flying Cloud Flag Formation.",
        imgSrc:
          "/assets/character-detail/yunjin/skill-talent/skill-3.png",
      },
    ],
  },
  passive: {
    title: "Yun Jin Passive Talents",
    list: [
      {
        id: "passive-1",
        name: "True to Oneself",
        sub_description: "Unlocked at Ascension 1",
        description:
          "Using Opening Flourish at the precise moment when Yun Jin is attacked will unleash its Level 2 Charged (Hold) form.",
        imgSrc: "/assets/character-detail/yunjin/passive/passive-1.png",
      },
      {
        id: "passive-2",
        name: "Breaking Conventions",
        sub_description: "Unlocked at Ascension 4",
        description:
          "The Normal Attack DMG Bonus granted by Flying Cloud Flag Formation is further increased by 2.5%/5%/7.5%/11.5% of Yun Jin's DEF when the party contains characters of 1/2/3/4 Elemental Types, respectively.",
        imgSrc: "/assets/character-detail/yunjin/passive/passive-2.png",
      },
      {
        id: "passive-3",
        name: "Light Nourishment",
        sub_description: "Unlocked Automatically",
        description:
          "When Perfect Cooking is achieved on Food with Adventure-related effects, there is a 12% chance to obtain double the product.",
        imgSrc: "/assets/character-detail/yunjin/passive/passive-3.png",
      },
    ],
  },
  ascension: {
    title: "Shenhe Ascension",
    list_material: [
      {
        id: 1,
        rank: 1,
        level: "20-40",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Sliver",
            total: 1,
            imgSrc: "/assets/material/prithiva_topaz_sliver.png",
          },
          {
            id: "mat2",
            name: null,
            total: null,
            imgSrc: null,
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 3,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Damaged Mask",
            total: 3,
            imgSrc: "/assets/material/damaged_mask.png",
          },
        ],
      },
      {
        id: 2,
        rank: 2,
        level: "40-50",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Fragment",
            total: 3,
            imgSrc: "/assets/material/prithiva_topaz_fragment.png",
          },
          {
            id: "mat2",
            name: "Riftborn Regalia",
            total: 2,
            imgSrc: "/assets/material/riftborn_regalia.png",
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 10,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Damaged Mask",
            total: 15,
            imgSrc: "/assets/material/damaged_mask.png",
          },
        ],
      },
      {
        id: 3,
        rank: 3,
        level: "50-60",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Fragment",
            total: 6,
            imgSrc: "/assets/material/prithiva_topaz_fragment.png",
          },
          {
            id: "mat2",
            name: "Riftborn Regalia",
            total: 4,
            imgSrc: "/assets/material/riftborn_regalia.png",
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 20,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Stained Mask",
            total: 12,
            imgSrc: "/assets/material/stained_mask.png",
          },
        ],
      },
      {
        id: 4,
        rank: 4,
        level: "60-70",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Chunk",
            total: 3,
            imgSrc: "/assets/material/prithiva_topaz_chunk.png",
          },
          {
            id: "mat2",
            name: "Riftborn Regalia",
            total: 8,
            imgSrc: "/assets/material/riftborn_regalia.png",
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 30,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Stained Mask",
            total: 18,
            imgSrc: "/assets/material/stained_mask.png",
          },
        ],
      },
      {
        id: 5,
        rank: 5,
        level: "70-80",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Chunk",
            total: 6,
            imgSrc: "/assets/material/prithiva_topaz_chunk.png",
          },
          {
            id: "mat2",
            name: "Riftborn Regalia",
            total: 12,
            imgSrc: "/assets/material/riftborn_regalia.png",
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 45,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Ominous Mask",
            total: 12,
            imgSrc: "/assets/material/ominous_mask.png",
          },
        ],
      },
      {
        id: 6,
        rank: 6,
        level: "80-90",
        material: [
          {
            id: "mat1",
            name: "Prithiva Topaz Gemstone",
            total: 6,
            imgSrc: "/assets/material/prithiva_topaz_gemstone.png",
          },
          {
            id: "mat2",
            name: "Riftborn Regalia",
            total: 20,
            imgSrc: "/assets/material/riftborn_regalia.png",
          },
          {
            id: "mat3",
            name: "Glaze Lily",
            total: 60,
            imgSrc: "/assets/material/glaze_lily.png",
          },
          {
            id: "mat4",
            name: "Ominous Mask",
            total: 24,
            imgSrc: "/assets/material/ominous_mask.png",
          },
        ],
      },
    ],
  },
  best_team: {
    title: "Yun Jin Team",
    teams: [
      {
        id: "team1",
        type: "Premium Team",
        characters: [
          {
            id: "P0003",
            name: "Yoimiya",
            imgSrc: "/assets/character/yoimiya.png",
            role: "Main DPS",
            linkUrl: "yoimiya",
          },
          {
            id: "G0008",
            name: "Yun Jin",
            imgSrc: "/assets/character/yunjin.png",
            role: "Support",
            linkUrl: "yunjin",
          },
          {
            id: "A0006",
            name: "Kazuha",
            imgSrc: "/assets/character/kazuha.png",
            role: "Sub DPS",
            linkUrl: "kazuha",
          },
          {
            id: "P0004",
            name: "Benneth",
            imgSrc: "/assets/character/benneth.png",
            role: "Support",
            linkUrl: "benneth",
          },
        ],
      },
      {
        id: "team2",
        type: "Standard Team",
        characters: [
          {
            id: "G0001",
            name: "Noelle",
            imgSrc: "/assets/character/noelle.png",
            role: "Main DPS",
            linkUrl: "noelle",
          },
          {
            id: "G0008",
            name: "Yun Jin",
            imgSrc: "/assets/character/yunjin.png",
            role: "Support",
            linkUrl: "yunjin",
          },
          {
            id: "G0002",
            name: "Albedo",
            imgSrc: "/assets/character/albedo.png",
            role: "Sub DPS",
            linkUrl: "albedo",
          },
          {
            id: "G0007",
            name: "Gorou",
            imgSrc: "/assets/character/gorou.png",
            role: "Support",
            linkUrl: "gorou",
          },
        ],
      },
    ],
  },
};
