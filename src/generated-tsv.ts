import type { SongNote } from "./music";

type TsvClip = {
  notes: SongNote[];
  key: string;
  tonic: number;
  scale: "major" | "minor";
};

export const TSV_CLIPS: Record<string, TsvClip> = {
  "A01(E♭ major)": {
    "notes": [
      {
        "noteIndices": [
          18
        ],
        "duration": 0.396,
        "onset": 0
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 0.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 1
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 2.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 4
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 4.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 5
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 5.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 6
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 6.5
      },
      {
        "noteIndices": [
          30,
          49
        ],
        "duration": 0.797,
        "onset": 7
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 7.5
      },
      {
        "noteIndices": [
          18,
          61
        ],
        "duration": 0.797,
        "onset": 8
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 8.5
      },
      {
        "noteIndices": [
          30,
          49,
          61
        ],
        "duration": 0.797,
        "onset": 9
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          37,
          51,
          59
        ],
        "duration": 0.797,
        "onset": 10
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 10.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 11
      },
      {
        "noteIndices": [
          34,
          53,
          59
        ],
        "duration": 0.469,
        "onset": 11.5
      },
      {
        "noteIndices": [
          30,
          54,
          58
        ],
        "duration": 2.396,
        "onset": 12
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 12.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 13
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 13.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 14
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.396,
        "onset": 14.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 15
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 15.5
      }
    ],
    "key": "E♭ major",
    "tonic": 3,
    "scale": "major"
  },
  "A01 (modified)": {
    "notes": [
      {
        "noteIndices": [
          18
        ],
        "duration": 0.396,
        "onset": 0
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 0.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 1
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 2.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 4
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 4.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 5
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 5.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 6
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 6.5
      },
      {
        "noteIndices": [
          30,
          49
        ],
        "duration": 0.797,
        "onset": 7
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 7.5
      },
      {
        "noteIndices": [
          18,
          61
        ],
        "duration": 0.797,
        "onset": 8
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 8.5
      },
      {
        "noteIndices": [
          30,
          49,
          61
        ],
        "duration": 0.797,
        "onset": 9
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          37,
          50,
          59
        ],
        "duration": 0.797,
        "onset": 10
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 10.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 11
      },
      {
        "noteIndices": [
          33,
          52,
          59
        ],
        "duration": 0.469,
        "onset": 11.5
      },
      {
        "noteIndices": [
          30,
          54,
          57
        ],
        "duration": 2.396,
        "onset": 12
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 12.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 13
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.396,
        "onset": 13.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.396,
        "onset": 14
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.396,
        "onset": 14.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.396,
        "onset": 15
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.396,
        "onset": 15.5
      }
    ],
    "key": "E♭ minor",
    "tonic": 3,
    "scale": "minor"
  },
  "A02(E major)": {
    "notes": [
      {
        "noteIndices": [
          19
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          26,
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          31,
          47
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          35,
          50
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          38,
          47,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          43,
          50,
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          47,
          55,
          62
        ],
        "duration": 2.3969478737997254,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          31,
          55,
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          26,
          54,
          62
        ],
        "duration": 5.397633744855966,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.3960905349794238,
        "onset": 12.002743484224963
      },
      {
        "noteIndices": [
          28,
          55,
          64
        ],
        "duration": 0.3960905349794238,
        "onset": 12.503257887517144
      },
      {
        "noteIndices": [
          31,
          52,
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 13.002572016460903
      },
      {
        "noteIndices": [
          36,
          48,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 13.503086419753084
      },
      {
        "noteIndices": [
          40,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 14.003600823045264
      },
      {
        "noteIndices": [
          43,
          48
        ],
        "duration": 0.3960905349794238,
        "onset": 14.502914951989023
      },
      {
        "noteIndices": [
          48,
          52
        ],
        "duration": 2.3969478737997254,
        "onset": 15.003429355281204
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.3960905349794238,
        "onset": 15.503943758573385
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 16.003257887517144
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 16.503772290809327
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 17.004286694101506
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.3960905349794238,
        "onset": 17.503600823045264
      }
    ],
    "key": "E major",
    "tonic": 4,
    "scale": "major"
  },
  "A02 (modified)": {
    "notes": [
      {
        "noteIndices": [
          19
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          26,
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          31,
          46
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          34,
          50
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          38,
          46,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          43,
          50,
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          46,
          55,
          62
        ],
        "duration": 2.3969478737997254,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          31,
          55,
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          26,
          53,
          62
        ],
        "duration": 5.397633744855966,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.3960905349794238,
        "onset": 12.002743484224963
      },
      {
        "noteIndices": [
          27,
          55,
          63
        ],
        "duration": 0.3960905349794238,
        "onset": 12.503257887517144
      },
      {
        "noteIndices": [
          31,
          51,
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 13.002572016460903
      },
      {
        "noteIndices": [
          36,
          48,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 13.503086419753084
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.3960905349794238,
        "onset": 14.003600823045264
      },
      {
        "noteIndices": [
          43,
          48
        ],
        "duration": 0.3960905349794238,
        "onset": 14.502914951989023
      },
      {
        "noteIndices": [
          48,
          51
        ],
        "duration": 2.3969478737997254,
        "onset": 15.003429355281204
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.3960905349794238,
        "onset": 15.503943758573385
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.3960905349794238,
        "onset": 16.003257887517144
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 16.503772290809327
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.3960905349794238,
        "onset": 17.004286694101506
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.3960905349794238,
        "onset": 17.503600823045264
      }
    ],
    "key": "E minor",
    "tonic": 4,
    "scale": "minor"
  },
  "A03(A major)": {
    "notes": [
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39603960396039606,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 0.5004500450045004
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 0.9996999699969996
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39603960396039606,
        "onset": 1.5001500150015001
      },
      {
        "noteIndices": [
          43,
          48,
          52,
          60
        ],
        "duration": 3.198319831983198,
        "onset": 2.0006000600060005
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39603960396039606,
        "onset": 2.4998499849985
      },
      {
        "noteIndices": [
          36,
          59
        ],
        "duration": 0.39603960396039606,
        "onset": 3.0003000300030003
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.39603960396039606,
        "onset": 3.5007500750075002
      },
      {
        "noteIndices": [
          17,
          57
        ],
        "duration": 3.198319831983198,
        "onset": 4
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39603960396039606,
        "onset": 4.5004500450045
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39603960396039606,
        "onset": 5.000900090009001
      },
      {
        "noteIndices": [
          36,
          48,
          53
        ],
        "duration": 2.099009900990099,
        "onset": 5.5001500150015
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39603960396039606,
        "onset": 6.0006000600060005
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 6.5010501050105
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39603960396039606,
        "onset": 7.000300030003
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39603960396039606,
        "onset": 7.500750075007501
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.39603960396039606,
        "onset": 8.001200120012001
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 8.5004500450045
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39603960396039606,
        "onset": 9.000900090009
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.39603960396039606,
        "onset": 9.501350135013501
      },
      {
        "noteIndices": [
          43,
          50,
          53,
          60
        ],
        "duration": 3.198319831983198,
        "onset": 10.000600060006
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39603960396039606,
        "onset": 10.501050105010501
      },
      {
        "noteIndices": [
          38,
          59
        ],
        "duration": 0.39603960396039606,
        "onset": 11.001500150015001
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.39603960396039606,
        "onset": 11.5007500750075
      },
      {
        "noteIndices": [
          24,
          55
        ],
        "duration": 3.198319831983198,
        "onset": 12.001200120012001
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 12.501650165016502
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 13.000900090009
      },
      {
        "noteIndices": [
          38,
          48,
          52
        ],
        "duration": 2.099009900990099,
        "onset": 13.501350135013501
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39603960396039606,
        "onset": 14.001800180018002
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 14.501050105010501
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 15.001500150015001
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39603960396039606,
        "onset": 15.5019501950195
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "A03 (modified)": {
    "notes": [
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39603960396039606,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 0.5004500450045004
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 0.9996999699969996
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39603960396039606,
        "onset": 1.5001500150015001
      },
      {
        "noteIndices": [
          43,
          48,
          51,
          60
        ],
        "duration": 3.198319831983198,
        "onset": 2.0006000600060005
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39603960396039606,
        "onset": 2.4998499849985
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.39603960396039606,
        "onset": 3.0003000300030003
      },
      {
        "noteIndices": [
          31,
          56
        ],
        "duration": 0.39603960396039606,
        "onset": 3.5007500750075002
      },
      {
        "noteIndices": [
          17,
          56
        ],
        "duration": 3.198319831983198,
        "onset": 4
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39603960396039606,
        "onset": 4.5004500450045
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39603960396039606,
        "onset": 5.000900090009001
      },
      {
        "noteIndices": [
          36,
          48,
          53
        ],
        "duration": 2.099009900990099,
        "onset": 5.5001500150015
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39603960396039606,
        "onset": 6.0006000600060005
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 6.5010501050105
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39603960396039606,
        "onset": 7.000300030003
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39603960396039606,
        "onset": 7.500750075007501
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.39603960396039606,
        "onset": 8.001200120012001
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 8.5004500450045
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39603960396039606,
        "onset": 9.000900090009
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.39603960396039606,
        "onset": 9.501350135013501
      },
      {
        "noteIndices": [
          43,
          50,
          53,
          60
        ],
        "duration": 3.198319831983198,
        "onset": 10.000600060006
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39603960396039606,
        "onset": 10.501050105010501
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.39603960396039606,
        "onset": 11.001500150015001
      },
      {
        "noteIndices": [
          31,
          56
        ],
        "duration": 0.39603960396039606,
        "onset": 11.5007500750075
      },
      {
        "noteIndices": [
          24,
          55
        ],
        "duration": 3.198319831983198,
        "onset": 12.001200120012001
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 12.501650165016502
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 13.000900090009
      },
      {
        "noteIndices": [
          38,
          48,
          51
        ],
        "duration": 2.099009900990099,
        "onset": 13.501350135013501
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39603960396039606,
        "onset": 14.001800180018002
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39603960396039606,
        "onset": 14.501050105010501
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39603960396039606,
        "onset": 15.001500150015001
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39603960396039606,
        "onset": 15.5019501950195
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "A04(C major)": {
    "notes": [
      {
        "noteIndices": [
          15,
          43
        ],
        "duration": 0.7964900438744514,
        "onset": 0
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.2654966812914838,
        "onset": 0.33299583755203055
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 0.6668916638542017
      },
      {
        "noteIndices": [
          22,
          44
        ],
        "duration": 0.7964900438744514,
        "onset": 0.9998875014062323
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 1.3328833389582628
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 1.666779165260434
      },
      {
        "noteIndices": [
          27,
          46
        ],
        "duration": 0.7964900438744514,
        "onset": 1.9997750028124646
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 2.3336708291146357
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.2654966812914838,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          22,
          48
        ],
        "duration": 0.7964900438744514,
        "onset": 2.999662504218697
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 3.333558330520868
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 3.6665541680728984
      },
      {
        "noteIndices": [
          15,
          50
        ],
        "duration": 0.7964900438744514,
        "onset": 3.999550005624929
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.2654966812914838,
        "onset": 4.333445831927101
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.2654966812914838,
        "onset": 4.666441669479131
      },
      {
        "noteIndices": [
          22,
          51
        ],
        "duration": 0.7964900438744514,
        "onset": 5.000337495781302
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.2654966812914838,
        "onset": 5.333333333333333
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.2654966812914838,
        "onset": 5.666329170885364
      },
      {
        "noteIndices": [
          27,
          53
        ],
        "duration": 0.7964900438744514,
        "onset": 6.0002249971875345
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 6.333220834739565
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.2654966812914838,
        "onset": 6.666216672291595
      },
      {
        "noteIndices": [
          22,
          55
        ],
        "duration": 0.7964900438744514,
        "onset": 7.000112498593766
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 7.333108336145797
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.2654966812914838,
        "onset": 7.667004162447968
      },
      {
        "noteIndices": [
          20,
          58
        ],
        "duration": 0.7964900438744514,
        "onset": 7.999999999999998
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 8.33299583755203
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.2654966812914838,
        "onset": 8.666891663854202
      },
      {
        "noteIndices": [
          27,
          56
        ],
        "duration": 0.7964900438744514,
        "onset": 8.999887501406231
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.2654966812914838,
        "onset": 9.332883338958261
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.2654966812914838,
        "onset": 9.666779165260433
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "A04 (modified)": {
    "notes": [
      {
        "noteIndices": [
          15,
          42
        ],
        "duration": 0.7964900438744514,
        "onset": 0
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.2654966812914838,
        "onset": 0.33299583755203055
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 0.6668916638542017
      },
      {
        "noteIndices": [
          22,
          44
        ],
        "duration": 0.7964900438744514,
        "onset": 0.9998875014062323
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 1.3328833389582628
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 1.666779165260434
      },
      {
        "noteIndices": [
          27,
          46
        ],
        "duration": 0.7964900438744514,
        "onset": 1.9997750028124646
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 2.3336708291146357
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.2654966812914838,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          22,
          47
        ],
        "duration": 0.7964900438744514,
        "onset": 2.999662504218697
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 3.333558330520868
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 3.6665541680728984
      },
      {
        "noteIndices": [
          15,
          49
        ],
        "duration": 0.7964900438744514,
        "onset": 3.999550005624929
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.2654966812914838,
        "onset": 4.333445831927101
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.2654966812914838,
        "onset": 4.666441669479131
      },
      {
        "noteIndices": [
          22,
          51
        ],
        "duration": 0.7964900438744514,
        "onset": 5.000337495781302
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.2654966812914838,
        "onset": 5.333333333333333
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.2654966812914838,
        "onset": 5.666329170885364
      },
      {
        "noteIndices": [
          27,
          53
        ],
        "duration": 0.7964900438744514,
        "onset": 6.0002249971875345
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2654966812914838,
        "onset": 6.333220834739565
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.2654966812914838,
        "onset": 6.666216672291595
      },
      {
        "noteIndices": [
          22,
          54
        ],
        "duration": 0.7964900438744514,
        "onset": 7.000112498593766
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 7.333108336145797
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.2654966812914838,
        "onset": 7.667004162447968
      },
      {
        "noteIndices": [
          20,
          58
        ],
        "duration": 0.7964900438744514,
        "onset": 7.999999999999998
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.2654966812914838,
        "onset": 8.33299583755203
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.2654966812914838,
        "onset": 8.666891663854202
      },
      {
        "noteIndices": [
          27,
          56
        ],
        "duration": 0.7964900438744514,
        "onset": 8.999887501406231
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.2654966812914838,
        "onset": 9.332883338958261
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.2654966812914838,
        "onset": 9.666779165260433
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "A05(E major)": {
    "notes": [
      {
        "noteIndices": [
          14,
          50
        ],
        "duration": 2.395826487019389,
        "onset": 0
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.395662175484719,
        "onset": 0.5003286230693395
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 1.000657246138679
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.395662175484719,
        "onset": 1.4998356884653303
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.395662175484719,
        "onset": 2.00016431153467
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 2.5004929346040092
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.7970752546828787,
        "onset": 3.0008215576733486
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 3.5
      },
      {
        "noteIndices": [
          42,
          52
        ],
        "duration": 1.1984883338810384,
        "onset": 4.00032862306934
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 4.500657246138679
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 5.0009858692080185
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.395662175484719,
        "onset": 5.501314492277358
      },
      {
        "noteIndices": [
          14,
          54
        ],
        "duration": 2.395826487019389,
        "onset": 6.000492934604009
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.395662175484719,
        "onset": 6.500821557673349
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 7.0011501807426875
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.395662175484719,
        "onset": 7.501478803812028
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.395662175484719,
        "onset": 8.001807426881367
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 8.500985869208018
      },
      {
        "noteIndices": [
          38,
          50,
          54
        ],
        "duration": 0.7970752546828787,
        "onset": 9.001314492277357
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 9.501643115346697
      },
      {
        "noteIndices": [
          42,
          52,
          55
        ],
        "duration": 1.1984883338810384,
        "onset": 10.001971738416037
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 10.50115018074269
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 11.001478803812027
      },
      {
        "noteIndices": [
          33,
          54,
          57
        ],
        "duration": 0.395662175484719,
        "onset": 11.501807426881367
      },
      {
        "noteIndices": [
          19,
          54,
          57
        ],
        "duration": 0.7970752546828787,
        "onset": 12.002136049950707
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 12.502464673020045
      },
      {
        "noteIndices": [
          35,
          50
        ],
        "duration": 1.5987512323365098,
        "onset": 13.001643115346697
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 13.501971738416037
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 14.002300361485375
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.395662175484719,
        "onset": 14.502628984554715
      }
    ],
    "key": "E major",
    "tonic": 4,
    "scale": "major"
  },
  "A05 (modified)": {
    "notes": [
      {
        "noteIndices": [
          14,
          50
        ],
        "duration": 2.395826487019389,
        "onset": 0
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.395662175484719,
        "onset": 0.5003286230693395
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 1.000657246138679
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.395662175484719,
        "onset": 1.4998356884653303
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.395662175484719,
        "onset": 2.00016431153467
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 2.5004929346040092
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.7970752546828787,
        "onset": 3.0008215576733486
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 3.5
      },
      {
        "noteIndices": [
          41,
          51
        ],
        "duration": 1.1984883338810384,
        "onset": 4.00032862306934
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 4.500657246138679
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 5.0009858692080185
      },
      {
        "noteIndices": [
          33,
          53
        ],
        "duration": 0.395662175484719,
        "onset": 5.501314492277358
      },
      {
        "noteIndices": [
          14,
          53
        ],
        "duration": 2.395826487019389,
        "onset": 6.000492934604009
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.395662175484719,
        "onset": 6.500821557673349
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 7.0011501807426875
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.395662175484719,
        "onset": 7.501478803812028
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.395662175484719,
        "onset": 8.001807426881367
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 8.500985869208018
      },
      {
        "noteIndices": [
          38,
          50,
          53
        ],
        "duration": 0.7970752546828787,
        "onset": 9.001314492277357
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 9.501643115346697
      },
      {
        "noteIndices": [
          41,
          51,
          55
        ],
        "duration": 1.1984883338810384,
        "onset": 10.001971738416037
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 10.50115018074269
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 11.001478803812027
      },
      {
        "noteIndices": [
          33,
          53,
          57
        ],
        "duration": 0.395662175484719,
        "onset": 11.501807426881367
      },
      {
        "noteIndices": [
          19,
          53,
          57
        ],
        "duration": 0.7970752546828787,
        "onset": 12.002136049950707
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.395662175484719,
        "onset": 12.502464673020045
      },
      {
        "noteIndices": [
          34,
          50
        ],
        "duration": 1.5987512323365098,
        "onset": 13.001643115346697
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.395662175484719,
        "onset": 13.501971738416037
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 14.002300361485375
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.395662175484719,
        "onset": 14.502628984554715
      }
    ],
    "key": "E minor",
    "tonic": 4,
    "scale": "minor"
  },
  "A06(A major)": {
    "notes": [
      {
        "noteIndices": [
          24,
          52,
          64
        ],
        "duration": 0.3333333333333333,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 0.16666666666666666
      },
      {
        "noteIndices": [
          36,
          53,
          65
        ],
        "duration": 0.3333333333333333,
        "onset": 0.3333333333333333
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 0.5
      },
      {
        "noteIndices": [
          40,
          52,
          64
        ],
        "duration": 0.3333333333333333,
        "onset": 0.6666666666666666
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 0.8333333333333333
      },
      {
        "noteIndices": [
          29,
          53,
          65
        ],
        "duration": 0.7970297029702971,
        "onset": 1
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 1.1666666666666665
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.13036303630363036,
        "onset": 1.3333333333333333
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.13036303630363036,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.13036303630363036,
        "onset": 1.6666666666666665
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 1.8333333333333335
      },
      {
        "noteIndices": [
          24,
          52,
          64
        ],
        "duration": 0.3333333333333333,
        "onset": 2
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 2.1666666666666665
      },
      {
        "noteIndices": [
          36,
          53,
          65
        ],
        "duration": 0.3333333333333333,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 2.5
      },
      {
        "noteIndices": [
          40,
          52,
          64
        ],
        "duration": 0.3333333333333333,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 2.8338833883388337
      },
      {
        "noteIndices": [
          19,
          50,
          62
        ],
        "duration": 0.26567656765676567,
        "onset": 3.0005500550055006
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 3.167216721672167
      },
      {
        "noteIndices": [
          35,
          52,
          64
        ],
        "duration": 0.26567656765676567,
        "onset": 3.3338833883388337
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 3.5005500550055
      },
      {
        "noteIndices": [
          38,
          53,
          65
        ],
        "duration": 0.26567656765676567,
        "onset": 3.667216721672167
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.13036303630363036,
        "onset": 3.8338833883388337
      },
      {
        "noteIndices": [
          24,
          57,
          69
        ],
        "duration": 0.26567656765676567,
        "onset": 4.0005500550055
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 4.167216721672167
      },
      {
        "noteIndices": [
          36,
          55,
          67
        ],
        "duration": 0.26567656765676567,
        "onset": 4.333883388338833
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 4.5005500550055
      },
      {
        "noteIndices": [
          40,
          52,
          64
        ],
        "duration": 0.26567656765676567,
        "onset": 4.667216721672167
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 4.833883388338834
      },
      {
        "noteIndices": [
          29,
          48,
          60
        ],
        "duration": 0.3333333333333333,
        "onset": 5.0005500550055
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 5.167216721672167
      },
      {
        "noteIndices": [
          41,
          45,
          57
        ],
        "duration": 0.3333333333333333,
        "onset": 5.333883388338833
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.13036303630363036,
        "onset": 5.5005500550055
      },
      {
        "noteIndices": [
          41,
          48,
          60
        ],
        "duration": 0.3333333333333333,
        "onset": 5.667216721672167
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 5.833883388338833
      },
      {
        "noteIndices": [
          24,
          43,
          55
        ],
        "duration": 0.4686468646864686,
        "onset": 6.000550055005501
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "A06 (modified)": {
    "notes": [
      {
        "noteIndices": [
          24,
          51,
          63
        ],
        "duration": 0.3333333333333333,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 0.16666666666666666
      },
      {
        "noteIndices": [
          36,
          53,
          65
        ],
        "duration": 0.3333333333333333,
        "onset": 0.3333333333333333
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 0.5
      },
      {
        "noteIndices": [
          39,
          51,
          63
        ],
        "duration": 0.3333333333333333,
        "onset": 0.6666666666666666
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 0.8333333333333333
      },
      {
        "noteIndices": [
          29,
          53,
          65
        ],
        "duration": 0.7970297029702971,
        "onset": 1
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 1.1666666666666665
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.13036303630363036,
        "onset": 1.3333333333333333
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.13036303630363036,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.13036303630363036,
        "onset": 1.6666666666666665
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 1.8333333333333335
      },
      {
        "noteIndices": [
          24,
          51,
          63
        ],
        "duration": 0.3333333333333333,
        "onset": 2
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 2.1666666666666665
      },
      {
        "noteIndices": [
          36,
          53,
          65
        ],
        "duration": 0.3333333333333333,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 2.5
      },
      {
        "noteIndices": [
          39,
          51,
          63
        ],
        "duration": 0.3333333333333333,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 2.8338833883388337
      },
      {
        "noteIndices": [
          19,
          50,
          62
        ],
        "duration": 0.26567656765676567,
        "onset": 3.0005500550055006
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 3.167216721672167
      },
      {
        "noteIndices": [
          34,
          51,
          63
        ],
        "duration": 0.26567656765676567,
        "onset": 3.3338833883388337
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 3.5005500550055
      },
      {
        "noteIndices": [
          38,
          53,
          65
        ],
        "duration": 0.26567656765676567,
        "onset": 3.667216721672167
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.13036303630363036,
        "onset": 3.8338833883388337
      },
      {
        "noteIndices": [
          24,
          56,
          68
        ],
        "duration": 0.26567656765676567,
        "onset": 4.0005500550055
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.13036303630363036,
        "onset": 4.167216721672167
      },
      {
        "noteIndices": [
          36,
          55,
          67
        ],
        "duration": 0.26567656765676567,
        "onset": 4.333883388338833
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.13036303630363036,
        "onset": 4.5005500550055
      },
      {
        "noteIndices": [
          39,
          51,
          63
        ],
        "duration": 0.26567656765676567,
        "onset": 4.667216721672167
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 4.833883388338834
      },
      {
        "noteIndices": [
          29,
          48,
          60
        ],
        "duration": 0.3333333333333333,
        "onset": 5.0005500550055
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 5.167216721672167
      },
      {
        "noteIndices": [
          41,
          44,
          56
        ],
        "duration": 0.3333333333333333,
        "onset": 5.333883388338833
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.13036303630363036,
        "onset": 5.5005500550055
      },
      {
        "noteIndices": [
          41,
          48,
          60
        ],
        "duration": 0.3333333333333333,
        "onset": 5.667216721672167
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.13036303630363036,
        "onset": 5.833883388338833
      },
      {
        "noteIndices": [
          24,
          43,
          55
        ],
        "duration": 0.4686468646864686,
        "onset": 6.000550055005501
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "A07(D major)": {
    "notes": [
      {
        "noteIndices": [
          24,
          52
        ],
        "duration": 3.7978968123562273,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 0.5003286230693395
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.395662175484719,
        "onset": 1.000657246138679
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 1.4998356884653303
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 2.00016431153467
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 2.5004929346040092
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 3.0008215576733486
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 3.5
      },
      {
        "noteIndices": [
          36,
          52
        ],
        "duration": 0.395662175484719,
        "onset": 4.00032862306934
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.395662175484719,
        "onset": 4.500657246138679
      },
      {
        "noteIndices": [
          28,
          48
        ],
        "duration": 0.395662175484719,
        "onset": 5.0009858692080185
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.395662175484719,
        "onset": 5.501314492277358
      },
      {
        "noteIndices": [
          24,
          52
        ],
        "duration": 3.7978968123562273,
        "onset": 6.000492934604009
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 6.500821557673349
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.395662175484719,
        "onset": 7.0011501807426875
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 7.501478803812028
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 8.001807426881367
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 8.500985869208018
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.395662175484719,
        "onset": 9.001314492277357
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.395662175484719,
        "onset": 9.501643115346697
      },
      {
        "noteIndices": [
          36,
          52
        ],
        "duration": 0.395662175484719,
        "onset": 10.001971738416037
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395662175484719,
        "onset": 10.50115018074269
      },
      {
        "noteIndices": [
          28,
          50
        ],
        "duration": 0.395662175484719,
        "onset": 11.001478803812027
      },
      {
        "noteIndices": [
          31,
          52
        ],
        "duration": 0.395662175484719,
        "onset": 11.501807426881367
      },
      {
        "noteIndices": [
          17,
          53
        ],
        "duration": 1.000657246138679,
        "onset": 12.002136049950707
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.395662175484719,
        "onset": 12.502464673020045
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "A07 (modified)": {
    "notes": [
      {
        "noteIndices": [
          24,
          51
        ],
        "duration": 3.7978968123562273,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 0.5003286230693395
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.395662175484719,
        "onset": 1.000657246138679
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 1.4998356884653303
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.395662175484719,
        "onset": 2.00016431153467
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 2.5004929346040092
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 3.0008215576733486
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.395662175484719,
        "onset": 3.5
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.395662175484719,
        "onset": 4.00032862306934
      },
      {
        "noteIndices": [
          31,
          49
        ],
        "duration": 0.395662175484719,
        "onset": 4.500657246138679
      },
      {
        "noteIndices": [
          27,
          48
        ],
        "duration": 0.395662175484719,
        "onset": 5.0009858692080185
      },
      {
        "noteIndices": [
          31,
          49
        ],
        "duration": 0.395662175484719,
        "onset": 5.501314492277358
      },
      {
        "noteIndices": [
          24,
          51
        ],
        "duration": 3.7978968123562273,
        "onset": 6.000492934604009
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 6.500821557673349
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.395662175484719,
        "onset": 7.0011501807426875
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 7.501478803812028
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.395662175484719,
        "onset": 8.001807426881367
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.395662175484719,
        "onset": 8.500985869208018
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.395662175484719,
        "onset": 9.001314492277357
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.395662175484719,
        "onset": 9.501643115346697
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.395662175484719,
        "onset": 10.001971738416037
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395662175484719,
        "onset": 10.50115018074269
      },
      {
        "noteIndices": [
          27,
          49
        ],
        "duration": 0.395662175484719,
        "onset": 11.001478803812027
      },
      {
        "noteIndices": [
          31,
          51
        ],
        "duration": 0.395662175484719,
        "onset": 11.501807426881367
      },
      {
        "noteIndices": [
          17,
          53
        ],
        "duration": 1.000657246138679,
        "onset": 12.002136049950707
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.395662175484719,
        "onset": 12.502464673020045
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "A08(B major)": {
    "notes": [
      {
        "noteIndices": [
          38,
          57
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          45,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          38,
          54,
          62
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          33,
          55,
          64
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          40,
          54,
          62
        ],
        "duration": 0.7973333333333333,
        "onset": 4
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          28,
          52,
          61
        ],
        "duration": 0.4693333333333333,
        "onset": 5.5
      },
      {
        "noteIndices": [
          31,
          50,
          59
        ],
        "duration": 0.9373333333333332,
        "onset": 6
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          38,
          52,
          61
        ],
        "duration": 0.9373333333333332,
        "onset": 7
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          31,
          54,
          62
        ],
        "duration": 0.9373333333333332,
        "onset": 8
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          26,
          55,
          59
        ],
        "duration": 0.9373333333333332,
        "onset": 9
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 9.5
      },
      {
        "noteIndices": [
          38,
          54,
          57
        ],
        "duration": 0.7973333333333333,
        "onset": 10
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 10.5
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39599999999999996,
        "onset": 11
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.4693333333333333,
        "onset": 11.5
      },
      {
        "noteIndices": [
          35,
          50
        ],
        "duration": 0.7973333333333333,
        "onset": 12
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.39599999999999996,
        "onset": 12.5
      },
      {
        "noteIndices": [
          25,
          49,
          52
        ],
        "duration": 0.7973333333333333,
        "onset": 13
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 13.5
      },
      {
        "noteIndices": [
          38,
          50,
          54
        ],
        "duration": 0.7973333333333333,
        "onset": 14
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 14.5
      },
      {
        "noteIndices": [
          28,
          47,
          50
        ],
        "duration": 1.5986666666666667,
        "onset": 15
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 15.5
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39599999999999996,
        "onset": 16
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 16.5
      },
      {
        "noteIndices": [
          40,
          45,
          49
        ],
        "duration": 0.7973333333333333,
        "onset": 17
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 17.5
      }
    ],
    "key": "B major",
    "tonic": 11,
    "scale": "major"
  },
  "A08 (modified)": {
    "notes": [
      {
        "noteIndices": [
          38,
          57
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          45,
          53
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          38,
          53,
          62
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          33,
          55,
          64
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          40,
          53,
          62
        ],
        "duration": 0.7973333333333333,
        "onset": 4
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          28,
          52,
          60
        ],
        "duration": 0.4693333333333333,
        "onset": 5.5
      },
      {
        "noteIndices": [
          31,
          50,
          58
        ],
        "duration": 0.9373333333333332,
        "onset": 6
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          38,
          52,
          60
        ],
        "duration": 0.9373333333333332,
        "onset": 7
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          31,
          53,
          62
        ],
        "duration": 0.9373333333333332,
        "onset": 8
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          26,
          55,
          58
        ],
        "duration": 0.9373333333333332,
        "onset": 9
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 9.5
      },
      {
        "noteIndices": [
          38,
          53,
          57
        ],
        "duration": 0.7973333333333333,
        "onset": 10
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 10.5
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39599999999999996,
        "onset": 11
      },
      {
        "noteIndices": [
          33,
          53
        ],
        "duration": 0.4693333333333333,
        "onset": 11.5
      },
      {
        "noteIndices": [
          34,
          50
        ],
        "duration": 0.7973333333333333,
        "onset": 12
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.39599999999999996,
        "onset": 12.5
      },
      {
        "noteIndices": [
          24,
          48,
          52
        ],
        "duration": 0.7973333333333333,
        "onset": 13
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39599999999999996,
        "onset": 13.5
      },
      {
        "noteIndices": [
          38,
          50,
          53
        ],
        "duration": 0.7973333333333333,
        "onset": 14
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 14.5
      },
      {
        "noteIndices": [
          28,
          46,
          50
        ],
        "duration": 1.5986666666666667,
        "onset": 15
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39599999999999996,
        "onset": 15.5
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39599999999999996,
        "onset": 16
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 16.5
      },
      {
        "noteIndices": [
          40,
          45,
          48
        ],
        "duration": 0.7973333333333333,
        "onset": 17
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 17.5
      }
    ],
    "key": "B minor",
    "tonic": 11,
    "scale": "minor"
  },
  "A09(C♯ major)": {
    "notes": [
      {
        "noteIndices": [
          16,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          32,
          59
        ],
        "duration": 1.5987654320987652,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          21,
          57
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          28,
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          35,
          51
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          33,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          16,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          23,
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 2.797839506172839,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 0.46930727023319607,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          23,
          52
        ],
        "duration": 0.7969821673525376,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      },
      {
        "noteIndices": [
          21,
          49
        ],
        "duration": 1.5987654320987652,
        "onset": 12.002743484224963
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.3960905349794238,
        "onset": 12.503257887517144
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 13.002572016460903
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 13.503086419753084
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.3960905349794238,
        "onset": 14.003600823045264
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 14.502914951989023
      }
    ],
    "key": "C♯ major",
    "tonic": 1,
    "scale": "major"
  },
  "A09 (modified)": {
    "notes": [
      {
        "noteIndices": [
          16,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          31,
          59
        ],
        "duration": 1.5987654320987652,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          21,
          57
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          28,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          36,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          35,
          50
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          33,
          52
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          16,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          23,
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 2.797839506172839,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          28,
          47
        ],
        "duration": 0.46930727023319607,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          23,
          52
        ],
        "duration": 0.7969821673525376,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      },
      {
        "noteIndices": [
          21,
          48
        ],
        "duration": 1.5987654320987652,
        "onset": 12.002743484224963
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.3960905349794238,
        "onset": 12.503257887517144
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.3960905349794238,
        "onset": 13.002572016460903
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 13.503086419753084
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.3960905349794238,
        "onset": 14.003600823045264
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 14.502914951989023
      }
    ],
    "key": "C♯ minor",
    "tonic": 1,
    "scale": "minor"
  },
  "A10(C major)": {
    "notes": [
      {
        "noteIndices": [
          15
        ],
        "duration": 0.39599999999999996,
        "onset": 0
      },
      {
        "noteIndices": [
          22,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          27,
          75
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          29,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          31,
          62
        ],
        "duration": 0.39599999999999996,
        "onset": 2
      },
      {
        "noteIndices": [
          34,
          74
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          39,
          60
        ],
        "duration": 0.39599999999999996,
        "onset": 3
      },
      {
        "noteIndices": [
          41,
          72
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          43,
          58
        ],
        "duration": 0.39599999999999996,
        "onset": 4
      },
      {
        "noteIndices": [
          41,
          70
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          34,
          68
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          31,
          55
        ],
        "duration": 0.39599999999999996,
        "onset": 6
      },
      {
        "noteIndices": [
          29,
          67
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          27,
          53
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      },
      {
        "noteIndices": [
          22,
          65
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          17,
          55
        ],
        "duration": 0.39599999999999996,
        "onset": 8
      },
      {
        "noteIndices": [
          24,
          67
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          29,
          56
        ],
        "duration": 0.39599999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          32,
          68
        ],
        "duration": 0.39599999999999996,
        "onset": 9.5
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.39599999999999996,
        "onset": 10
      },
      {
        "noteIndices": [
          41,
          65
        ],
        "duration": 0.39599999999999996,
        "onset": 10.5
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 11
      },
      {
        "noteIndices": [
          32,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 11.5
      },
      {
        "noteIndices": [
          22,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 12
      },
      {
        "noteIndices": [
          29,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 12.5
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.9373333333333332,
        "onset": 13
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39599999999999996,
        "onset": 13.5
      },
      {
        "noteIndices": [
          39,
          55
        ],
        "duration": 0.9373333333333332,
        "onset": 14
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 14.5
      },
      {
        "noteIndices": [
          38,
          56
        ],
        "duration": 0.9373333333333332,
        "onset": 15
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39599999999999996,
        "onset": 15.5
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.7973333333333333,
        "onset": 16
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "A10 (modified)": {
    "notes": [
      {
        "noteIndices": [
          15
        ],
        "duration": 0.39599999999999996,
        "onset": 0
      },
      {
        "noteIndices": [
          22,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          27,
          75
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          29,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          30,
          61
        ],
        "duration": 0.39599999999999996,
        "onset": 2
      },
      {
        "noteIndices": [
          34,
          73
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          39,
          59
        ],
        "duration": 0.39599999999999996,
        "onset": 3
      },
      {
        "noteIndices": [
          41,
          71
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          42,
          58
        ],
        "duration": 0.39599999999999996,
        "onset": 4
      },
      {
        "noteIndices": [
          41,
          70
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          34,
          68
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          30,
          54
        ],
        "duration": 0.39599999999999996,
        "onset": 6
      },
      {
        "noteIndices": [
          29,
          66
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          27,
          53
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      },
      {
        "noteIndices": [
          22,
          65
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          17,
          54
        ],
        "duration": 0.39599999999999996,
        "onset": 8
      },
      {
        "noteIndices": [
          23,
          66
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          29,
          56
        ],
        "duration": 0.39599999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          32,
          68
        ],
        "duration": 0.39599999999999996,
        "onset": 9.5
      },
      {
        "noteIndices": [
          35,
          53
        ],
        "duration": 0.39599999999999996,
        "onset": 10
      },
      {
        "noteIndices": [
          41,
          65
        ],
        "duration": 0.39599999999999996,
        "onset": 10.5
      },
      {
        "noteIndices": [
          35,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 11
      },
      {
        "noteIndices": [
          32,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 11.5
      },
      {
        "noteIndices": [
          22,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 12
      },
      {
        "noteIndices": [
          29,
          63
        ],
        "duration": 0.39599999999999996,
        "onset": 12.5
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.9373333333333332,
        "onset": 13
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 13.5
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 14
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 14.5
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 0.9373333333333332,
        "onset": 15
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39599999999999996,
        "onset": 15.5
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.7973333333333333,
        "onset": 16
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "A11(D major)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.39589442815249265,
        "onset": 0
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39589442815249265,
        "onset": 0.5
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39589442815249265,
        "onset": 1
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.469208211143695,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.469208211143695,
        "onset": 2
      },
      {
        "noteIndices": [
          45,
          57,
          60
        ],
        "duration": 0.469208211143695,
        "onset": 2.5
      },
      {
        "noteIndices": [
          22,
          53,
          60
        ],
        "duration": 1.1979472140762462,
        "onset": 2.9985337243401755
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39589442815249265,
        "onset": 3.498533724340176
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39589442815249265,
        "onset": 3.9985337243401755
      },
      {
        "noteIndices": [
          34,
          58,
          62
        ],
        "duration": 0.39589442815249265,
        "onset": 4.4985337243401755
      },
      {
        "noteIndices": [
          41,
          57,
          60
        ],
        "duration": 0.39589442815249265,
        "onset": 4.9985337243401755
      },
      {
        "noteIndices": [
          46,
          55,
          58
        ],
        "duration": 0.39589442815249265,
        "onset": 5.4985337243401755
      },
      {
        "noteIndices": [
          17,
          53,
          58
        ],
        "duration": 0.7961876832844574,
        "onset": 5.9985337243401755
      },
      {
        "noteIndices": [
          24,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 6.498533724340176
      },
      {
        "noteIndices": [
          29,
          48,
          57
        ],
        "duration": 1.8739002932551319,
        "onset": 6.998533724340175
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39589442815249265,
        "onset": 7.4985337243401755
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39589442815249265,
        "onset": 7.9985337243401755
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.39589442815249265,
        "onset": 8.497067448680351
      },
      {
        "noteIndices": [
          19,
          50,
          55,
          58
        ],
        "duration": 1.598240469208211,
        "onset": 8.997067448680351
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39589442815249265,
        "onset": 9.497067448680351
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39589442815249265,
        "onset": 9.997067448680351
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39589442815249265,
        "onset": 10.497067448680351
      },
      {
        "noteIndices": [
          38,
          48,
          57
        ],
        "duration": 0.39589442815249265,
        "onset": 10.997067448680351
      },
      {
        "noteIndices": [
          41,
          46,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 11.497067448680351
      },
      {
        "noteIndices": [
          21,
          45,
          48,
          57
        ],
        "duration": 1.598240469208211,
        "onset": 11.997067448680351
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.39589442815249265,
        "onset": 12.497067448680351
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39589442815249265,
        "onset": 12.997067448680353
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39589442815249265,
        "onset": 13.497067448680351
      },
      {
        "noteIndices": [
          40,
          46,
          57
        ],
        "duration": 0.39589442815249265,
        "onset": 13.995601173020527
      },
      {
        "noteIndices": [
          43,
          48,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 14.495601173020527
      },
      {
        "noteIndices": [
          22,
          52,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 14.995601173020527
      },
      {
        "noteIndices": [
          29,
          50,
          53
        ],
        "duration": 1,
        "onset": 15.495601173020527
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39589442815249265,
        "onset": 15.995601173020528
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "A11 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.39589442815249265,
        "onset": 0
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.39589442815249265,
        "onset": 0.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39589442815249265,
        "onset": 1
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.469208211143695,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.469208211143695,
        "onset": 2
      },
      {
        "noteIndices": [
          44,
          56,
          60
        ],
        "duration": 0.469208211143695,
        "onset": 2.5
      },
      {
        "noteIndices": [
          22,
          53,
          60
        ],
        "duration": 1.1979472140762462,
        "onset": 2.9985337243401755
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39589442815249265,
        "onset": 3.498533724340176
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39589442815249265,
        "onset": 3.9985337243401755
      },
      {
        "noteIndices": [
          34,
          58,
          61
        ],
        "duration": 0.39589442815249265,
        "onset": 4.4985337243401755
      },
      {
        "noteIndices": [
          41,
          56,
          60
        ],
        "duration": 0.39589442815249265,
        "onset": 4.9985337243401755
      },
      {
        "noteIndices": [
          46,
          55,
          58
        ],
        "duration": 0.39589442815249265,
        "onset": 5.4985337243401755
      },
      {
        "noteIndices": [
          17,
          53,
          58
        ],
        "duration": 0.7961876832844574,
        "onset": 5.9985337243401755
      },
      {
        "noteIndices": [
          24,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 6.498533724340176
      },
      {
        "noteIndices": [
          29,
          48,
          56
        ],
        "duration": 1.8739002932551319,
        "onset": 6.998533724340175
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39589442815249265,
        "onset": 7.4985337243401755
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39589442815249265,
        "onset": 7.9985337243401755
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.39589442815249265,
        "onset": 8.497067448680351
      },
      {
        "noteIndices": [
          19,
          49,
          55,
          58
        ],
        "duration": 1.598240469208211,
        "onset": 8.997067448680351
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39589442815249265,
        "onset": 9.497067448680351
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39589442815249265,
        "onset": 9.997067448680351
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39589442815249265,
        "onset": 10.497067448680351
      },
      {
        "noteIndices": [
          37,
          48,
          56
        ],
        "duration": 0.39589442815249265,
        "onset": 10.997067448680351
      },
      {
        "noteIndices": [
          41,
          46,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 11.497067448680351
      },
      {
        "noteIndices": [
          20,
          44,
          48,
          56
        ],
        "duration": 1.598240469208211,
        "onset": 11.997067448680351
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39589442815249265,
        "onset": 12.497067448680351
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39589442815249265,
        "onset": 12.997067448680353
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39589442815249265,
        "onset": 13.497067448680351
      },
      {
        "noteIndices": [
          39,
          46,
          56
        ],
        "duration": 0.39589442815249265,
        "onset": 13.995601173020527
      },
      {
        "noteIndices": [
          43,
          48,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 14.495601173020527
      },
      {
        "noteIndices": [
          22,
          51,
          55
        ],
        "duration": 0.39589442815249265,
        "onset": 14.995601173020527
      },
      {
        "noteIndices": [
          29,
          49,
          53
        ],
        "duration": 1,
        "onset": 15.495601173020527
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39589442815249265,
        "onset": 15.995601173020528
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "A12(A major)": {
    "notes": [
      {
        "noteIndices": [
          24,
          50,
          53,
          62
        ],
        "duration": 0.39625,
        "onset": 0
      },
      {
        "noteIndices": [
          31,
          52,
          64
        ],
        "duration": 2.09875,
        "onset": 0.5
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39625,
        "onset": 1
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39625,
        "onset": 2
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 2.5
      },
      {
        "noteIndices": [
          36,
          55,
          67
        ],
        "duration": 0.9375,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          24,
          55,
          59,
          67
        ],
        "duration": 0.39625,
        "onset": 4
      },
      {
        "noteIndices": [
          31,
          57,
          69
        ],
        "duration": 0.39625,
        "onset": 4.5
      },
      {
        "noteIndices": [
          36,
          48,
          60
        ],
        "duration": 1.59875,
        "onset": 5
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 5.5
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39625,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 6.5
      },
      {
        "noteIndices": [
          36,
          50,
          62
        ],
        "duration": 0.9375,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 7.5
      },
      {
        "noteIndices": [
          17,
          50,
          53,
          62
        ],
        "duration": 0.39625,
        "onset": 8
      },
      {
        "noteIndices": [
          24,
          52,
          64
        ],
        "duration": 0.39625,
        "onset": 8.5
      },
      {
        "noteIndices": [
          29,
          48,
          52,
          60
        ],
        "duration": 1.59875,
        "onset": 9
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 10
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39625,
        "onset": 10.5
      },
      {
        "noteIndices": [
          41,
          45,
          57
        ],
        "duration": 0.9375,
        "onset": 11
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39625,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          19,
          50,
          62
        ],
        "duration": 3.75,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39625,
        "onset": 12.5
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 13
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 13.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39625,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 14.499999999999998
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39625,
        "onset": 15
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 15.5
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "A12 (modified)": {
    "notes": [
      {
        "noteIndices": [
          24,
          50,
          53,
          62
        ],
        "duration": 0.39625,
        "onset": 0
      },
      {
        "noteIndices": [
          31,
          51,
          63
        ],
        "duration": 2.09875,
        "onset": 0.5
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39625,
        "onset": 1
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39625,
        "onset": 2
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 2.5
      },
      {
        "noteIndices": [
          36,
          55,
          67
        ],
        "duration": 0.9375,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          24,
          55,
          58,
          67
        ],
        "duration": 0.39625,
        "onset": 4
      },
      {
        "noteIndices": [
          31,
          56,
          68
        ],
        "duration": 0.39625,
        "onset": 4.5
      },
      {
        "noteIndices": [
          36,
          48,
          60
        ],
        "duration": 1.59875,
        "onset": 5
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 5.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39625,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 6.5
      },
      {
        "noteIndices": [
          36,
          50,
          62
        ],
        "duration": 0.9375,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 7.5
      },
      {
        "noteIndices": [
          17,
          50,
          53,
          62
        ],
        "duration": 0.39625,
        "onset": 8
      },
      {
        "noteIndices": [
          24,
          51,
          63
        ],
        "duration": 0.39625,
        "onset": 8.5
      },
      {
        "noteIndices": [
          29,
          48,
          51,
          60
        ],
        "duration": 1.59875,
        "onset": 9
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39625,
        "onset": 10
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39625,
        "onset": 10.5
      },
      {
        "noteIndices": [
          41,
          44,
          56
        ],
        "duration": 0.9375,
        "onset": 11
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39625,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          19,
          50,
          62
        ],
        "duration": 3.75,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39625,
        "onset": 12.5
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39625,
        "onset": 13
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39625,
        "onset": 13.5
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39625,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 14.499999999999998
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39625,
        "onset": 15
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39625,
        "onset": 15.5
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "A13(E major)": {
    "notes": [
      {
        "noteIndices": [
          14,
          54
        ],
        "duration": 0.79625,
        "onset": 0
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.39625,
        "onset": 0.5
      },
      {
        "noteIndices": [
          26,
          54
        ],
        "duration": 0.79625,
        "onset": 1
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.39625,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          30,
          54
        ],
        "duration": 0.79625,
        "onset": 2
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 2.5
      },
      {
        "noteIndices": [
          38,
          54
        ],
        "duration": 0.7975,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          40,
          52
        ],
        "duration": 0.79625,
        "onset": 4
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 4.5
      },
      {
        "noteIndices": [
          42,
          50
        ],
        "duration": 0.7975,
        "onset": 5
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 5.5
      },
      {
        "noteIndices": [
          14,
          54
        ],
        "duration": 0.7975,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.39625,
        "onset": 6.5
      },
      {
        "noteIndices": [
          26,
          55
        ],
        "duration": 0.7975,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.39625,
        "onset": 7.5
      },
      {
        "noteIndices": [
          30,
          57
        ],
        "duration": 0.79625,
        "onset": 8
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 8.5
      },
      {
        "noteIndices": [
          38,
          54
        ],
        "duration": 2.3962499999999998,
        "onset": 9
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39625,
        "onset": 10
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 10.5
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.39625,
        "onset": 11
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          16,
          55
        ],
        "duration": 0.7975,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.39625,
        "onset": 12.5
      },
      {
        "noteIndices": [
          28,
          55
        ],
        "duration": 0.79625,
        "onset": 13
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39625,
        "onset": 13.5
      },
      {
        "noteIndices": [
          31,
          55
        ],
        "duration": 0.7975,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39625,
        "onset": 14.499999999999998
      },
      {
        "noteIndices": [
          40,
          55
        ],
        "duration": 0.79625,
        "onset": 15
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39625,
        "onset": 15.5
      }
    ],
    "key": "E major",
    "tonic": 4,
    "scale": "major"
  },
  "A13 (modified)": {
    "notes": [
      {
        "noteIndices": [
          14,
          53
        ],
        "duration": 0.79625,
        "onset": 0
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.39625,
        "onset": 0.5
      },
      {
        "noteIndices": [
          26,
          53
        ],
        "duration": 0.79625,
        "onset": 1
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39625,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          29,
          53
        ],
        "duration": 0.79625,
        "onset": 2
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 2.5
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 0.7975,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.79625,
        "onset": 4
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 4.5
      },
      {
        "noteIndices": [
          41,
          50
        ],
        "duration": 0.7975,
        "onset": 5
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 5.5
      },
      {
        "noteIndices": [
          14,
          53
        ],
        "duration": 0.7975,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.39625,
        "onset": 6.5
      },
      {
        "noteIndices": [
          26,
          55
        ],
        "duration": 0.7975,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39625,
        "onset": 7.5
      },
      {
        "noteIndices": [
          29,
          57
        ],
        "duration": 0.79625,
        "onset": 8
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 8.5
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 2.3962499999999998,
        "onset": 9
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39625,
        "onset": 10
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 10.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39625,
        "onset": 11
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39625,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          15,
          55
        ],
        "duration": 0.7975,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.39625,
        "onset": 12.5
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.79625,
        "onset": 13
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39625,
        "onset": 13.5
      },
      {
        "noteIndices": [
          31,
          55
        ],
        "duration": 0.7975,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39625,
        "onset": 14.499999999999998
      },
      {
        "noteIndices": [
          39,
          55
        ],
        "duration": 0.79625,
        "onset": 15
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39625,
        "onset": 15.5
      }
    ],
    "key": "E minor",
    "tonic": 4,
    "scale": "minor"
  },
  "A14(A♭ major)": {
    "notes": [
      {
        "noteIndices": [
          23,
          54,
          66
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          30,
          56,
          68
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          35,
          47,
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          34,
          49,
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          35,
          51,
          63
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          39,
          54,
          66
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          28,
          52,
          64
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          35,
          51,
          63
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          44,
          49,
          61
        ],
        "duration": 1.5987654320987652,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          18,
          51,
          63
        ],
        "duration": 0.3960905349794238,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          25,
          52,
          64
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          30,
          46,
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          32,
          47,
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          34,
          49,
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          30,
          42,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          23,
          40,
          52
        ],
        "duration": 0.7969821673525376,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          35,
          39,
          51
        ],
        "duration": 1.8748285322359393,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.7969821673525376,
        "onset": 11.002914951989023
      }
    ],
    "key": "A♭ major",
    "tonic": 8,
    "scale": "major"
  },
  "A14 (modified)": {
    "notes": [
      {
        "noteIndices": [
          23,
          54,
          66
        ],
        "duration": 0.3960905349794238,
        "onset": 0
      },
      {
        "noteIndices": [
          30,
          55,
          67
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          35,
          47,
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          33,
          49,
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          35,
          50,
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          38,
          54,
          66
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          28,
          52,
          64
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          35,
          50,
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          43,
          49,
          61
        ],
        "duration": 1.5987654320987652,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          18,
          50,
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          25,
          52,
          64
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          30,
          45,
          57
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          31,
          47,
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          33,
          49,
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          30,
          42,
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          23,
          40,
          52
        ],
        "duration": 0.7969821673525376,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          35,
          38,
          50
        ],
        "duration": 1.8748285322359393,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.7969821673525376,
        "onset": 11.002914951989023
      }
    ],
    "key": "A♭ minor",
    "tonic": 8,
    "scale": "minor"
  },
  "G01(C major)": {
    "notes": [
      {
        "noteIndices": [
          27
        ],
        "duration": 0.23529411764705885,
        "onset": 0
      },
      {
        "noteIndices": [
          26,
          46
        ],
        "duration": 0.19794584500466852,
        "onset": 0.25023342670401494
      },
      {
        "noteIndices": [
          24,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 0.5004668534080299
      },
      {
        "noteIndices": [
          22,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 0.7507002801120449
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.39589169000933705,
        "onset": 1.0009337068160598
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 1.251167133520075
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 1.5014005602240899
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 1.7497665732959853
      },
      {
        "noteIndices": [
          27,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 2
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 2.2502334267040154
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 2.50046685340803
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 2.7507002801120453
      },
      {
        "noteIndices": [
          27,
          56
        ],
        "duration": 0.39589169000933705,
        "onset": 3.0009337068160598
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 3.251167133520075
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.19794584500466852,
        "onset": 3.5014005602240896
      },
      {
        "noteIndices": [
          39,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 3.7516339869281046
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.39589169000933705,
        "onset": 4.0018674136321195
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 4.252100840336135
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 4.502334267040149
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 4.752567693744164
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 5.002801120448179
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 5.251167133520075
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 5.5014005602240905
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.19794584500466852,
        "onset": 5.751633986928105
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39589169000933705,
        "onset": 6.0018674136321195
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 6.2521008403361344
      },
      {
        "noteIndices": [
          36,
          50
        ],
        "duration": 0.19794584500466852,
        "onset": 6.50233426704015
      },
      {
        "noteIndices": [
          41,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 6.752567693744165
      },
      {
        "noteIndices": [
          26,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 7.002801120448179
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.19794584500466852,
        "onset": 7.253034547152194
      },
      {
        "noteIndices": [
          34,
          44
        ],
        "duration": 0.39589169000933705,
        "onset": 7.503267973856209
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.19794584500466852,
        "onset": 7.753501400560225
      },
      {
        "noteIndices": [
          27,
          43
        ],
        "duration": 0.7973856209150327,
        "onset": 8.003734827264239
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 8.253968253968255
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 8.50420168067227
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 8.752567693744165
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 9.00280112044818
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19794584500466852,
        "onset": 9.253034547152195
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 9.503267973856211
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 9.753501400560225
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.39589169000933705,
        "onset": 10.003734827264239
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 10.253968253968253
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 10.504201680672269
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 10.754435107376285
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 11.004668534080299
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19794584500466852,
        "onset": 11.254901960784315
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.19794584500466852,
        "onset": 11.505135387488329
      },
      {
        "noteIndices": [
          32,
          58
        ],
        "duration": 0.19794584500466852,
        "onset": 11.755368814192344
      },
      {
        "noteIndices": [
          31,
          60
        ],
        "duration": 0.39589169000933705,
        "onset": 12.00560224089636
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 12.253968253968255
      },
      {
        "noteIndices": [
          39,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 12.504201680672269
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.19794584500466852,
        "onset": 12.754435107376285
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 13.0046685340803
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19794584500466852,
        "onset": 13.254901960784315
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 13.50513538748833
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 13.755368814192343
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.39589169000933705,
        "onset": 14.005602240896359
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.19794584500466852,
        "onset": 14.255835667600374
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 14.506069094304388
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 14.756302521008404
      },
      {
        "noteIndices": [
          32,
          48
        ],
        "duration": 0.5994397759103642,
        "onset": 15.006535947712418
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19794584500466852,
        "onset": 15.256769374416434
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 15.50700280112045
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 15.755368814192343
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.9374416433239963,
        "onset": 16.00560224089636
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "G01 (modified)": {
    "notes": [
      {
        "noteIndices": [
          27
        ],
        "duration": 0.23529411764705885,
        "onset": 0
      },
      {
        "noteIndices": [
          25,
          46
        ],
        "duration": 0.19794584500466852,
        "onset": 0.25023342670401494
      },
      {
        "noteIndices": [
          23,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 0.5004668534080299
      },
      {
        "noteIndices": [
          22,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 0.7507002801120449
      },
      {
        "noteIndices": [
          27,
          54
        ],
        "duration": 0.39589169000933705,
        "onset": 1.0009337068160598
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 1.251167133520075
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 1.5014005602240899
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 1.7497665732959853
      },
      {
        "noteIndices": [
          27,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 2
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 2.2502334267040154
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 2.50046685340803
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 2.7507002801120453
      },
      {
        "noteIndices": [
          27,
          56
        ],
        "duration": 0.39589169000933705,
        "onset": 3.0009337068160598
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 3.251167133520075
      },
      {
        "noteIndices": [
          35,
          54
        ],
        "duration": 0.19794584500466852,
        "onset": 3.5014005602240896
      },
      {
        "noteIndices": [
          39,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 3.7516339869281046
      },
      {
        "noteIndices": [
          27,
          54
        ],
        "duration": 0.39589169000933705,
        "onset": 4.0018674136321195
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 4.252100840336135
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 4.502334267040149
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 4.752567693744164
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 5.002801120448179
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 5.251167133520075
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 5.5014005602240905
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.19794584500466852,
        "onset": 5.751633986928105
      },
      {
        "noteIndices": [
          29,
          47
        ],
        "duration": 0.39589169000933705,
        "onset": 6.0018674136321195
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 6.2521008403361344
      },
      {
        "noteIndices": [
          35,
          49
        ],
        "duration": 0.19794584500466852,
        "onset": 6.50233426704015
      },
      {
        "noteIndices": [
          41,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 6.752567693744165
      },
      {
        "noteIndices": [
          25,
          46
        ],
        "duration": 0.39589169000933705,
        "onset": 7.002801120448179
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.19794584500466852,
        "onset": 7.253034547152194
      },
      {
        "noteIndices": [
          34,
          44
        ],
        "duration": 0.39589169000933705,
        "onset": 7.503267973856209
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.19794584500466852,
        "onset": 7.753501400560225
      },
      {
        "noteIndices": [
          27,
          42
        ],
        "duration": 0.7973856209150327,
        "onset": 8.003734827264239
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 8.253968253968255
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 8.50420168067227
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 8.752567693744165
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 9.00280112044818
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.19794584500466852,
        "onset": 9.253034547152195
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 9.503267973856211
      },
      {
        "noteIndices": [
          35,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 9.753501400560225
      },
      {
        "noteIndices": [
          27,
          54
        ],
        "duration": 0.39589169000933705,
        "onset": 10.003734827264239
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 10.253968253968253
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 10.504201680672269
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 10.754435107376285
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 11.004668534080299
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.19794584500466852,
        "onset": 11.254901960784315
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.19794584500466852,
        "onset": 11.505135387488329
      },
      {
        "noteIndices": [
          32,
          58
        ],
        "duration": 0.19794584500466852,
        "onset": 11.755368814192344
      },
      {
        "noteIndices": [
          30,
          59
        ],
        "duration": 0.39589169000933705,
        "onset": 12.00560224089636
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19794584500466852,
        "onset": 12.253968253968255
      },
      {
        "noteIndices": [
          39,
          58
        ],
        "duration": 0.39589169000933705,
        "onset": 12.504201680672269
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.19794584500466852,
        "onset": 12.754435107376285
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 13.0046685340803
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.19794584500466852,
        "onset": 13.254901960784315
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 13.50513538748833
      },
      {
        "noteIndices": [
          35,
          53
        ],
        "duration": 0.19794584500466852,
        "onset": 13.755368814192343
      },
      {
        "noteIndices": [
          27,
          54
        ],
        "duration": 0.39589169000933705,
        "onset": 14.005602240896359
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.19794584500466852,
        "onset": 14.255835667600374
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.39589169000933705,
        "onset": 14.506069094304388
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19794584500466852,
        "onset": 14.756302521008404
      },
      {
        "noteIndices": [
          32,
          47
        ],
        "duration": 0.5994397759103642,
        "onset": 15.006535947712418
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.19794584500466852,
        "onset": 15.256769374416434
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19794584500466852,
        "onset": 15.50700280112045
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.19794584500466852,
        "onset": 15.755368814192343
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.9374416433239963,
        "onset": 16.00560224089636
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "G02(E major)": {
    "notes": [
      {
        "noteIndices": [
          31,
          60
        ],
        "duration": 0.395473496128648,
        "onset": 0
      },
      {
        "noteIndices": [
          38,
          59
        ],
        "duration": 0.7957117331745086,
        "onset": 0.5002977963073257
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 1.0005955926146515
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.395473496128648,
        "onset": 1.498511018463371
      },
      {
        "noteIndices": [
          36,
          59
        ],
        "duration": 0.395473496128648,
        "onset": 1.9988088147706966
      },
      {
        "noteIndices": [
          38,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 2.4991066110780222
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.197736748064324,
        "onset": 2.749255509231685
      },
      {
        "noteIndices": [
          26,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 2.9994044073853483
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 3.4997022036926744
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 3.997617629541393
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.7957117331745086,
        "onset": 4.497915425848719
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 4.9982132221560445
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 5.49851101846337
      },
      {
        "noteIndices": [
          36,
          54
        ],
        "duration": 0.395473496128648,
        "onset": 5.99642644431209
      },
      {
        "noteIndices": [
          38,
          52
        ],
        "duration": 0.395473496128648,
        "onset": 6.4967242406194154
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.197736748064324,
        "onset": 6.746873138773078
      },
      {
        "noteIndices": [
          26,
          52
        ],
        "duration": 0.395473496128648,
        "onset": 6.997022036926741
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 7.497319833234068
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 7.997617629541394
      },
      {
        "noteIndices": [
          38,
          47
        ],
        "duration": 0.7957117331745086,
        "onset": 8.495533055390112
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 8.995830851697438
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 9.496128648004765
      },
      {
        "noteIndices": [
          36,
          47
        ],
        "duration": 0.395473496128648,
        "onset": 9.996426444312089
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 10.496724240619415
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 10.744490768314472
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 10.994639666468135
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 11.49493746277546
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 11.995235259082788
      },
      {
        "noteIndices": [
          38,
          47
        ],
        "duration": 0.7957117331745086,
        "onset": 12.495533055390114
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 12.99583085169744
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 13.493746277546157
      },
      {
        "noteIndices": [
          36,
          47
        ],
        "duration": 0.395473496128648,
        "onset": 13.994044073853482
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 14.49434187016081
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 14.744490768314472
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 14.994639666468135
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 15.492555092316856
      },
      {
        "noteIndices": [
          31,
          57,
          60
        ],
        "duration": 0.395473496128648,
        "onset": 15.992852888624181
      },
      {
        "noteIndices": [
          38,
          55,
          59
        ],
        "duration": 0.7957117331745086,
        "onset": 16.493150684931507
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 16.993448481238833
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.395473496128648,
        "onset": 17.49374627754616
      },
      {
        "noteIndices": [
          36,
          55,
          59
        ],
        "duration": 0.395473496128648,
        "onset": 17.991661703394875
      },
      {
        "noteIndices": [
          38,
          54,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 18.4919594997022
      },
      {
        "noteIndices": [
          52,
          55
        ],
        "duration": 0.197736748064324,
        "onset": 18.742108397855866
      },
      {
        "noteIndices": [
          26,
          54,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 18.99225729600953
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 19.492555092316856
      },
      {
        "noteIndices": [
          31,
          48,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 19.992852888624178
      },
      {
        "noteIndices": [
          38,
          47,
          55
        ],
        "duration": 0.7957117331745086,
        "onset": 20.490768314472902
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 20.991066110780224
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 21.491363907087553
      },
      {
        "noteIndices": [
          36,
          50,
          54
        ],
        "duration": 0.395473496128648,
        "onset": 21.991661703394875
      },
      {
        "noteIndices": [
          38,
          48,
          52
        ],
        "duration": 0.395473496128648,
        "onset": 22.491959499702205
      },
      {
        "noteIndices": [
          47,
          50
        ],
        "duration": 0.197736748064324,
        "onset": 22.73972602739726
      },
      {
        "noteIndices": [
          26,
          48,
          52
        ],
        "duration": 0.395473496128648,
        "onset": 22.98987492555092
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 23.490172721858247
      },
      {
        "noteIndices": [
          31,
          42,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 23.990470518165576
      },
      {
        "noteIndices": [
          38,
          43,
          47
        ],
        "duration": 0.7957117331745086,
        "onset": 24.4907683144729
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.395473496128648,
        "onset": 24.991066110780228
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 25.488981536628945
      },
      {
        "noteIndices": [
          36,
          47
        ],
        "duration": 0.395473496128648,
        "onset": 25.989279332936274
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 26.489577129243596
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 26.73972602739726
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 26.989874925550925
      },
      {
        "noteIndices": [
          38,
          42
        ],
        "duration": 0.395473496128648,
        "onset": 27.487790351399642
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.9362715902322811,
        "onset": 27.988088147706964
      }
    ],
    "key": "E major",
    "tonic": 4,
    "scale": "major"
  },
  "G02 (modified)": {
    "notes": [
      {
        "noteIndices": [
          31,
          60
        ],
        "duration": 0.395473496128648,
        "onset": 0
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.7957117331745086,
        "onset": 0.5002977963073257
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 1.0005955926146515
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.395473496128648,
        "onset": 1.498511018463371
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.395473496128648,
        "onset": 1.9988088147706966
      },
      {
        "noteIndices": [
          38,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 2.4991066110780222
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.197736748064324,
        "onset": 2.749255509231685
      },
      {
        "noteIndices": [
          26,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 2.9994044073853483
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 3.4997022036926744
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 3.997617629541393
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.7957117331745086,
        "onset": 4.497915425848719
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 4.9982132221560445
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 5.49851101846337
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.395473496128648,
        "onset": 5.99642644431209
      },
      {
        "noteIndices": [
          38,
          51
        ],
        "duration": 0.395473496128648,
        "onset": 6.4967242406194154
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.197736748064324,
        "onset": 6.746873138773078
      },
      {
        "noteIndices": [
          26,
          51
        ],
        "duration": 0.395473496128648,
        "onset": 6.997022036926741
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 7.497319833234068
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 7.997617629541394
      },
      {
        "noteIndices": [
          38,
          46
        ],
        "duration": 0.7957117331745086,
        "onset": 8.495533055390112
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 8.995830851697438
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 9.496128648004765
      },
      {
        "noteIndices": [
          36,
          46
        ],
        "duration": 0.395473496128648,
        "onset": 9.996426444312089
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 10.496724240619415
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 10.744490768314472
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 10.994639666468135
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 11.49493746277546
      },
      {
        "noteIndices": [
          31,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 11.995235259082788
      },
      {
        "noteIndices": [
          38,
          46
        ],
        "duration": 0.7957117331745086,
        "onset": 12.495533055390114
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 12.99583085169744
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 13.493746277546157
      },
      {
        "noteIndices": [
          36,
          46
        ],
        "duration": 0.395473496128648,
        "onset": 13.994044073853482
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 14.49434187016081
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 14.744490768314472
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 14.994639666468135
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 15.492555092316856
      },
      {
        "noteIndices": [
          31,
          57,
          60
        ],
        "duration": 0.395473496128648,
        "onset": 15.992852888624181
      },
      {
        "noteIndices": [
          38,
          55,
          58
        ],
        "duration": 0.7957117331745086,
        "onset": 16.493150684931507
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 16.993448481238833
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.395473496128648,
        "onset": 17.49374627754616
      },
      {
        "noteIndices": [
          36,
          55,
          58
        ],
        "duration": 0.395473496128648,
        "onset": 17.991661703394875
      },
      {
        "noteIndices": [
          38,
          53,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 18.4919594997022
      },
      {
        "noteIndices": [
          51,
          55
        ],
        "duration": 0.197736748064324,
        "onset": 18.742108397855866
      },
      {
        "noteIndices": [
          26,
          53,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 18.99225729600953
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 19.492555092316856
      },
      {
        "noteIndices": [
          31,
          48,
          57
        ],
        "duration": 0.395473496128648,
        "onset": 19.992852888624178
      },
      {
        "noteIndices": [
          38,
          46,
          55
        ],
        "duration": 0.7957117331745086,
        "onset": 20.490768314472902
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 20.991066110780224
      },
      {
        "noteIndices": [
          38,
          50
        ],
        "duration": 0.395473496128648,
        "onset": 21.491363907087553
      },
      {
        "noteIndices": [
          36,
          50,
          53
        ],
        "duration": 0.395473496128648,
        "onset": 21.991661703394875
      },
      {
        "noteIndices": [
          38,
          48,
          51
        ],
        "duration": 0.395473496128648,
        "onset": 22.491959499702205
      },
      {
        "noteIndices": [
          46,
          50
        ],
        "duration": 0.197736748064324,
        "onset": 22.73972602739726
      },
      {
        "noteIndices": [
          26,
          48,
          51
        ],
        "duration": 0.395473496128648,
        "onset": 22.98987492555092
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 23.490172721858247
      },
      {
        "noteIndices": [
          31,
          41,
          48
        ],
        "duration": 0.395473496128648,
        "onset": 23.990470518165576
      },
      {
        "noteIndices": [
          38,
          43,
          46
        ],
        "duration": 0.7957117331745086,
        "onset": 24.4907683144729
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.395473496128648,
        "onset": 24.991066110780228
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 0.395473496128648,
        "onset": 25.488981536628945
      },
      {
        "noteIndices": [
          36,
          46
        ],
        "duration": 0.395473496128648,
        "onset": 25.989279332936274
      },
      {
        "noteIndices": [
          38,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 26.489577129243596
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.197736748064324,
        "onset": 26.73972602739726
      },
      {
        "noteIndices": [
          26,
          45
        ],
        "duration": 0.395473496128648,
        "onset": 26.989874925550925
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.395473496128648,
        "onset": 27.487790351399642
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.9362715902322811,
        "onset": 27.988088147706964
      }
    ],
    "key": "E minor",
    "tonic": 4,
    "scale": "minor"
  },
  "G03(G major)": {
    "notes": [
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 0
      },
      {
        "noteIndices": [
          38,
          41,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 0.5008673026886383
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.39614050303555937,
        "onset": 1.0002168256721595
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.09865568083261057,
        "onset": 1.376626192541197
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 1.5010841283607979
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.09865568083261057,
        "onset": 1.8759757155247179
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 2.001951431049436
      },
      {
        "noteIndices": [
          38,
          41,
          58
        ],
        "duration": 0.39614050303555937,
        "onset": 2.501300954032957
      },
      {
        "noteIndices": [
          39,
          43,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 3.0021682567215957
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.09865568083261057,
        "onset": 3.3770598438855157
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 3.5030355594102334
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.09865568083261057,
        "onset": 3.8779271465741543
      },
      {
        "noteIndices": [
          34,
          50
        ],
        "duration": 0.39614050303555937,
        "onset": 4.002385082393755
      },
      {
        "noteIndices": [
          38,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 4.503252385082393
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 5.004119687771031
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.09865568083261057,
        "onset": 5.3790112749349515
      },
      {
        "noteIndices": [
          39,
          41,
          45
        ],
        "duration": 0.39614050303555937,
        "onset": 5.503469210754552
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.09865568083261057,
        "onset": 5.8798785776235905
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.9379878577623589,
        "onset": 6.004336513443191
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.39614050303555937,
        "onset": 6.505203816131829
      },
      {
        "noteIndices": [
          29,
          38,
          41
        ],
        "duration": 0.2974848222029488,
        "onset": 7.0045533391153505
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.09865568083261057,
        "onset": 7.3809627059843885
      },
      {
        "noteIndices": [
          31,
          41
        ],
        "duration": 0.2974848222029488,
        "onset": 7.5054206418039895
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.09865568083261057,
        "onset": 7.8803122289679095
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 8.006287944492628
      },
      {
        "noteIndices": [
          38,
          41,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 8.505637467476149
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.39614050303555937,
        "onset": 9.006504770164787
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.09865568083261057,
        "onset": 9.381396357328708
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 9.507372072853425
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.09865568083261057,
        "onset": 9.882263660017346
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 10.006721595836947
      },
      {
        "noteIndices": [
          38,
          41,
          58
        ],
        "duration": 0.39614050303555937,
        "onset": 10.507588898525585
      },
      {
        "noteIndices": [
          39,
          43,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 11.008456201214223
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.09865568083261057,
        "onset": 11.383347788378144
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 11.507805724197743
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.09865568083261057,
        "onset": 11.884215091066782
      },
      {
        "noteIndices": [
          34,
          50
        ],
        "duration": 0.39614050303555937,
        "onset": 12.008673026886383
      },
      {
        "noteIndices": [
          38,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 12.509540329575023
      },
      {
        "noteIndices": [
          29,
          50
        ],
        "duration": 0.39614050303555937,
        "onset": 13.008889852558541
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.09865568083261057,
        "onset": 13.38529921942758
      },
      {
        "noteIndices": [
          39,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 13.50975715524718
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.09865568083261057,
        "onset": 13.8846487424111
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.9379878577623589,
        "onset": 14.010624457935817
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.39614050303555937,
        "onset": 14.50997398091934
      },
      {
        "noteIndices": [
          34,
          38,
          46
        ],
        "duration": 1.0002168256721595,
        "onset": 15.010841283607979
      }
    ],
    "key": "G major",
    "tonic": 7,
    "scale": "major"
  },
  "G03 (modified)": {
    "notes": [
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 0
      },
      {
        "noteIndices": [
          37,
          41,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 0.5008673026886383
      },
      {
        "noteIndices": [
          39,
          42,
          54
        ],
        "duration": 0.39614050303555937,
        "onset": 1.0002168256721595
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.09865568083261057,
        "onset": 1.376626192541197
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 1.5010841283607979
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.09865568083261057,
        "onset": 1.8759757155247179
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 2.001951431049436
      },
      {
        "noteIndices": [
          37,
          41,
          58
        ],
        "duration": 0.39614050303555937,
        "onset": 2.501300954032957
      },
      {
        "noteIndices": [
          39,
          42,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 3.0021682567215957
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.09865568083261057,
        "onset": 3.3770598438855157
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 3.5030355594102334
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.09865568083261057,
        "onset": 3.8779271465741543
      },
      {
        "noteIndices": [
          34,
          49
        ],
        "duration": 0.39614050303555937,
        "onset": 4.002385082393755
      },
      {
        "noteIndices": [
          37,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 4.503252385082393
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 5.004119687771031
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.09865568083261057,
        "onset": 5.3790112749349515
      },
      {
        "noteIndices": [
          39,
          41,
          44
        ],
        "duration": 0.39614050303555937,
        "onset": 5.503469210754552
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.09865568083261057,
        "onset": 5.8798785776235905
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.9379878577623589,
        "onset": 6.004336513443191
      },
      {
        "noteIndices": [
          37,
          41
        ],
        "duration": 0.39614050303555937,
        "onset": 6.505203816131829
      },
      {
        "noteIndices": [
          29,
          37,
          41
        ],
        "duration": 0.2974848222029488,
        "onset": 7.0045533391153505
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.09865568083261057,
        "onset": 7.3809627059843885
      },
      {
        "noteIndices": [
          30,
          41
        ],
        "duration": 0.2974848222029488,
        "onset": 7.5054206418039895
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.09865568083261057,
        "onset": 7.8803122289679095
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 8.006287944492628
      },
      {
        "noteIndices": [
          37,
          41,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 8.505637467476149
      },
      {
        "noteIndices": [
          39,
          42,
          54
        ],
        "duration": 0.39614050303555937,
        "onset": 9.006504770164787
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.09865568083261057,
        "onset": 9.381396357328708
      },
      {
        "noteIndices": [
          29,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 9.507372072853425
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.09865568083261057,
        "onset": 9.882263660017346
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.39614050303555937,
        "onset": 10.006721595836947
      },
      {
        "noteIndices": [
          37,
          41,
          58
        ],
        "duration": 0.39614050303555937,
        "onset": 10.507588898525585
      },
      {
        "noteIndices": [
          39,
          42,
          51
        ],
        "duration": 0.39614050303555937,
        "onset": 11.008456201214223
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.09865568083261057,
        "onset": 11.383347788378144
      },
      {
        "noteIndices": [
          29,
          48
        ],
        "duration": 0.39614050303555937,
        "onset": 11.507805724197743
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.09865568083261057,
        "onset": 11.884215091066782
      },
      {
        "noteIndices": [
          34,
          49
        ],
        "duration": 0.39614050303555937,
        "onset": 12.008673026886383
      },
      {
        "noteIndices": [
          37,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 12.509540329575023
      },
      {
        "noteIndices": [
          29,
          49
        ],
        "duration": 0.39614050303555937,
        "onset": 13.008889852558541
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.09865568083261057,
        "onset": 13.38529921942758
      },
      {
        "noteIndices": [
          39,
          41,
          46
        ],
        "duration": 0.39614050303555937,
        "onset": 13.50975715524718
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.09865568083261057,
        "onset": 13.8846487424111
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.9379878577623589,
        "onset": 14.010624457935817
      },
      {
        "noteIndices": [
          37,
          41
        ],
        "duration": 0.39614050303555937,
        "onset": 14.50997398091934
      },
      {
        "noteIndices": [
          34,
          37,
          46
        ],
        "duration": 1.0002168256721595,
        "onset": 15.010841283607979
      }
    ],
    "key": "G minor",
    "tonic": 7,
    "scale": "minor"
  },
  "G04(C major)": {
    "notes": [
      {
        "noteIndices": [
          39,
          55,
          63
        ],
        "duration": 0.7983991995998,
        "onset": 0
      },
      {
        "noteIndices": [
          55,
          63
        ],
        "duration": 0.1980990495247624,
        "onset": 0.7503751875937968
      },
      {
        "noteIndices": [
          38,
          53,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 0.9994997498749375
      },
      {
        "noteIndices": [
          53,
          58
        ],
        "duration": 0.1980990495247624,
        "onset": 1.7498749374687343
      },
      {
        "noteIndices": [
          36,
          51,
          60
        ],
        "duration": 0.7983991995998,
        "onset": 2.0020010005002504
      },
      {
        "noteIndices": [
          51,
          60
        ],
        "duration": 0.1980990495247624,
        "onset": 2.752376188094047
      },
      {
        "noteIndices": [
          34,
          50,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 3.0015007503751874
      },
      {
        "noteIndices": [
          50,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 3.7518759379689843
      },
      {
        "noteIndices": [
          34,
          50,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 4.001000500250125
      },
      {
        "noteIndices": [
          48,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 4.751375687843922
      },
      {
        "noteIndices": [
          22,
          46,
          55
        ],
        "duration": 0.7983991995998,
        "onset": 5.003501750875438
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 5.753876938469235
      },
      {
        "noteIndices": [
          22,
          44,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 6.003001500750375
      },
      {
        "noteIndices": [
          41,
          50
        ],
        "duration": 0.1980990495247624,
        "onset": 6.753376688344172
      },
      {
        "noteIndices": [
          27,
          43,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 7.002501250625313
      },
      {
        "noteIndices": [
          27,
          39,
          46
        ],
        "duration": 0.7983991995998,
        "onset": 8.005002501250624
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.1980990495247624,
        "onset": 8.75537768884442
      },
      {
        "noteIndices": [
          22,
          44,
          48
        ],
        "duration": 0.7983991995998,
        "onset": 9.004502251125563
      },
      {
        "noteIndices": [
          41,
          50
        ],
        "duration": 0.1980990495247624,
        "onset": 9.75487743871936
      },
      {
        "noteIndices": [
          27,
          43,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 10.0040020010005
      },
      {
        "noteIndices": [
          43,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 10.754377188594297
      },
      {
        "noteIndices": [
          34,
          46,
          55
        ],
        "duration": 0.7983991995998,
        "onset": 11.006503251625812
      },
      {
        "noteIndices": [
          43,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 11.756878439219609
      },
      {
        "noteIndices": [
          29,
          45,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 12.00600300150075
      },
      {
        "noteIndices": [
          46,
          55
        ],
        "duration": 0.1980990495247624,
        "onset": 12.756378189094548
      },
      {
        "noteIndices": [
          24,
          48,
          57
        ],
        "duration": 0.7983991995998,
        "onset": 13.005502751375689
      },
      {
        "noteIndices": [
          51,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 13.755877938969485
      },
      {
        "noteIndices": [
          22,
          50,
          58
        ],
        "duration": 1.5997998999499752,
        "onset": 14.008004002001
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.1980990495247624,
        "onset": 14.758379189594796
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.6003001500750376,
        "onset": 15.007503751875937
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.1980990495247624,
        "onset": 15.757878939469736
      },
      {
        "noteIndices": [
          39,
          55,
          63
        ],
        "duration": 0.7983991995998,
        "onset": 16.007003501750876
      },
      {
        "noteIndices": [
          55,
          63
        ],
        "duration": 0.1980990495247624,
        "onset": 16.757378689344673
      },
      {
        "noteIndices": [
          38,
          53,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 17.009504752376188
      },
      {
        "noteIndices": [
          53,
          58
        ],
        "duration": 0.1980990495247624,
        "onset": 17.759879939969984
      },
      {
        "noteIndices": [
          36,
          51,
          60
        ],
        "duration": 0.7983991995998,
        "onset": 18.009004502251127
      },
      {
        "noteIndices": [
          51,
          60
        ],
        "duration": 0.1980990495247624,
        "onset": 18.759379689844923
      },
      {
        "noteIndices": [
          34,
          50,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 19.008504252126063
      },
      {
        "noteIndices": [
          50,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 19.75887943971986
      },
      {
        "noteIndices": [
          34,
          50,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 20.011005502751374
      },
      {
        "noteIndices": [
          48,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 20.76138069034517
      },
      {
        "noteIndices": [
          34,
          46,
          55
        ],
        "duration": 0.7983991995998,
        "onset": 21.010505252626313
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 21.76088044022011
      },
      {
        "noteIndices": [
          27,
          46,
          55
        ],
        "duration": 0.7983991995998,
        "onset": 22.010005002501252
      },
      {
        "noteIndices": [
          48,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 22.76038019009505
      },
      {
        "noteIndices": [
          31,
          51,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 23.012506253126563
      },
      {
        "noteIndices": [
          29,
          50,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 24.0120060030015
      },
      {
        "noteIndices": [
          51,
          60
        ],
        "duration": 0.1980990495247624,
        "onset": 24.7623811905953
      },
      {
        "noteIndices": [
          22,
          50,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 25.011505752876438
      },
      {
        "noteIndices": [
          50,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 25.761880940470235
      },
      {
        "noteIndices": [
          27,
          51,
          55
        ],
        "duration": 0.7983991995998,
        "onset": 26.01400700350175
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 26.764382191095546
      },
      {
        "noteIndices": [
          31,
          43,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 27.01350675337669
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.1980990495247624,
        "onset": 27.763881940970485
      },
      {
        "noteIndices": [
          29,
          44,
          48
        ],
        "duration": 0.7983991995998,
        "onset": 28.013006503251628
      },
      {
        "noteIndices": [
          41,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 28.763381690845424
      },
      {
        "noteIndices": [
          22,
          41,
          50
        ],
        "duration": 0.7983991995998,
        "onset": 29.01550775387694
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 29.765882941470736
      },
      {
        "noteIndices": [
          27,
          43,
          51
        ],
        "duration": 1.5997998999499752,
        "onset": 30.015007503751875
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.7983991995998,
        "onset": 31.014507253626814
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "G04 (modified)": {
    "notes": [
      {
        "noteIndices": [
          39,
          54,
          63
        ],
        "duration": 0.7983991995998,
        "onset": 0
      },
      {
        "noteIndices": [
          54,
          63
        ],
        "duration": 0.1980990495247624,
        "onset": 0.7503751875937968
      },
      {
        "noteIndices": [
          37,
          53,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 0.9994997498749375
      },
      {
        "noteIndices": [
          53,
          58
        ],
        "duration": 0.1980990495247624,
        "onset": 1.7498749374687343
      },
      {
        "noteIndices": [
          35,
          51,
          59
        ],
        "duration": 0.7983991995998,
        "onset": 2.0020010005002504
      },
      {
        "noteIndices": [
          51,
          59
        ],
        "duration": 0.1980990495247624,
        "onset": 2.752376188094047
      },
      {
        "noteIndices": [
          34,
          49,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 3.0015007503751874
      },
      {
        "noteIndices": [
          49,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 3.7518759379689843
      },
      {
        "noteIndices": [
          34,
          49,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 4.001000500250125
      },
      {
        "noteIndices": [
          47,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 4.751375687843922
      },
      {
        "noteIndices": [
          22,
          46,
          54
        ],
        "duration": 0.7983991995998,
        "onset": 5.003501750875438
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 5.753876938469235
      },
      {
        "noteIndices": [
          22,
          44,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 6.003001500750375
      },
      {
        "noteIndices": [
          41,
          49
        ],
        "duration": 0.1980990495247624,
        "onset": 6.753376688344172
      },
      {
        "noteIndices": [
          27,
          42,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 7.002501250625313
      },
      {
        "noteIndices": [
          27,
          39,
          46
        ],
        "duration": 0.7983991995998,
        "onset": 8.005002501250624
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.1980990495247624,
        "onset": 8.75537768884442
      },
      {
        "noteIndices": [
          22,
          44,
          47
        ],
        "duration": 0.7983991995998,
        "onset": 9.004502251125563
      },
      {
        "noteIndices": [
          41,
          49
        ],
        "duration": 0.1980990495247624,
        "onset": 9.75487743871936
      },
      {
        "noteIndices": [
          27,
          42,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 10.0040020010005
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 10.754377188594297
      },
      {
        "noteIndices": [
          34,
          46,
          54
        ],
        "duration": 0.7983991995998,
        "onset": 11.006503251625812
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 11.756878439219609
      },
      {
        "noteIndices": [
          29,
          45,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 12.00600300150075
      },
      {
        "noteIndices": [
          46,
          54
        ],
        "duration": 0.1980990495247624,
        "onset": 12.756378189094548
      },
      {
        "noteIndices": [
          23,
          47,
          57
        ],
        "duration": 0.7983991995998,
        "onset": 13.005502751375689
      },
      {
        "noteIndices": [
          51,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 13.755877938969485
      },
      {
        "noteIndices": [
          22,
          49,
          58
        ],
        "duration": 1.5997998999499752,
        "onset": 14.008004002001
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.1980990495247624,
        "onset": 14.758379189594796
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.6003001500750376,
        "onset": 15.007503751875937
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.1980990495247624,
        "onset": 15.757878939469736
      },
      {
        "noteIndices": [
          39,
          54,
          63
        ],
        "duration": 0.7983991995998,
        "onset": 16.007003501750876
      },
      {
        "noteIndices": [
          54,
          63
        ],
        "duration": 0.1980990495247624,
        "onset": 16.757378689344673
      },
      {
        "noteIndices": [
          37,
          53,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 17.009504752376188
      },
      {
        "noteIndices": [
          53,
          58
        ],
        "duration": 0.1980990495247624,
        "onset": 17.759879939969984
      },
      {
        "noteIndices": [
          35,
          51,
          59
        ],
        "duration": 0.7983991995998,
        "onset": 18.009004502251127
      },
      {
        "noteIndices": [
          51,
          59
        ],
        "duration": 0.1980990495247624,
        "onset": 18.759379689844923
      },
      {
        "noteIndices": [
          34,
          49,
          53
        ],
        "duration": 0.7983991995998,
        "onset": 19.008504252126063
      },
      {
        "noteIndices": [
          49,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 19.75887943971986
      },
      {
        "noteIndices": [
          34,
          49,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 20.011005502751374
      },
      {
        "noteIndices": [
          47,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 20.76138069034517
      },
      {
        "noteIndices": [
          34,
          46,
          54
        ],
        "duration": 0.7983991995998,
        "onset": 21.010505252626313
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 21.76088044022011
      },
      {
        "noteIndices": [
          27,
          46,
          54
        ],
        "duration": 0.7983991995998,
        "onset": 22.010005002501252
      },
      {
        "noteIndices": [
          47,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 22.76038019009505
      },
      {
        "noteIndices": [
          30,
          51,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 23.012506253126563
      },
      {
        "noteIndices": [
          29,
          49,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 24.0120060030015
      },
      {
        "noteIndices": [
          51,
          59
        ],
        "duration": 0.1980990495247624,
        "onset": 24.7623811905953
      },
      {
        "noteIndices": [
          22,
          49,
          58
        ],
        "duration": 0.7983991995998,
        "onset": 25.011505752876438
      },
      {
        "noteIndices": [
          49,
          56
        ],
        "duration": 0.1980990495247624,
        "onset": 25.761880940470235
      },
      {
        "noteIndices": [
          27,
          51,
          54
        ],
        "duration": 0.7983991995998,
        "onset": 26.01400700350175
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 26.764382191095546
      },
      {
        "noteIndices": [
          30,
          42,
          51
        ],
        "duration": 0.7983991995998,
        "onset": 27.01350675337669
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.1980990495247624,
        "onset": 27.763881940970485
      },
      {
        "noteIndices": [
          29,
          44,
          47
        ],
        "duration": 0.7983991995998,
        "onset": 28.013006503251628
      },
      {
        "noteIndices": [
          41,
          51
        ],
        "duration": 0.1980990495247624,
        "onset": 28.763381690845424
      },
      {
        "noteIndices": [
          22,
          41,
          49
        ],
        "duration": 0.7983991995998,
        "onset": 29.01550775387694
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.1980990495247624,
        "onset": 29.765882941470736
      },
      {
        "noteIndices": [
          27,
          42,
          51
        ],
        "duration": 1.5997998999499752,
        "onset": 30.015007503751875
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.7983991995998,
        "onset": 31.014507253626814
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "G05(F major)": {
    "notes": [
      {
        "noteIndices": [
          32,
          36,
          39,
          60
        ],
        "duration": 0.5316666666666666,
        "onset": 0
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 0.6666666666666666
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 0.9999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 1.3333333333333333
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 1.6666666666666665
      },
      {
        "noteIndices": [
          37,
          41,
          44,
          61
        ],
        "duration": 0.26499999999999996,
        "onset": 1.9999999999999996
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.26499999999999996,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          63
        ],
        "duration": 0.26499999999999996,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          68
        ],
        "duration": 0.16666666666666666,
        "onset": 3.333333333333333
      },
      {
        "noteIndices": [
          68
        ],
        "duration": 0.12999999999999998,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.26499999999999996,
        "onset": 3.6666666666666665
      },
      {
        "noteIndices": [
          37,
          41,
          44,
          61
        ],
        "duration": 0.26499999999999996,
        "onset": 3.999999999999999
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 4.333333333333333
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          60
        ],
        "duration": 0.23499999999999993,
        "onset": 4.999999999999999
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.12999999999999998,
        "onset": 5.166666666666666
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 5.333333333333333
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 5.666666666666666
      },
      {
        "noteIndices": [
          37,
          41,
          44,
          61
        ],
        "duration": 0.23499999999999993,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.12999999999999998,
        "onset": 6.166666666666666
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26499999999999996,
        "onset": 6.333333333333332
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 6.666666666666666
      },
      {
        "noteIndices": [
          37,
          39,
          43,
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26499999999999996,
        "onset": 7.333333333333333
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 7.666666666666665
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 7.833333333333332
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          56
        ],
        "duration": 0.5316666666666666,
        "onset": 7.999999999999998
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26499999999999996,
        "onset": 8.666666666666666
      },
      {
        "noteIndices": [
          32,
          36,
          39,
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 9.333333333333332
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 9.666666666666664
      },
      {
        "noteIndices": [
          32,
          37,
          41,
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 9.999999999999998
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26499999999999996,
        "onset": 10.333333333333332
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 10.666666666666666
      },
      {
        "noteIndices": [
          37,
          41,
          44,
          53
        ],
        "duration": 0.23499999999999993,
        "onset": 10.999999999999998
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.12999999999999998,
        "onset": 11.166666666666666
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 11.333333333333332
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.26499999999999996,
        "onset": 11.666666666666664
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          48
        ],
        "duration": 0.26499999999999996,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26499999999999996,
        "onset": 12.333333333333332
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.26499999999999996,
        "onset": 12.666666666666664
      },
      {
        "noteIndices": [
          39,
          44,
          48,
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 12.999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 13.333333333333332
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 13.499999999999998
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 13.666666666666664
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 13.833333333333332
      },
      {
        "noteIndices": [
          37,
          39,
          46,
          53
        ],
        "duration": 0.26499999999999996,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 14.33333333333333
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 14.499999999999996
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.16666666666666666,
        "onset": 14.666666666666666
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.12999999999999998,
        "onset": 14.833333333333332
      },
      {
        "noteIndices": [
          36,
          39,
          44,
          56
        ],
        "duration": 0.9383333333333331,
        "onset": 14.999999999999998
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "G05 (modified)": {
    "notes": [
      {
        "noteIndices": [
          32,
          35,
          39,
          59
        ],
        "duration": 0.5316666666666666,
        "onset": 0
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 0.6666666666666666
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 0.9999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 1.3333333333333333
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 1.4999999999999998
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 1.6666666666666665
      },
      {
        "noteIndices": [
          37,
          40,
          44,
          61
        ],
        "duration": 0.26499999999999996,
        "onset": 1.9999999999999996
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          64
        ],
        "duration": 0.26499999999999996,
        "onset": 2.6666666666666665
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          63
        ],
        "duration": 0.26499999999999996,
        "onset": 2.9999999999999996
      },
      {
        "noteIndices": [
          68
        ],
        "duration": 0.16666666666666666,
        "onset": 3.333333333333333
      },
      {
        "noteIndices": [
          68
        ],
        "duration": 0.12999999999999998,
        "onset": 3.4999999999999996
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.26499999999999996,
        "onset": 3.6666666666666665
      },
      {
        "noteIndices": [
          37,
          40,
          44,
          61
        ],
        "duration": 0.26499999999999996,
        "onset": 3.999999999999999
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 4.333333333333333
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          59
        ],
        "duration": 0.23499999999999993,
        "onset": 4.999999999999999
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.12999999999999998,
        "onset": 5.166666666666666
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 5.333333333333333
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 5.666666666666666
      },
      {
        "noteIndices": [
          37,
          40,
          44,
          61
        ],
        "duration": 0.23499999999999993,
        "onset": 5.999999999999999
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.12999999999999998,
        "onset": 6.166666666666666
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26499999999999996,
        "onset": 6.333333333333332
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 6.666666666666666
      },
      {
        "noteIndices": [
          37,
          39,
          42,
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 6.999999999999999
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26499999999999996,
        "onset": 7.333333333333333
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 7.666666666666665
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 7.833333333333332
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          56
        ],
        "duration": 0.5316666666666666,
        "onset": 7.999999999999998
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26499999999999996,
        "onset": 8.666666666666666
      },
      {
        "noteIndices": [
          32,
          35,
          39,
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 9.333333333333332
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 9.499999999999998
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 9.666666666666664
      },
      {
        "noteIndices": [
          32,
          37,
          40,
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 9.999999999999998
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26499999999999996,
        "onset": 10.333333333333332
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 10.666666666666666
      },
      {
        "noteIndices": [
          37,
          40,
          44,
          52
        ],
        "duration": 0.23499999999999993,
        "onset": 10.999999999999998
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.12999999999999998,
        "onset": 11.166666666666666
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 11.333333333333332
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.26499999999999996,
        "onset": 11.666666666666664
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          47
        ],
        "duration": 0.26499999999999996,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26499999999999996,
        "onset": 12.333333333333332
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.26499999999999996,
        "onset": 12.666666666666664
      },
      {
        "noteIndices": [
          39,
          44,
          47,
          51
        ],
        "duration": 0.26499999999999996,
        "onset": 12.999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 13.333333333333332
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 13.499999999999998
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.16666666666666666,
        "onset": 13.666666666666664
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.12999999999999998,
        "onset": 13.833333333333332
      },
      {
        "noteIndices": [
          37,
          39,
          46,
          52
        ],
        "duration": 0.26499999999999996,
        "onset": 13.999999999999998
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.16666666666666666,
        "onset": 14.33333333333333
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.12999999999999998,
        "onset": 14.499999999999996
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.16666666666666666,
        "onset": 14.666666666666666
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.12999999999999998,
        "onset": 14.833333333333332
      },
      {
        "noteIndices": [
          35,
          39,
          44,
          56
        ],
        "duration": 0.9383333333333331,
        "onset": 14.999999999999998
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "G06(C major)": {
    "notes": [
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7970135324311713,
        "onset": 0
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39524031731217923,
        "onset": 0.4997666822211853
      },
      {
        "noteIndices": [
          43,
          46,
          55
        ],
        "duration": 0.7970135324311713,
        "onset": 0.9995333644423706
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 1.499300046663556
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 1.9990667288847412
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39524031731217923,
        "onset": 2.4988334111059265
      },
      {
        "noteIndices": [
          39,
          63
        ],
        "duration": 0.7970135324311713,
        "onset": 2.998600093327112
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 3.9981334577694825
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 5.000933271115259
      },
      {
        "noteIndices": [
          39,
          60
        ],
        "duration": 0.7970135324311713,
        "onset": 6.00046663555763
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.39524031731217923,
        "onset": 6.500233317778815
      },
      {
        "noteIndices": [
          44,
          48,
          62
        ],
        "duration": 0.7970135324311713,
        "onset": 7
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.39524031731217923,
        "onset": 7.4997666822211855
      },
      {
        "noteIndices": [
          44,
          48,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 7.999533364442371
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 8.499300046663556
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 8.999066728884742
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.39524031731217923,
        "onset": 9.498833411105927
      },
      {
        "noteIndices": [
          46,
          50,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 9.998600093327113
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 10.498366775548298
      },
      {
        "noteIndices": [
          46,
          50,
          55
        ],
        "duration": 0.7970135324311713,
        "onset": 10.998133457769484
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.39524031731217923,
        "onset": 11.49790013999067
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7970135324311713,
        "onset": 11.997666822211855
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39524031731217923,
        "onset": 12.500699953336445
      },
      {
        "noteIndices": [
          43,
          46,
          55
        ],
        "duration": 0.7970135324311713,
        "onset": 13.00046663555763
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 13.500233317778816
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 14
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39524031731217923,
        "onset": 14.499766682221187
      },
      {
        "noteIndices": [
          39,
          63
        ],
        "duration": 0.7970135324311713,
        "onset": 14.999533364442371
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 15.999066728884742
      },
      {
        "noteIndices": [
          43,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 16.998600093327113
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 17.998133457769484
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.39524031731217923,
        "onset": 18.49790013999067
      },
      {
        "noteIndices": [
          46,
          50,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 18.997666822211855
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 19.49743350443304
      },
      {
        "noteIndices": [
          46,
          50,
          55
        ],
        "duration": 0.7970135324311713,
        "onset": 19.997200186654226
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.39524031731217923,
        "onset": 20.500233317778818
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 2.3943070461969205,
        "onset": 21.000000000000004
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 21.999533364442375
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 22.999066728884745
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 23.998600093327116
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.39524031731217923,
        "onset": 24.4983667755483
      },
      {
        "noteIndices": [
          41,
          44,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 24.998133457769484
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.39524031731217923,
        "onset": 25.49790013999067
      },
      {
        "noteIndices": [
          41,
          44,
          50
        ],
        "duration": 0.7970135324311713,
        "onset": 25.997666822211855
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 26.49743350443304
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 26.99720018665423
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39524031731217923,
        "onset": 27.496966868875408
      },
      {
        "noteIndices": [
          41,
          44,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 27.996733551096597
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 28.496500233317782
      },
      {
        "noteIndices": [
          41,
          44,
          50
        ],
        "duration": 0.7970135324311713,
        "onset": 28.999533364442375
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.39524031731217923,
        "onset": 29.49930004666356
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 29.999066728884742
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.39524031731217923,
        "onset": 30.498833411105927
      },
      {
        "noteIndices": [
          43,
          46,
          50
        ],
        "duration": 0.7970135324311713,
        "onset": 30.998600093327116
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 31.498366775548302
      },
      {
        "noteIndices": [
          43,
          46,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 31.998133457769484
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39524031731217923,
        "onset": 32.49790013999067
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.7970135324311713,
        "onset": 32.997666822211855
      },
      {
        "noteIndices": [
          43,
          46,
          55
        ],
        "duration": 1.5972935137657491,
        "onset": 33.997200186654226
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 34.9967335510966
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "G06 (modified)": {
    "notes": [
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7970135324311713,
        "onset": 0
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39524031731217923,
        "onset": 0.4997666822211853
      },
      {
        "noteIndices": [
          42,
          46,
          54
        ],
        "duration": 0.7970135324311713,
        "onset": 0.9995333644423706
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 1.499300046663556
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 1.9990667288847412
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.39524031731217923,
        "onset": 2.4988334111059265
      },
      {
        "noteIndices": [
          39,
          63
        ],
        "duration": 0.7970135324311713,
        "onset": 2.998600093327112
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 3.9981334577694825
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 5.000933271115259
      },
      {
        "noteIndices": [
          39,
          59
        ],
        "duration": 0.7970135324311713,
        "onset": 6.00046663555763
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.39524031731217923,
        "onset": 6.500233317778815
      },
      {
        "noteIndices": [
          44,
          47,
          61
        ],
        "duration": 0.7970135324311713,
        "onset": 7
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.39524031731217923,
        "onset": 7.4997666822211855
      },
      {
        "noteIndices": [
          44,
          47,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 7.999533364442371
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 8.499300046663556
      },
      {
        "noteIndices": [
          37,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 8.999066728884742
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.39524031731217923,
        "onset": 9.498833411105927
      },
      {
        "noteIndices": [
          46,
          49,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 9.998600093327113
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 10.498366775548298
      },
      {
        "noteIndices": [
          46,
          49,
          54
        ],
        "duration": 0.7970135324311713,
        "onset": 10.998133457769484
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.39524031731217923,
        "onset": 11.49790013999067
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7970135324311713,
        "onset": 11.997666822211855
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39524031731217923,
        "onset": 12.500699953336445
      },
      {
        "noteIndices": [
          42,
          46,
          54
        ],
        "duration": 0.7970135324311713,
        "onset": 13.00046663555763
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 13.500233317778816
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 14
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.39524031731217923,
        "onset": 14.499766682221187
      },
      {
        "noteIndices": [
          39,
          63
        ],
        "duration": 0.7970135324311713,
        "onset": 14.999533364442371
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 15.999066728884742
      },
      {
        "noteIndices": [
          42,
          46,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 16.998600093327113
      },
      {
        "noteIndices": [
          37,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 17.998133457769484
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.39524031731217923,
        "onset": 18.49790013999067
      },
      {
        "noteIndices": [
          46,
          49,
          58
        ],
        "duration": 0.7970135324311713,
        "onset": 18.997666822211855
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39524031731217923,
        "onset": 19.49743350443304
      },
      {
        "noteIndices": [
          46,
          49,
          54
        ],
        "duration": 0.7970135324311713,
        "onset": 19.997200186654226
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.39524031731217923,
        "onset": 20.500233317778818
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 2.3943070461969205,
        "onset": 21.000000000000004
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 21.999533364442375
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 22.999066728884745
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 23.998600093327116
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.39524031731217923,
        "onset": 24.4983667755483
      },
      {
        "noteIndices": [
          41,
          44,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 24.998133457769484
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.39524031731217923,
        "onset": 25.49790013999067
      },
      {
        "noteIndices": [
          41,
          44,
          49
        ],
        "duration": 0.7970135324311713,
        "onset": 25.997666822211855
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 26.49743350443304
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 26.99720018665423
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.39524031731217923,
        "onset": 27.496966868875408
      },
      {
        "noteIndices": [
          41,
          44,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 27.996733551096597
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 28.496500233317782
      },
      {
        "noteIndices": [
          41,
          44,
          49
        ],
        "duration": 0.7970135324311713,
        "onset": 28.999533364442375
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.39524031731217923,
        "onset": 29.49930004666356
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 29.999066728884742
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.39524031731217923,
        "onset": 30.498833411105927
      },
      {
        "noteIndices": [
          42,
          46,
          49
        ],
        "duration": 0.7970135324311713,
        "onset": 30.998600093327116
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39524031731217923,
        "onset": 31.498366775548302
      },
      {
        "noteIndices": [
          42,
          46,
          53
        ],
        "duration": 0.7970135324311713,
        "onset": 31.998133457769484
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.39524031731217923,
        "onset": 32.49790013999067
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.7970135324311713,
        "onset": 32.997666822211855
      },
      {
        "noteIndices": [
          42,
          46,
          54
        ],
        "duration": 1.5972935137657491,
        "onset": 33.997200186654226
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.7970135324311713,
        "onset": 34.9967335510966
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "G07(B♭ major)": {
    "notes": [
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 1.5985432733504712,
        "onset": 0
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 0.9987146529562981
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 2.000428449014567
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 2.249357326478149
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1979434447300771,
        "onset": 2.4982862039417304
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.1979434447300771,
        "onset": 2.7502142245072836
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 0.7977720651242501,
        "onset": 2.999143101970865
      },
      {
        "noteIndices": [
          42,
          46,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 3.997857754927163
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 4.999571550985432
      },
      {
        "noteIndices": [
          30,
          58
        ],
        "duration": 1.5985432733504712,
        "onset": 5.99828620394173
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.7977720651242501,
        "onset": 6.997000856898029
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.7977720651242501,
        "onset": 7.998714652956297
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.1979434447300771,
        "onset": 8.247643530419879
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1979434447300771,
        "onset": 8.49657240788346
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1979434447300771,
        "onset": 8.748500428449013
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 2.3963153384747216,
        "onset": 8.997429305912595
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 9.996143958868894
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.7977720651242501,
        "onset": 10.997857754927162
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 1.5985432733504712,
        "onset": 11.99657240788346
      },
      {
        "noteIndices": [
          42,
          46
        ],
        "duration": 0.7977720651242501,
        "onset": 12.99528706083976
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.7977720651242501,
        "onset": 13.997000856898028
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1979434447300771,
        "onset": 14.24592973436161
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1979434447300771,
        "onset": 14.494858611825192
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.1979434447300771,
        "onset": 14.746786632390743
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7977720651242501,
        "onset": 14.995715509854326
      },
      {
        "noteIndices": [
          41,
          44,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 15.994430162810625
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7977720651242501,
        "onset": 16.996143958868892
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 1.5985432733504712,
        "onset": 17.99485861182519
      },
      {
        "noteIndices": [
          42,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 18.99357326478149
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 19.995287060839757
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.1979434447300771,
        "onset": 20.24421593830334
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.1979434447300771,
        "onset": 20.49314481576692
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 20.745072836332472
      },
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 2.3963153384747216,
        "onset": 20.994001713796056
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 21.992716366752354
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.7977720651242501,
        "onset": 22.994430162810623
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 1.5985432733504712,
        "onset": 23.99314481576692
      },
      {
        "noteIndices": [
          42,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 24.99185946872322
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 25.99357326478149
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.1979434447300771,
        "onset": 26.24250214224507
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.1979434447300771,
        "onset": 26.491431019708653
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 26.743359040274203
      },
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 1.8744644387317908,
        "onset": 26.992287917737787
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 27.991002570694086
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7977720651242501,
        "onset": 28.992716366752354
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 0.93573264781491,
        "onset": 29.991431019708653
      },
      {
        "noteIndices": [
          42,
          44,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 30.99014567266495
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.467866323907455,
        "onset": 31.491002570694086
      },
      {
        "noteIndices": [
          32,
          36,
          48
        ],
        "duration": 0.7977720651242501,
        "onset": 31.991859468723217
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.467866323907455,
        "onset": 32.48971722365038
      },
      {
        "noteIndices": [
          25,
          37,
          49
        ],
        "duration": 2.3963153384747216,
        "onset": 32.990574121679515
      }
    ],
    "key": "B♭ major",
    "tonic": 10,
    "scale": "major"
  },
  "G07 (modified)": {
    "notes": [
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 1.5985432733504712,
        "onset": 0
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 0.9987146529562981
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 2.000428449014567
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 2.249357326478149
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.1979434447300771,
        "onset": 2.4982862039417304
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.1979434447300771,
        "onset": 2.7502142245072836
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 0.7977720651242501,
        "onset": 2.999143101970865
      },
      {
        "noteIndices": [
          42,
          45,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 3.997857754927163
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 4.999571550985432
      },
      {
        "noteIndices": [
          30,
          57
        ],
        "duration": 1.5985432733504712,
        "onset": 5.99828620394173
      },
      {
        "noteIndices": [
          42,
          45
        ],
        "duration": 0.7977720651242501,
        "onset": 6.997000856898029
      },
      {
        "noteIndices": [
          35,
          57
        ],
        "duration": 0.7977720651242501,
        "onset": 7.998714652956297
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.1979434447300771,
        "onset": 8.247643530419879
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1979434447300771,
        "onset": 8.49657240788346
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.1979434447300771,
        "onset": 8.748500428449013
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 2.3963153384747216,
        "onset": 8.997429305912595
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 9.996143958868894
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.7977720651242501,
        "onset": 10.997857754927162
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 1.5985432733504712,
        "onset": 11.99657240788346
      },
      {
        "noteIndices": [
          42,
          45
        ],
        "duration": 0.7977720651242501,
        "onset": 12.99528706083976
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.7977720651242501,
        "onset": 13.997000856898028
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.1979434447300771,
        "onset": 14.24592973436161
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1979434447300771,
        "onset": 14.494858611825192
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.1979434447300771,
        "onset": 14.746786632390743
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.7977720651242501,
        "onset": 14.995715509854326
      },
      {
        "noteIndices": [
          40,
          44,
          49
        ],
        "duration": 0.7977720651242501,
        "onset": 15.994430162810625
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.7977720651242501,
        "onset": 16.996143958868892
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 1.5985432733504712,
        "onset": 17.99485861182519
      },
      {
        "noteIndices": [
          42,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 18.99357326478149
      },
      {
        "noteIndices": [
          35,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 19.995287060839757
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.1979434447300771,
        "onset": 20.24421593830334
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.1979434447300771,
        "onset": 20.49314481576692
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 20.745072836332472
      },
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 2.3963153384747216,
        "onset": 20.994001713796056
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 21.992716366752354
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.7977720651242501,
        "onset": 22.994430162810623
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 1.5985432733504712,
        "onset": 23.99314481576692
      },
      {
        "noteIndices": [
          42,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 24.99185946872322
      },
      {
        "noteIndices": [
          35,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 25.99357326478149
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.1979434447300771,
        "onset": 26.24250214224507
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.1979434447300771,
        "onset": 26.491431019708653
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.1979434447300771,
        "onset": 26.743359040274203
      },
      {
        "noteIndices": [
          37,
          49
        ],
        "duration": 1.8744644387317908,
        "onset": 26.992287917737787
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.7977720651242501,
        "onset": 27.991002570694086
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.7977720651242501,
        "onset": 28.992716366752354
      },
      {
        "noteIndices": [
          32,
          51
        ],
        "duration": 0.93573264781491,
        "onset": 29.991431019708653
      },
      {
        "noteIndices": [
          42,
          44,
          51
        ],
        "duration": 0.7977720651242501,
        "onset": 30.99014567266495
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.467866323907455,
        "onset": 31.491002570694086
      },
      {
        "noteIndices": [
          32,
          35,
          47
        ],
        "duration": 0.7977720651242501,
        "onset": 31.991859468723217
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.467866323907455,
        "onset": 32.48971722365038
      },
      {
        "noteIndices": [
          25,
          37,
          49
        ],
        "duration": 2.3963153384747216,
        "onset": 32.990574121679515
      }
    ],
    "key": "B♭ minor",
    "tonic": 10,
    "scale": "minor"
  },
  "G08(A major)": {
    "notes": [
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 1.1984343090537783,
        "onset": 0
      },
      {
        "noteIndices": [
          36,
          41
        ],
        "duration": 0.7957794417971411,
        "onset": 1.0006807351940097
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.19775357385976858,
        "onset": 1.498638529611981
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.19775357385976858,
        "onset": 1.7488087134104835
      },
      {
        "noteIndices": [
          36,
          40,
          48
        ],
        "duration": 0.7957794417971411,
        "onset": 1.998978897208986
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.19775357385976858,
        "onset": 2.2491490810074883
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.19775357385976858,
        "onset": 2.4993192648059908
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19775357385976858,
        "onset": 2.749489448604493
      },
      {
        "noteIndices": [
          31,
          40,
          60
        ],
        "duration": 0.7957794417971411,
        "onset": 2.9996596324029956
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.39550714771953716,
        "onset": 3.500000000000001
      },
      {
        "noteIndices": [
          31,
          36,
          64
        ],
        "duration": 0.7957794417971411,
        "onset": 3.997957794417972
      },
      {
        "noteIndices": [
          24,
          67
        ],
        "duration": 0.7957794417971411,
        "onset": 4.9986385296119815
      },
      {
        "noteIndices": [
          29,
          65
        ],
        "duration": 1.1984343090537783,
        "onset": 5.996936691626958
      },
      {
        "noteIndices": [
          33,
          36
        ],
        "duration": 0.7957794417971411,
        "onset": 6.997617426820967
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.19775357385976858,
        "onset": 7.497957794417972
      },
      {
        "noteIndices": [
          64
        ],
        "duration": 0.19775357385976858,
        "onset": 7.748127978216474
      },
      {
        "noteIndices": [
          33,
          41,
          62
        ],
        "duration": 0.7957794417971411,
        "onset": 7.998298162014978
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 8.24846834581348
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.19775357385976858,
        "onset": 8.496255956432949
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 8.746426140231451
      },
      {
        "noteIndices": [
          31,
          36,
          64
        ],
        "duration": 0.7957794417971411,
        "onset": 8.996596324029953
      },
      {
        "noteIndices": [
          31,
          35,
          62
        ],
        "duration": 0.7957794417971411,
        "onset": 9.997277059223963
      },
      {
        "noteIndices": [
          31,
          41,
          55
        ],
        "duration": 0.7957794417971411,
        "onset": 10.99557522123894
      },
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 1.1984343090537783,
        "onset": 11.99625595643295
      },
      {
        "noteIndices": [
          36,
          41
        ],
        "duration": 0.7957794417971411,
        "onset": 12.99693669162696
      },
      {
        "noteIndices": [
          45
        ],
        "duration": 0.19775357385976858,
        "onset": 13.49489448604493
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.19775357385976858,
        "onset": 13.745064669843433
      },
      {
        "noteIndices": [
          36,
          40,
          48
        ],
        "duration": 0.7957794417971411,
        "onset": 13.995234853641934
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.19775357385976858,
        "onset": 14.245405037440438
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.19775357385976858,
        "onset": 14.495575221238939
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19775357385976858,
        "onset": 14.745745405037443
      },
      {
        "noteIndices": [
          31,
          40,
          60
        ],
        "duration": 0.7957794417971411,
        "onset": 14.995915588835944
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.39550714771953716,
        "onset": 15.493873383253916
      },
      {
        "noteIndices": [
          31,
          36,
          64
        ],
        "duration": 0.7957794417971411,
        "onset": 15.994213750850921
      },
      {
        "noteIndices": [
          24,
          67
        ],
        "duration": 0.7957794417971411,
        "onset": 16.99489448604493
      },
      {
        "noteIndices": [
          29,
          65
        ],
        "duration": 1.1984343090537783,
        "onset": 17.993192648059907
      },
      {
        "noteIndices": [
          33,
          36
        ],
        "duration": 0.7957794417971411,
        "onset": 18.993873383253916
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19775357385976858,
        "onset": 19.49421375085092
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 19.744383934649427
      },
      {
        "noteIndices": [
          31,
          41,
          59
        ],
        "duration": 0.7957794417971411,
        "onset": 19.994554118447926
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 20.242341729067398
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19775357385976858,
        "onset": 20.4925119128659
      },
      {
        "noteIndices": [
          64
        ],
        "duration": 0.19775357385976858,
        "onset": 20.7426820966644
      },
      {
        "noteIndices": [
          24,
          60
        ],
        "duration": 2.394486044928523,
        "onset": 20.992852280462902
      },
      {
        "noteIndices": [
          31,
          40
        ],
        "duration": 1.8750850918992517,
        "onset": 21.99353301565691
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "G08 (modified)": {
    "notes": [
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 1.1984343090537783,
        "onset": 0
      },
      {
        "noteIndices": [
          36,
          41
        ],
        "duration": 0.7957794417971411,
        "onset": 1.0006807351940097
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.19775357385976858,
        "onset": 1.498638529611981
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19775357385976858,
        "onset": 1.7488087134104835
      },
      {
        "noteIndices": [
          36,
          39,
          48
        ],
        "duration": 0.7957794417971411,
        "onset": 1.998978897208986
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.19775357385976858,
        "onset": 2.2491490810074883
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.19775357385976858,
        "onset": 2.4993192648059908
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19775357385976858,
        "onset": 2.749489448604493
      },
      {
        "noteIndices": [
          31,
          39,
          60
        ],
        "duration": 0.7957794417971411,
        "onset": 2.9996596324029956
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.39550714771953716,
        "onset": 3.500000000000001
      },
      {
        "noteIndices": [
          31,
          36,
          63
        ],
        "duration": 0.7957794417971411,
        "onset": 3.997957794417972
      },
      {
        "noteIndices": [
          24,
          67
        ],
        "duration": 0.7957794417971411,
        "onset": 4.9986385296119815
      },
      {
        "noteIndices": [
          29,
          65
        ],
        "duration": 1.1984343090537783,
        "onset": 5.996936691626958
      },
      {
        "noteIndices": [
          32,
          36
        ],
        "duration": 0.7957794417971411,
        "onset": 6.997617426820967
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.19775357385976858,
        "onset": 7.497957794417972
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19775357385976858,
        "onset": 7.748127978216474
      },
      {
        "noteIndices": [
          32,
          41,
          62
        ],
        "duration": 0.7957794417971411,
        "onset": 7.998298162014978
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 8.24846834581348
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.19775357385976858,
        "onset": 8.496255956432949
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 8.746426140231451
      },
      {
        "noteIndices": [
          31,
          36,
          63
        ],
        "duration": 0.7957794417971411,
        "onset": 8.996596324029953
      },
      {
        "noteIndices": [
          31,
          34,
          62
        ],
        "duration": 0.7957794417971411,
        "onset": 9.997277059223963
      },
      {
        "noteIndices": [
          31,
          41,
          55
        ],
        "duration": 0.7957794417971411,
        "onset": 10.99557522123894
      },
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 1.1984343090537783,
        "onset": 11.99625595643295
      },
      {
        "noteIndices": [
          36,
          41
        ],
        "duration": 0.7957794417971411,
        "onset": 12.99693669162696
      },
      {
        "noteIndices": [
          44
        ],
        "duration": 0.19775357385976858,
        "onset": 13.49489448604493
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19775357385976858,
        "onset": 13.745064669843433
      },
      {
        "noteIndices": [
          36,
          39,
          48
        ],
        "duration": 0.7957794417971411,
        "onset": 13.995234853641934
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.19775357385976858,
        "onset": 14.245405037440438
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.19775357385976858,
        "onset": 14.495575221238939
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19775357385976858,
        "onset": 14.745745405037443
      },
      {
        "noteIndices": [
          31,
          39,
          60
        ],
        "duration": 0.7957794417971411,
        "onset": 14.995915588835944
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.39550714771953716,
        "onset": 15.493873383253916
      },
      {
        "noteIndices": [
          31,
          36,
          63
        ],
        "duration": 0.7957794417971411,
        "onset": 15.994213750850921
      },
      {
        "noteIndices": [
          24,
          67
        ],
        "duration": 0.7957794417971411,
        "onset": 16.99489448604493
      },
      {
        "noteIndices": [
          29,
          65
        ],
        "duration": 1.1984343090537783,
        "onset": 17.993192648059907
      },
      {
        "noteIndices": [
          32,
          36
        ],
        "duration": 0.7957794417971411,
        "onset": 18.993873383253916
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19775357385976858,
        "onset": 19.49421375085092
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 19.744383934649427
      },
      {
        "noteIndices": [
          31,
          41,
          58
        ],
        "duration": 0.7957794417971411,
        "onset": 19.994554118447926
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19775357385976858,
        "onset": 20.242341729067398
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19775357385976858,
        "onset": 20.4925119128659
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19775357385976858,
        "onset": 20.7426820966644
      },
      {
        "noteIndices": [
          24,
          60
        ],
        "duration": 2.394486044928523,
        "onset": 20.992852280462902
      },
      {
        "noteIndices": [
          31,
          39
        ],
        "duration": 1.8750850918992517,
        "onset": 21.99353301565691
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "G09(G major)": {
    "notes": [
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 0
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 0.5008944543828264
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39594514013118665,
        "onset": 1.0017889087656529
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 1.5002981514609421
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 2.0011926058437686
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19797257006559332,
        "onset": 3.0029815146094214
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.19797257006559332,
        "onset": 3.253428741800835
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.19797257006559332,
        "onset": 3.503875968992248
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 3.751937984496124
      },
      {
        "noteIndices": [
          34,
          58,
          62
        ],
        "duration": 2.397137745974955,
        "onset": 4.002385211687537
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 4.503279666070363
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39594514013118665,
        "onset": 5.0041741204531895
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 5.505068574836016
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 6.003577817531306
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19797257006559332,
        "onset": 7.005366726296958
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 7.255813953488372
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 7.506261180679784
      },
      {
        "noteIndices": [
          36,
          58,
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 8.007155635062611
      },
      {
        "noteIndices": [
          36,
          60,
          63
        ],
        "duration": 2.101371496720334,
        "onset": 8.5056648777579
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 9.006559332140727
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 9.507453786523554
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 10.008348240906379
      },
      {
        "noteIndices": [
          60,
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 11.007751937984496
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.19797257006559332,
        "onset": 11.258199165175908
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 11.508646392367323
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19797257006559332,
        "onset": 11.759093619558735
      },
      {
        "noteIndices": [
          33,
          57,
          60
        ],
        "duration": 2.397137745974955,
        "onset": 12.009540846750149
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39594514013118665,
        "onset": 12.510435301132976
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 13.011329755515801
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 13.509838998211091
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 14.010733452593916
      },
      {
        "noteIndices": [
          57,
          62
        ],
        "duration": 0.19797257006559332,
        "onset": 15.012522361359569
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 15.262969588550984
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19797257006559332,
        "onset": 15.51103160405486
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 15.761478831246272
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 2.397137745974955,
        "onset": 16.011926058437687
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 16.51282051282051
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39594514013118665,
        "onset": 17.013714967203338
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39594514013118665,
        "onset": 17.514609421586165
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 18.013118664281453
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.19797257006559332,
        "onset": 19.014907573047108
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.19797257006559332,
        "onset": 19.26535480023852
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.19797257006559332,
        "onset": 19.515802027429935
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 19.76624925462135
      },
      {
        "noteIndices": [
          34,
          58,
          62
        ],
        "duration": 2.397137745974955,
        "onset": 20.016696481812758
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 20.51520572450805
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39594514013118665,
        "onset": 21.016100178890877
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 21.516994633273704
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 22.017889087656528
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.19797257006559332,
        "onset": 23.017292784734646
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 23.26774001192606
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 23.51818723911747
      },
      {
        "noteIndices": [
          36,
          58,
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 24.019081693500297
      },
      {
        "noteIndices": [
          36,
          60,
          63
        ],
        "duration": 2.101371496720334,
        "onset": 24.519976147883124
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 25.02087060226595
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 25.51937984496124
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.9373881932021467,
        "onset": 26.020274299344067
      }
    ],
    "key": "G major",
    "tonic": 7,
    "scale": "major"
  },
  "G09 (modified)": {
    "notes": [
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 0
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 0.5008944543828264
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39594514013118665,
        "onset": 1.0017889087656529
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 1.5002981514609421
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 2.0011926058437686
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.19797257006559332,
        "onset": 3.0029815146094214
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.19797257006559332,
        "onset": 3.253428741800835
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.19797257006559332,
        "onset": 3.503875968992248
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 3.751937984496124
      },
      {
        "noteIndices": [
          34,
          58,
          61
        ],
        "duration": 2.397137745974955,
        "onset": 4.002385211687537
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 4.503279666070363
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39594514013118665,
        "onset": 5.0041741204531895
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 5.505068574836016
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 6.003577817531306
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.19797257006559332,
        "onset": 7.005366726296958
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 7.255813953488372
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 7.506261180679784
      },
      {
        "noteIndices": [
          36,
          58,
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 8.007155635062611
      },
      {
        "noteIndices": [
          36,
          60,
          63
        ],
        "duration": 2.101371496720334,
        "onset": 8.5056648777579
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 9.006559332140727
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 9.507453786523554
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 10.008348240906379
      },
      {
        "noteIndices": [
          60,
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 11.007751937984496
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.19797257006559332,
        "onset": 11.258199165175908
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 11.508646392367323
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.19797257006559332,
        "onset": 11.759093619558735
      },
      {
        "noteIndices": [
          32,
          56,
          60
        ],
        "duration": 2.397137745974955,
        "onset": 12.009540846750149
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39594514013118665,
        "onset": 12.510435301132976
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 13.011329755515801
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 13.509838998211091
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 14.010733452593916
      },
      {
        "noteIndices": [
          56,
          61
        ],
        "duration": 0.19797257006559332,
        "onset": 15.012522361359569
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 15.262969588550984
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.19797257006559332,
        "onset": 15.51103160405486
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 15.761478831246272
      },
      {
        "noteIndices": [
          34,
          58
        ],
        "duration": 2.397137745974955,
        "onset": 16.011926058437687
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 16.51282051282051
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39594514013118665,
        "onset": 17.013714967203338
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39594514013118665,
        "onset": 17.514609421586165
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 18.013118664281453
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.19797257006559332,
        "onset": 19.014907573047108
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.19797257006559332,
        "onset": 19.26535480023852
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.19797257006559332,
        "onset": 19.515802027429935
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.19797257006559332,
        "onset": 19.76624925462135
      },
      {
        "noteIndices": [
          34,
          58,
          61
        ],
        "duration": 2.397137745974955,
        "onset": 20.016696481812758
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39594514013118665,
        "onset": 20.51520572450805
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39594514013118665,
        "onset": 21.016100178890877
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 21.516994633273704
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 1.6004770423375074,
        "onset": 22.017889087656528
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.19797257006559332,
        "onset": 23.017292784734646
      },
      {
        "noteIndices": [
          63
        ],
        "duration": 0.19797257006559332,
        "onset": 23.26774001192606
      },
      {
        "noteIndices": [
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 23.51818723911747
      },
      {
        "noteIndices": [
          36,
          58,
          65
        ],
        "duration": 0.39594514013118665,
        "onset": 24.019081693500297
      },
      {
        "noteIndices": [
          36,
          60,
          63
        ],
        "duration": 2.101371496720334,
        "onset": 24.519976147883124
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39594514013118665,
        "onset": 25.02087060226595
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39594514013118665,
        "onset": 25.51937984496124
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.9373881932021467,
        "onset": 26.020274299344067
      }
    ],
    "key": "G minor",
    "tonic": 7,
    "scale": "minor"
  },
  "G10(A major)": {
    "notes": [
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39466666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          40,
          43,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 0.5013333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 1
      },
      {
        "noteIndices": [
          40,
          43,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 1.5013333333333332
      },
      {
        "noteIndices": [
          40,
          43,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 2
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 2.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          57
        ],
        "duration": 0.39466666666666667,
        "onset": 3
      },
      {
        "noteIndices": [
          41,
          45,
          59
        ],
        "duration": 0.39466666666666667,
        "onset": 3.501333333333333
      },
      {
        "noteIndices": [
          36,
          60
        ],
        "duration": 0.7973333333333333,
        "onset": 4
      },
      {
        "noteIndices": [
          40,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 4.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 0.6,
        "onset": 5
      },
      {
        "noteIndices": [
          40,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 5.501333333333334
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.19733333333333333,
        "onset": 5.749333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 0.7973333333333333,
        "onset": 6
      },
      {
        "noteIndices": [
          40,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 6.501333333333334
      },
      {
        "noteIndices": [
          31,
          47
        ],
        "duration": 0.7973333333333333,
        "onset": 7
      },
      {
        "noteIndices": [
          41,
          45
        ],
        "duration": 0.39466666666666667,
        "onset": 7.501333333333334
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39466666666666667,
        "onset": 8
      },
      {
        "noteIndices": [
          40,
          43,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 8.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 9
      },
      {
        "noteIndices": [
          40,
          43,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 9.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 10
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 10.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          57
        ],
        "duration": 0.39466666666666667,
        "onset": 11
      },
      {
        "noteIndices": [
          41,
          45,
          59
        ],
        "duration": 0.39466666666666667,
        "onset": 11.501333333333333
      },
      {
        "noteIndices": [
          36,
          60
        ],
        "duration": 0.7973333333333333,
        "onset": 12
      },
      {
        "noteIndices": [
          40,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 12.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 0.7973333333333333,
        "onset": 13
      },
      {
        "noteIndices": [
          40,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 13.501333333333333
      },
      {
        "noteIndices": [
          40,
          43,
          55
        ],
        "duration": 1.5999999999999999,
        "onset": 14
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.39466666666666667,
        "onset": 14.501333333333333
      },
      {
        "noteIndices": [
          36,
          40
        ],
        "duration": 0.39466666666666667,
        "onset": 15
      },
      {
        "noteIndices": [
          35,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 15.501333333333333
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39466666666666667,
        "onset": 16
      },
      {
        "noteIndices": [
          35,
          38,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 16.50133333333333
      },
      {
        "noteIndices": [
          35,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 17
      },
      {
        "noteIndices": [
          35,
          38,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 17.50133333333333
      },
      {
        "noteIndices": [
          35,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 18
      },
      {
        "noteIndices": [
          35,
          38,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 18.50133333333333
      },
      {
        "noteIndices": [
          35,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 19
      },
      {
        "noteIndices": [
          36,
          40,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 19.50133333333333
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 20
      },
      {
        "noteIndices": [
          35,
          38,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 20.50133333333333
      },
      {
        "noteIndices": [
          35,
          38,
          47
        ],
        "duration": 0.39466666666666667,
        "onset": 21
      },
      {
        "noteIndices": [
          35,
          38,
          45
        ],
        "duration": 0.39466666666666667,
        "onset": 21.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          43
        ],
        "duration": 1.5999999999999999,
        "onset": 22
      },
      {
        "noteIndices": [
          35,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 22.501333333333335
      },
      {
        "noteIndices": [
          35,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 23
      },
      {
        "noteIndices": [
          36,
          40
        ],
        "duration": 0.39466666666666667,
        "onset": 23.501333333333335
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39466666666666667,
        "onset": 24
      },
      {
        "noteIndices": [
          35,
          38,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 24.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 25
      },
      {
        "noteIndices": [
          35,
          38,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 25.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 26
      },
      {
        "noteIndices": [
          35,
          38,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 26.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 27
      },
      {
        "noteIndices": [
          36,
          40,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 27.501333333333335
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 28
      },
      {
        "noteIndices": [
          35,
          38,
          45
        ],
        "duration": 0.39466666666666667,
        "onset": 28.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          47
        ],
        "duration": 0.39466666666666667,
        "onset": 29
      },
      {
        "noteIndices": [
          35,
          38,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 29.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 30
      },
      {
        "noteIndices": [
          35,
          38,
          52
        ],
        "duration": 0.39466666666666667,
        "onset": 30.501333333333335
      },
      {
        "noteIndices": [
          35,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 31
      },
      {
        "noteIndices": [
          36,
          40,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 31.501333333333335
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "G10 (modified)": {
    "notes": [
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39466666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          39,
          43,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 0.5013333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 1
      },
      {
        "noteIndices": [
          39,
          43,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 1.5013333333333332
      },
      {
        "noteIndices": [
          39,
          43,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 2
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 2.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          56
        ],
        "duration": 0.39466666666666667,
        "onset": 3
      },
      {
        "noteIndices": [
          41,
          44,
          58
        ],
        "duration": 0.39466666666666667,
        "onset": 3.501333333333333
      },
      {
        "noteIndices": [
          36,
          60
        ],
        "duration": 0.7973333333333333,
        "onset": 4
      },
      {
        "noteIndices": [
          39,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 4.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.6,
        "onset": 5
      },
      {
        "noteIndices": [
          39,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 5.501333333333334
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.19733333333333333,
        "onset": 5.749333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.7973333333333333,
        "onset": 6
      },
      {
        "noteIndices": [
          39,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 6.501333333333334
      },
      {
        "noteIndices": [
          31,
          46
        ],
        "duration": 0.7973333333333333,
        "onset": 7
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.39466666666666667,
        "onset": 7.501333333333334
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39466666666666667,
        "onset": 8
      },
      {
        "noteIndices": [
          39,
          43,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 8.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 9
      },
      {
        "noteIndices": [
          39,
          43,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 9.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 10
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 10.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          56
        ],
        "duration": 0.39466666666666667,
        "onset": 11
      },
      {
        "noteIndices": [
          41,
          44,
          58
        ],
        "duration": 0.39466666666666667,
        "onset": 11.501333333333333
      },
      {
        "noteIndices": [
          36,
          60
        ],
        "duration": 0.7973333333333333,
        "onset": 12
      },
      {
        "noteIndices": [
          39,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 12.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 0.7973333333333333,
        "onset": 13
      },
      {
        "noteIndices": [
          39,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 13.501333333333333
      },
      {
        "noteIndices": [
          39,
          43,
          55
        ],
        "duration": 1.5999999999999999,
        "onset": 14
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.39466666666666667,
        "onset": 14.501333333333333
      },
      {
        "noteIndices": [
          36,
          39
        ],
        "duration": 0.39466666666666667,
        "onset": 15
      },
      {
        "noteIndices": [
          34,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 15.501333333333333
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39466666666666667,
        "onset": 16
      },
      {
        "noteIndices": [
          34,
          38,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 16.50133333333333
      },
      {
        "noteIndices": [
          34,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 17
      },
      {
        "noteIndices": [
          34,
          38,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 17.50133333333333
      },
      {
        "noteIndices": [
          34,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 18
      },
      {
        "noteIndices": [
          34,
          38,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 18.50133333333333
      },
      {
        "noteIndices": [
          34,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 19
      },
      {
        "noteIndices": [
          36,
          39,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 19.50133333333333
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 20
      },
      {
        "noteIndices": [
          34,
          38,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 20.50133333333333
      },
      {
        "noteIndices": [
          34,
          38,
          46
        ],
        "duration": 0.39466666666666667,
        "onset": 21
      },
      {
        "noteIndices": [
          34,
          38,
          44
        ],
        "duration": 0.39466666666666667,
        "onset": 21.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          43
        ],
        "duration": 1.5999999999999999,
        "onset": 22
      },
      {
        "noteIndices": [
          34,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 22.501333333333335
      },
      {
        "noteIndices": [
          34,
          38
        ],
        "duration": 0.39466666666666667,
        "onset": 23
      },
      {
        "noteIndices": [
          36,
          39
        ],
        "duration": 0.39466666666666667,
        "onset": 23.501333333333335
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.39466666666666667,
        "onset": 24
      },
      {
        "noteIndices": [
          34,
          38,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 24.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 25
      },
      {
        "noteIndices": [
          34,
          38,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 25.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 26
      },
      {
        "noteIndices": [
          34,
          38,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 26.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 27
      },
      {
        "noteIndices": [
          36,
          39,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 27.501333333333335
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.39466666666666667,
        "onset": 28
      },
      {
        "noteIndices": [
          34,
          38,
          44
        ],
        "duration": 0.39466666666666667,
        "onset": 28.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          46
        ],
        "duration": 0.39466666666666667,
        "onset": 29
      },
      {
        "noteIndices": [
          34,
          38,
          48
        ],
        "duration": 0.39466666666666667,
        "onset": 29.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          50
        ],
        "duration": 0.39466666666666667,
        "onset": 30
      },
      {
        "noteIndices": [
          34,
          38,
          51
        ],
        "duration": 0.39466666666666667,
        "onset": 30.501333333333335
      },
      {
        "noteIndices": [
          34,
          38,
          53
        ],
        "duration": 0.39466666666666667,
        "onset": 31
      },
      {
        "noteIndices": [
          36,
          39,
          55
        ],
        "duration": 0.39466666666666667,
        "onset": 31.501333333333335
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "G11(B major)": {
    "notes": [
      {
        "noteIndices": [
          26,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 0
      },
      {
        "noteIndices": [
          33,
          38,
          42,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 1.0009999999999997
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.26599999999999996,
        "onset": 1.332333333333333
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.26599999999999996,
        "onset": 1.6659999999999995
      },
      {
        "noteIndices": [
          38,
          42,
          45,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 1.9996666666666663
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26599999999999996,
        "onset": 2.6669999999999994
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.7979999999999999,
        "onset": 3.000666666666666
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 3.334333333333333
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 3.6656666666666657
      },
      {
        "noteIndices": [
          37,
          40,
          43,
          52
        ],
        "duration": 0.7979999999999999,
        "onset": 3.9993333333333325
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26599999999999996,
        "onset": 4.332999999999999
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26599999999999996,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          40,
          43,
          45,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 5.000333333333332
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26599999999999996,
        "onset": 5.333999999999999
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.26599999999999996,
        "onset": 5.6676666666666655
      },
      {
        "noteIndices": [
          26,
          62
        ],
        "duration": 0.7979999999999999,
        "onset": 5.998999999999999
      },
      {
        "noteIndices": [
          33,
          38,
          42,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 6.999999999999998
      },
      {
        "noteIndices": [
          38,
          42,
          45,
          62
        ],
        "duration": 0.7979999999999999,
        "onset": 8.000999999999998
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.26599999999999996,
        "onset": 8.332333333333333
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26599999999999996,
        "onset": 8.665999999999999
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 8.999666666666664
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26599999999999996,
        "onset": 9.333333333333332
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26599999999999996,
        "onset": 9.666999999999998
      },
      {
        "noteIndices": [
          35,
          38,
          43,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 10.000666666666664
      },
      {
        "noteIndices": [
          38,
          43,
          47,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 10.999333333333333
      },
      {
        "noteIndices": [
          31,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 12.00033333333333
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26599999999999996,
        "onset": 12.333999999999996
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 12.667666666666666
      },
      {
        "noteIndices": [
          35,
          38,
          43,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 12.998999999999997
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.26599999999999996,
        "onset": 13.332666666666665
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 13.66633333333333
      },
      {
        "noteIndices": [
          38,
          43,
          47,
          54
        ],
        "duration": 0.7979999999999999,
        "onset": 13.999999999999996
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 14.333666666666664
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 14.66733333333333
      },
      {
        "noteIndices": [
          33,
          54
        ],
        "duration": 0.7979999999999999,
        "onset": 15.000999999999998
      },
      {
        "noteIndices": [
          37,
          40,
          52
        ],
        "duration": 0.7979999999999999,
        "onset": 15.999666666666664
      },
      {
        "noteIndices": [
          38,
          42,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 17.000666666666664
      },
      {
        "noteIndices": [
          37,
          40,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 17.99933333333333
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.26599999999999996,
        "onset": 18.333
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.26599999999999996,
        "onset": 18.666666666666664
      },
      {
        "noteIndices": [
          33,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 19.00033333333333
      },
      {
        "noteIndices": [
          47
        ],
        "duration": 0.26599999999999996,
        "onset": 19.333999999999996
      },
      {
        "noteIndices": [
          49
        ],
        "duration": 0.26599999999999996,
        "onset": 19.667666666666662
      },
      {
        "noteIndices": [
          37,
          40,
          43,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 19.998999999999995
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 20.332666666666665
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26599999999999996,
        "onset": 20.666333333333327
      },
      {
        "noteIndices": [
          26,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 20.999999999999996
      },
      {
        "noteIndices": [
          33,
          38,
          54
        ],
        "duration": 1.5983333333333332,
        "onset": 22.000999999999998
      },
      {
        "noteIndices": [
          38,
          42
        ],
        "duration": 0.7979999999999999,
        "onset": 22.99966666666666
      }
    ],
    "key": "B major",
    "tonic": 11,
    "scale": "major"
  },
  "G11 (modified)": {
    "notes": [
      {
        "noteIndices": [
          26,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 0
      },
      {
        "noteIndices": [
          33,
          38,
          41,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 1.0009999999999997
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26599999999999996,
        "onset": 1.332333333333333
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.26599999999999996,
        "onset": 1.6659999999999995
      },
      {
        "noteIndices": [
          38,
          41,
          45,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 1.9996666666666663
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 2.333333333333333
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26599999999999996,
        "onset": 2.6669999999999994
      },
      {
        "noteIndices": [
          33,
          53
        ],
        "duration": 0.7979999999999999,
        "onset": 3.000666666666666
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 3.334333333333333
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 3.6656666666666657
      },
      {
        "noteIndices": [
          36,
          40,
          43,
          52
        ],
        "duration": 0.7979999999999999,
        "onset": 3.9993333333333325
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26599999999999996,
        "onset": 4.332999999999999
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26599999999999996,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          40,
          43,
          45,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 5.000333333333332
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26599999999999996,
        "onset": 5.333999999999999
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26599999999999996,
        "onset": 5.6676666666666655
      },
      {
        "noteIndices": [
          26,
          62
        ],
        "duration": 0.7979999999999999,
        "onset": 5.998999999999999
      },
      {
        "noteIndices": [
          33,
          38,
          41,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 6.999999999999998
      },
      {
        "noteIndices": [
          38,
          41,
          45,
          62
        ],
        "duration": 0.7979999999999999,
        "onset": 8.000999999999998
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26599999999999996,
        "onset": 8.332333333333333
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26599999999999996,
        "onset": 8.665999999999999
      },
      {
        "noteIndices": [
          31,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 8.999666666666664
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26599999999999996,
        "onset": 9.333333333333332
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26599999999999996,
        "onset": 9.666999999999998
      },
      {
        "noteIndices": [
          34,
          38,
          43,
          57
        ],
        "duration": 0.7979999999999999,
        "onset": 10.000666666666664
      },
      {
        "noteIndices": [
          38,
          43,
          46,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 10.999333333333333
      },
      {
        "noteIndices": [
          31,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 12.00033333333333
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26599999999999996,
        "onset": 12.333999999999996
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 12.667666666666666
      },
      {
        "noteIndices": [
          34,
          38,
          43,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 12.998999999999997
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.26599999999999996,
        "onset": 13.332666666666665
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 13.66633333333333
      },
      {
        "noteIndices": [
          38,
          43,
          46,
          53
        ],
        "duration": 0.7979999999999999,
        "onset": 13.999999999999996
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 14.333666666666664
      },
      {
        "noteIndices": [
          50
        ],
        "duration": 0.26599999999999996,
        "onset": 14.66733333333333
      },
      {
        "noteIndices": [
          33,
          53
        ],
        "duration": 0.7979999999999999,
        "onset": 15.000999999999998
      },
      {
        "noteIndices": [
          36,
          40,
          52
        ],
        "duration": 0.7979999999999999,
        "onset": 15.999666666666664
      },
      {
        "noteIndices": [
          38,
          41,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 17.000666666666664
      },
      {
        "noteIndices": [
          36,
          40,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 17.99933333333333
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26599999999999996,
        "onset": 18.333
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.26599999999999996,
        "onset": 18.666666666666664
      },
      {
        "noteIndices": [
          33,
          45
        ],
        "duration": 0.7979999999999999,
        "onset": 19.00033333333333
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26599999999999996,
        "onset": 19.333999999999996
      },
      {
        "noteIndices": [
          48
        ],
        "duration": 0.26599999999999996,
        "onset": 19.667666666666662
      },
      {
        "noteIndices": [
          36,
          40,
          43,
          50
        ],
        "duration": 0.7979999999999999,
        "onset": 19.998999999999995
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.26599999999999996,
        "onset": 20.332666666666665
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26599999999999996,
        "onset": 20.666333333333327
      },
      {
        "noteIndices": [
          26,
          55
        ],
        "duration": 0.7979999999999999,
        "onset": 20.999999999999996
      },
      {
        "noteIndices": [
          33,
          38,
          53
        ],
        "duration": 1.5983333333333332,
        "onset": 22.000999999999998
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.7979999999999999,
        "onset": 22.99966666666666
      }
    ],
    "key": "B minor",
    "tonic": 11,
    "scale": "minor"
  },
  "G12(D major)": {
    "notes": [
      {
        "noteIndices": [
          29
        ],
        "duration": 0.19803746654772525,
        "onset": 0
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 0.2497769848349688
      },
      {
        "noteIndices": [
          36,
          57
        ],
        "duration": 0.8956289027653881,
        "onset": 0.4995539696699376
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 0.7511150758251561
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19803746654772525,
        "onset": 1.000892060660125
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 1.2506690454950935
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.46922390722569135,
        "onset": 1.5004460303300624
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 1.750223015165031
      },
      {
        "noteIndices": [
          29,
          55
        ],
        "duration": 1.5004460303300624,
        "onset": 2
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 2.2515611061552185
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 2.501338090990187
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 2.7511150758251564
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19803746654772525,
        "onset": 3.000892060660125
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 3.2506690454950937
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 3.5022301516503123
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 3.752007136485281
      },
      {
        "noteIndices": [
          29,
          57
        ],
        "duration": 0.3960749330954505,
        "onset": 4.00178412132025
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 4.2515611061552185
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.3960749330954505,
        "onset": 4.5013380909901874
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 4.752899197145406
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 5.002676181980374
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 5.252453166815344
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 5.502230151650313
      },
      {
        "noteIndices": [
          34,
          57
        ],
        "duration": 0.19803746654772525,
        "onset": 5.752007136485282
      },
      {
        "noteIndices": [
          31,
          62
        ],
        "duration": 0.9384478144513827,
        "onset": 6.00178412132025
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 6.253345227475468
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.19803746654772525,
        "onset": 6.503122212310437
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.19803746654772525,
        "onset": 6.752899197145406
      },
      {
        "noteIndices": [
          40,
          60
        ],
        "duration": 0.46922390722569135,
        "onset": 7.002676181980374
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 7.252453166815344
      },
      {
        "noteIndices": [
          31,
          58
        ],
        "duration": 0.3960749330954505,
        "onset": 7.504014272970562
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.19803746654772525,
        "onset": 7.753791257805531
      },
      {
        "noteIndices": [
          29,
          57
        ],
        "duration": 0.5994647636039251,
        "onset": 8.0035682426405
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 8.253345227475469
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 8.503122212310437
      },
      {
        "noteIndices": [
          41,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 8.754683318465656
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 9.004460303300624
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 9.254237288135593
      },
      {
        "noteIndices": [
          38,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 9.504014272970561
      },
      {
        "noteIndices": [
          34,
          57
        ],
        "duration": 0.19803746654772525,
        "onset": 9.75379125780553
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.3960749330954505,
        "onset": 10.0035682426405
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 10.255129348795718
      },
      {
        "noteIndices": [
          38,
          52
        ],
        "duration": 0.3960749330954505,
        "onset": 10.504906333630688
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 10.754683318465656
      },
      {
        "noteIndices": [
          43,
          53
        ],
        "duration": 0.7975022301516503,
        "onset": 11.004460303300625
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 11.254237288135593
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.19803746654772525,
        "onset": 11.505798394290812
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 11.755575379125782
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.3960749330954505,
        "onset": 12.00535236396075
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 12.255129348795718
      },
      {
        "noteIndices": [
          36,
          57
        ],
        "duration": 0.3960749330954505,
        "onset": 12.504906333630688
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 12.756467439785906
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.5994647636039251,
        "onset": 13.006244424620874
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.19803746654772525,
        "onset": 13.256021409455842
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 13.505798394290812
      },
      {
        "noteIndices": [
          24,
          53
        ],
        "duration": 0.19803746654772525,
        "onset": 13.75557537912578
      },
      {
        "noteIndices": [
          29,
          53
        ],
        "duration": 1.60035682426405,
        "onset": 14.005352363960748
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.19803746654772525,
        "onset": 14.256913470115967
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 14.506690454950936
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 14.756467439785906
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.7975022301516503,
        "onset": 15.006244424620874
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "G12 (modified)": {
    "notes": [
      {
        "noteIndices": [
          29
        ],
        "duration": 0.19803746654772525,
        "onset": 0
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 0.2497769848349688
      },
      {
        "noteIndices": [
          36,
          56
        ],
        "duration": 0.8956289027653881,
        "onset": 0.4995539696699376
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 0.7511150758251561
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19803746654772525,
        "onset": 1.000892060660125
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 1.2506690454950935
      },
      {
        "noteIndices": [
          37,
          55
        ],
        "duration": 0.46922390722569135,
        "onset": 1.5004460303300624
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 1.750223015165031
      },
      {
        "noteIndices": [
          29,
          55
        ],
        "duration": 1.5004460303300624,
        "onset": 2
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 2.2515611061552185
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 2.501338090990187
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 2.7511150758251564
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.19803746654772525,
        "onset": 3.000892060660125
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 3.2506690454950937
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 3.5022301516503123
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 3.752007136485281
      },
      {
        "noteIndices": [
          29,
          56
        ],
        "duration": 0.3960749330954505,
        "onset": 4.00178412132025
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 4.2515611061552185
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.3960749330954505,
        "onset": 4.5013380909901874
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 4.752899197145406
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 5.002676181980374
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 5.252453166815344
      },
      {
        "noteIndices": [
          37,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 5.502230151650313
      },
      {
        "noteIndices": [
          34,
          56
        ],
        "duration": 0.19803746654772525,
        "onset": 5.752007136485282
      },
      {
        "noteIndices": [
          31,
          61
        ],
        "duration": 0.9384478144513827,
        "onset": 6.00178412132025
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 6.253345227475468
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.19803746654772525,
        "onset": 6.503122212310437
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.19803746654772525,
        "onset": 6.752899197145406
      },
      {
        "noteIndices": [
          39,
          60
        ],
        "duration": 0.46922390722569135,
        "onset": 7.002676181980374
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 7.252453166815344
      },
      {
        "noteIndices": [
          31,
          58
        ],
        "duration": 0.3960749330954505,
        "onset": 7.504014272970562
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.19803746654772525,
        "onset": 7.753791257805531
      },
      {
        "noteIndices": [
          29,
          56
        ],
        "duration": 0.5994647636039251,
        "onset": 8.0035682426405
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 8.253345227475469
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 8.503122212310437
      },
      {
        "noteIndices": [
          41,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 8.754683318465656
      },
      {
        "noteIndices": [
          46,
          53
        ],
        "duration": 0.3960749330954505,
        "onset": 9.004460303300624
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 9.254237288135593
      },
      {
        "noteIndices": [
          37,
          55
        ],
        "duration": 0.19803746654772525,
        "onset": 9.504014272970561
      },
      {
        "noteIndices": [
          34,
          56
        ],
        "duration": 0.19803746654772525,
        "onset": 9.75379125780553
      },
      {
        "noteIndices": [
          31,
          49
        ],
        "duration": 0.3960749330954505,
        "onset": 10.0035682426405
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 10.255129348795718
      },
      {
        "noteIndices": [
          37,
          51
        ],
        "duration": 0.3960749330954505,
        "onset": 10.504906333630688
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 10.754683318465656
      },
      {
        "noteIndices": [
          43,
          53
        ],
        "duration": 0.7975022301516503,
        "onset": 11.004460303300625
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 11.254237288135593
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.19803746654772525,
        "onset": 11.505798394290812
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.19803746654772525,
        "onset": 11.755575379125782
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.3960749330954505,
        "onset": 12.00535236396075
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 12.255129348795718
      },
      {
        "noteIndices": [
          36,
          56
        ],
        "duration": 0.3960749330954505,
        "onset": 12.504906333630688
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 12.756467439785906
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.5994647636039251,
        "onset": 13.006244424620874
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.19803746654772525,
        "onset": 13.256021409455842
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 13.505798394290812
      },
      {
        "noteIndices": [
          24,
          53
        ],
        "duration": 0.19803746654772525,
        "onset": 13.75557537912578
      },
      {
        "noteIndices": [
          29,
          53
        ],
        "duration": 1.60035682426405,
        "onset": 14.005352363960748
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.19803746654772525,
        "onset": 14.256913470115967
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.19803746654772525,
        "onset": 14.506690454950936
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.19803746654772525,
        "onset": 14.756467439785906
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.7975022301516503,
        "onset": 15.006244424620874
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "G13(C major)": {
    "notes": [
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.396,
        "onset": 0
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 0.25
      },
      {
        "noteIndices": [
          38,
          46
        ],
        "duration": 0.396,
        "onset": 0.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 0.75
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.198,
        "onset": 1
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.198,
        "onset": 1.25
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 1.75
      },
      {
        "noteIndices": [
          36,
          44
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 2.25
      },
      {
        "noteIndices": [
          32,
          43
        ],
        "duration": 0.198,
        "onset": 2.5
      },
      {
        "noteIndices": [
          39,
          41
        ],
        "duration": 0.198,
        "onset": 2.75
      },
      {
        "noteIndices": [
          34,
          43
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 3.25
      },
      {
        "noteIndices": [
          31,
          46
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 3.75
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 4
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 4.25
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.396,
        "onset": 4.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 4.75
      },
      {
        "noteIndices": [
          39,
          48
        ],
        "duration": 0.396,
        "onset": 5
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.198,
        "onset": 5.25
      },
      {
        "noteIndices": [
          36,
          50
        ],
        "duration": 0.198,
        "onset": 5.5
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.198,
        "onset": 5.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 6
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 6.25
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.396,
        "onset": 6.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 6.75
      },
      {
        "noteIndices": [
          31,
          46
        ],
        "duration": 0.796,
        "onset": 7
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 7.25
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.198,
        "onset": 7.5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 7.75
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 8
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 8.25
      },
      {
        "noteIndices": [
          36,
          48
        ],
        "duration": 0.396,
        "onset": 8.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 8.75
      },
      {
        "noteIndices": [
          31,
          50
        ],
        "duration": 0.396,
        "onset": 9
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 9.25
      },
      {
        "noteIndices": [
          31,
          51
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 9.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 10
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.198,
        "onset": 10.25
      },
      {
        "noteIndices": [
          29,
          55
        ],
        "duration": 0.198,
        "onset": 10.5
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.198,
        "onset": 10.75
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.396,
        "onset": 11
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 11.25
      },
      {
        "noteIndices": [
          31,
          51
        ],
        "duration": 0.396,
        "onset": 11.5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 11.75
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 12
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 12.25
      },
      {
        "noteIndices": [
          44,
          48
        ],
        "duration": 0.396,
        "onset": 12.5
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.198,
        "onset": 12.75
      },
      {
        "noteIndices": [
          41,
          60
        ],
        "duration": 0.396,
        "onset": 13
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 13.25
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.198,
        "onset": 13.5
      },
      {
        "noteIndices": [
          36,
          56
        ],
        "duration": 0.198,
        "onset": 13.75
      },
      {
        "noteIndices": [
          38,
          58
        ],
        "duration": 0.796,
        "onset": 14
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.198,
        "onset": 14.25
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 14.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 14.75
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.198,
        "onset": 15
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 15.25
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 15.5
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.198,
        "onset": 15.75
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.396,
        "onset": 16
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 16.25
      },
      {
        "noteIndices": [
          38,
          46
        ],
        "duration": 0.396,
        "onset": 16.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 16.75
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.198,
        "onset": 17
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.198,
        "onset": 17.25
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.396,
        "onset": 17.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 17.75
      },
      {
        "noteIndices": [
          36,
          44
        ],
        "duration": 0.396,
        "onset": 18
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 18.25
      },
      {
        "noteIndices": [
          32,
          43
        ],
        "duration": 0.198,
        "onset": 18.5
      },
      {
        "noteIndices": [
          39,
          41
        ],
        "duration": 0.198,
        "onset": 18.75
      },
      {
        "noteIndices": [
          34,
          43
        ],
        "duration": 0.396,
        "onset": 19
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 19.25
      },
      {
        "noteIndices": [
          31,
          46
        ],
        "duration": 0.396,
        "onset": 19.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 19.75
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 20
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 20.25
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.396,
        "onset": 20.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 20.75
      },
      {
        "noteIndices": [
          39,
          48
        ],
        "duration": 0.396,
        "onset": 21
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.198,
        "onset": 21.25
      },
      {
        "noteIndices": [
          36,
          50
        ],
        "duration": 0.198,
        "onset": 21.5
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.198,
        "onset": 21.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 22
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.198,
        "onset": 22.25
      },
      {
        "noteIndices": [
          29,
          55
        ],
        "duration": 0.396,
        "onset": 22.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 22.75
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.796,
        "onset": 23
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.198,
        "onset": 23.25
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.198,
        "onset": 23.5
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 23.75
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "G13 (modified)": {
    "notes": [
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.396,
        "onset": 0
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 0.25
      },
      {
        "noteIndices": [
          37,
          46
        ],
        "duration": 0.396,
        "onset": 0.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 0.75
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.198,
        "onset": 1
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.198,
        "onset": 1.25
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 1.75
      },
      {
        "noteIndices": [
          35,
          44
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 2.25
      },
      {
        "noteIndices": [
          32,
          42
        ],
        "duration": 0.198,
        "onset": 2.5
      },
      {
        "noteIndices": [
          39,
          41
        ],
        "duration": 0.198,
        "onset": 2.75
      },
      {
        "noteIndices": [
          34,
          42
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 3.25
      },
      {
        "noteIndices": [
          30,
          46
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 3.75
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 4
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 4.25
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.396,
        "onset": 4.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 4.75
      },
      {
        "noteIndices": [
          39,
          47
        ],
        "duration": 0.396,
        "onset": 5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.198,
        "onset": 5.25
      },
      {
        "noteIndices": [
          35,
          49
        ],
        "duration": 0.198,
        "onset": 5.5
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.198,
        "onset": 5.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 6
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 6.25
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.396,
        "onset": 6.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 6.75
      },
      {
        "noteIndices": [
          30,
          46
        ],
        "duration": 0.796,
        "onset": 7
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 7.25
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.198,
        "onset": 7.5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 7.75
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 8
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 8.25
      },
      {
        "noteIndices": [
          35,
          47
        ],
        "duration": 0.396,
        "onset": 8.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 8.75
      },
      {
        "noteIndices": [
          30,
          49
        ],
        "duration": 0.396,
        "onset": 9
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 9.25
      },
      {
        "noteIndices": [
          30,
          51
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 9.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 10
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.198,
        "onset": 10.25
      },
      {
        "noteIndices": [
          29,
          54
        ],
        "duration": 0.198,
        "onset": 10.5
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.198,
        "onset": 10.75
      },
      {
        "noteIndices": [
          37,
          58
        ],
        "duration": 0.396,
        "onset": 11
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 11.25
      },
      {
        "noteIndices": [
          30,
          51
        ],
        "duration": 0.396,
        "onset": 11.5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 11.75
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 12
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 12.25
      },
      {
        "noteIndices": [
          44,
          47
        ],
        "duration": 0.396,
        "onset": 12.5
      },
      {
        "noteIndices": [
          42
        ],
        "duration": 0.198,
        "onset": 12.75
      },
      {
        "noteIndices": [
          41,
          59
        ],
        "duration": 0.396,
        "onset": 13
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 13.25
      },
      {
        "noteIndices": [
          37,
          58
        ],
        "duration": 0.198,
        "onset": 13.5
      },
      {
        "noteIndices": [
          35,
          56
        ],
        "duration": 0.198,
        "onset": 13.75
      },
      {
        "noteIndices": [
          37,
          58
        ],
        "duration": 0.796,
        "onset": 14
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.198,
        "onset": 14.25
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 14.5
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 14.75
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.198,
        "onset": 15
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 15.25
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.198,
        "onset": 15.5
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.198,
        "onset": 15.75
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 0.396,
        "onset": 16
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 16.25
      },
      {
        "noteIndices": [
          37,
          46
        ],
        "duration": 0.396,
        "onset": 16.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 16.75
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.198,
        "onset": 17
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.198,
        "onset": 17.25
      },
      {
        "noteIndices": [
          34,
          46
        ],
        "duration": 0.396,
        "onset": 17.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 17.75
      },
      {
        "noteIndices": [
          35,
          44
        ],
        "duration": 0.396,
        "onset": 18
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 18.25
      },
      {
        "noteIndices": [
          32,
          42
        ],
        "duration": 0.198,
        "onset": 18.5
      },
      {
        "noteIndices": [
          39,
          41
        ],
        "duration": 0.198,
        "onset": 18.75
      },
      {
        "noteIndices": [
          34,
          42
        ],
        "duration": 0.396,
        "onset": 19
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.198,
        "onset": 19.25
      },
      {
        "noteIndices": [
          30,
          46
        ],
        "duration": 0.396,
        "onset": 19.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.198,
        "onset": 19.75
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.198,
        "onset": 20
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 20.25
      },
      {
        "noteIndices": [
          39,
          46
        ],
        "duration": 0.396,
        "onset": 20.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 20.75
      },
      {
        "noteIndices": [
          39,
          47
        ],
        "duration": 0.396,
        "onset": 21
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.198,
        "onset": 21.25
      },
      {
        "noteIndices": [
          35,
          49
        ],
        "duration": 0.198,
        "onset": 21.5
      },
      {
        "noteIndices": [
          34,
          51
        ],
        "duration": 0.198,
        "onset": 21.75
      },
      {
        "noteIndices": [
          32,
          53
        ],
        "duration": 0.396,
        "onset": 22
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.198,
        "onset": 22.25
      },
      {
        "noteIndices": [
          29,
          54
        ],
        "duration": 0.396,
        "onset": 22.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.198,
        "onset": 22.75
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.796,
        "onset": 23
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.198,
        "onset": 23.25
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.198,
        "onset": 23.5
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.198,
        "onset": 23.75
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "G14(C major)": {
    "notes": [
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 0
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 0.33403312339631436
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 0.6662001399580124
      },
      {
        "noteIndices": [
          43,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 1.000233263354327
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 1.3324002799160248
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 1.6664334033123394
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 1.9986004198740372
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 2.3326335432703518
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 2.666666666666666
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 2.9988336832283644
      },
      {
        "noteIndices": [
          39,
          55
        ],
        "duration": 0.7968276183811521,
        "onset": 3.999066946582691
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 4.331233963144389
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 4.6652670865407035
      },
      {
        "noteIndices": [
          43,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 4.999300209937018
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 5.331467226498717
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 5.66550034989503
      },
      {
        "noteIndices": [
          44,
          60
        ],
        "duration": 0.7968276183811521,
        "onset": 5.997667366456729
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 6.331700489853042
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 6.663867506414741
      },
      {
        "noteIndices": [
          46,
          55
        ],
        "duration": 0.7968276183811521,
        "onset": 6.997900629811055
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 7.664100769769068
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 7.998133893165382
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 8.33030090972708
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 8.664334033123394
      },
      {
        "noteIndices": [
          43,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 8.996501049685092
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 9.330534173081407
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 9.664567296477722
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 9.99673431303942
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 10.330767436435734
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 10.662934452997433
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 10.996967576393747
      },
      {
        "noteIndices": [
          39,
          55
        ],
        "duration": 0.7968276183811521,
        "onset": 11.997200839748073
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 12.329367856309771
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 12.663400979706084
      },
      {
        "noteIndices": [
          43,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 12.995567996267784
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 13.329601119664098
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 13.661768136225795
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 13.99580125962211
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 14.329834383018426
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 14.662001399580124
      },
      {
        "noteIndices": [
          43,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 14.996034522976437
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.7968276183811521,
        "onset": 15.994401679496148
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 16.328434802892463
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26498717051551196,
        "onset": 16.662467926288777
      },
      {
        "noteIndices": [
          43,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 16.994634942850475
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 17.328668066246788
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 17.66083508280849
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 17.994868206204803
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 18.3270352227665
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 18.661068346162814
      },
      {
        "noteIndices": [
          39,
          55
        ],
        "duration": 0.7968276183811521,
        "onset": 18.995101469559128
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 19.327268486120825
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 19.66130160951714
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.7968276183811521,
        "onset": 19.99346862607884
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 20.327501749475154
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.26498717051551196,
        "onset": 20.65966876603685
      },
      {
        "noteIndices": [
          43,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 20.993701889433165
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 21.327735012829482
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 21.659902029391176
      },
      {
        "noteIndices": [
          38,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 21.993935152787493
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.26498717051551196,
        "onset": 22.32610216934919
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 22.660135292745508
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 22.992302309307203
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "G14 (modified)": {
    "notes": [
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 0
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 0.33403312339631436
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 0.6662001399580124
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 1.000233263354327
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 1.3324002799160248
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 1.6664334033123394
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 1.9986004198740372
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 2.3326335432703518
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 2.666666666666666
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 2.9988336832283644
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.7968276183811521,
        "onset": 3.999066946582691
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 4.331233963144389
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 4.6652670865407035
      },
      {
        "noteIndices": [
          42,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 4.999300209937018
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 5.331467226498717
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 5.66550034989503
      },
      {
        "noteIndices": [
          44,
          59
        ],
        "duration": 0.7968276183811521,
        "onset": 5.997667366456729
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 6.331700489853042
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 6.663867506414741
      },
      {
        "noteIndices": [
          46,
          54
        ],
        "duration": 0.7968276183811521,
        "onset": 6.997900629811055
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 7.664100769769068
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 7.998133893165382
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 8.33030090972708
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 8.664334033123394
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 8.996501049685092
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 9.330534173081407
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 9.664567296477722
      },
      {
        "noteIndices": [
          34,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 9.99673431303942
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 10.330767436435734
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 10.662934452997433
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 10.996967576393747
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.7968276183811521,
        "onset": 11.997200839748073
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 12.329367856309771
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 12.663400979706084
      },
      {
        "noteIndices": [
          42,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 12.995567996267784
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 13.329601119664098
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 13.661768136225795
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 13.99580125962211
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 14.329834383018426
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 14.662001399580124
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 14.996034522976437
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.7968276183811521,
        "onset": 15.994401679496148
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 16.328434802892463
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26498717051551196,
        "onset": 16.662467926288777
      },
      {
        "noteIndices": [
          42,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 16.994634942850475
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 17.328668066246788
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 17.66083508280849
      },
      {
        "noteIndices": [
          44,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 17.994868206204803
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 18.3270352227665
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 18.661068346162814
      },
      {
        "noteIndices": [
          39,
          54
        ],
        "duration": 0.7968276183811521,
        "onset": 18.995101469559128
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.26498717051551196,
        "onset": 19.327268486120825
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.26498717051551196,
        "onset": 19.66130160951714
      },
      {
        "noteIndices": [
          41,
          56
        ],
        "duration": 0.7968276183811521,
        "onset": 19.99346862607884
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.26498717051551196,
        "onset": 20.327501749475154
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.26498717051551196,
        "onset": 20.65966876603685
      },
      {
        "noteIndices": [
          42,
          58
        ],
        "duration": 0.7968276183811521,
        "onset": 20.993701889433165
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.26498717051551196,
        "onset": 21.327735012829482
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 21.659902029391176
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7968276183811521,
        "onset": 21.993935152787493
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.26498717051551196,
        "onset": 22.32610216934919
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.26498717051551196,
        "onset": 22.660135292745508
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7968276183811521,
        "onset": 22.992302309307203
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "P01(B♭ minor)": {
    "notes": [
      {
        "noteIndices": [
          16,
          28
        ],
        "duration": 0.12,
        "onset": 0
      },
      {
        "noteIndices": [
          18,
          30
        ],
        "duration": 0.12,
        "onset": 0.125
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 0.25
      },
      {
        "noteIndices": [
          21,
          33
        ],
        "duration": 0.12,
        "onset": 0.375
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.12,
        "onset": 0.5
      },
      {
        "noteIndices": [
          23,
          35
        ],
        "duration": 0.12,
        "onset": 0.625
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 0.75
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.12,
        "onset": 0.8750000000000001
      },
      {
        "noteIndices": [
          28,
          40
        ],
        "duration": 0.12,
        "onset": 1
      },
      {
        "noteIndices": [
          9,
          21,
          33,
          45
        ],
        "duration": 0.12,
        "onset": 1.1250000000000002
      },
      {
        "noteIndices": [
          13,
          20,
          25
        ],
        "duration": 1.5983333333333334,
        "onset": 2
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.25
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.75
      },
      {
        "noteIndices": [
          11,
          19,
          23,
          40,
          43,
          47
        ],
        "duration": 1.5983333333333334,
        "onset": 4
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 4.25
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 4.500000000000001
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 4.75
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 5
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 5.25
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 5.5
      },
      {
        "noteIndices": [
          40,
          43,
          47
        ],
        "duration": 0.19833333333333333,
        "onset": 5.750000000000001
      },
      {
        "noteIndices": [
          13,
          20,
          25,
          40,
          44
        ],
        "duration": 7.598333333333334,
        "onset": 6
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.25
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.5
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.75
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.25
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.5
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 5.848333333333334,
        "onset": 7.750000000000001
      },
      {
        "noteIndices": [
          16,
          28
        ],
        "duration": 0.12,
        "onset": 14.000000000000002
      },
      {
        "noteIndices": [
          18,
          30
        ],
        "duration": 0.12,
        "onset": 14.125
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 14.250000000000002
      },
      {
        "noteIndices": [
          21,
          33
        ],
        "duration": 0.12,
        "onset": 14.375
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.12,
        "onset": 14.5
      },
      {
        "noteIndices": [
          23,
          35
        ],
        "duration": 0.12,
        "onset": 14.625000000000002
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 14.75
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.12,
        "onset": 14.875000000000002
      },
      {
        "noteIndices": [
          28,
          40
        ],
        "duration": 0.12,
        "onset": 15
      },
      {
        "noteIndices": [
          9,
          21,
          33,
          45
        ],
        "duration": 0.12,
        "onset": 15.125
      },
      {
        "noteIndices": [
          13,
          20,
          25
        ],
        "duration": 2,
        "onset": 16
      },
      {
        "noteIndices": [
          40,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 17
      },
      {
        "noteIndices": [
          40,
          45
        ],
        "duration": 0.19833333333333333,
        "onset": 17.25
      },
      {
        "noteIndices": [
          40,
          45
        ],
        "duration": 0.19833333333333333,
        "onset": 17.5
      },
      {
        "noteIndices": [
          40,
          45
        ],
        "duration": 0.19833333333333333,
        "onset": 17.75
      },
      {
        "noteIndices": [
          9,
          16,
          21,
          40,
          45
        ],
        "duration": 0.9383333333333332,
        "onset": 18.000000000000004
      }
    ],
    "key": "B♭ minor",
    "tonic": 10,
    "scale": "minor"
  },
  "P01 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17,
          29
        ],
        "duration": 0.12,
        "onset": 0
      },
      {
        "noteIndices": [
          18,
          30
        ],
        "duration": 0.12,
        "onset": 0.125
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 0.25
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.12,
        "onset": 0.375
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.12,
        "onset": 0.5
      },
      {
        "noteIndices": [
          24,
          36
        ],
        "duration": 0.12,
        "onset": 0.625
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 0.75
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.12,
        "onset": 0.8750000000000001
      },
      {
        "noteIndices": [
          29,
          41
        ],
        "duration": 0.12,
        "onset": 1
      },
      {
        "noteIndices": [
          10,
          22,
          34,
          46
        ],
        "duration": 0.12,
        "onset": 1.1250000000000002
      },
      {
        "noteIndices": [
          13,
          20,
          25
        ],
        "duration": 1.5983333333333334,
        "onset": 2
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.25
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 3.75
      },
      {
        "noteIndices": [
          12,
          19,
          24,
          41,
          43,
          48
        ],
        "duration": 1.5983333333333334,
        "onset": 4
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 4.25
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 4.500000000000001
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 4.75
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 5
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 5.25
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 5.5
      },
      {
        "noteIndices": [
          41,
          43,
          48
        ],
        "duration": 0.19833333333333333,
        "onset": 5.750000000000001
      },
      {
        "noteIndices": [
          13,
          20,
          25,
          41,
          44
        ],
        "duration": 7.598333333333334,
        "onset": 6
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.25
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.5
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 6.75
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.25
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 7.5
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 5.848333333333334,
        "onset": 7.750000000000001
      },
      {
        "noteIndices": [
          17,
          29
        ],
        "duration": 0.12,
        "onset": 14.000000000000002
      },
      {
        "noteIndices": [
          18,
          30
        ],
        "duration": 0.12,
        "onset": 14.125
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 14.250000000000002
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.12,
        "onset": 14.375
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.12,
        "onset": 14.5
      },
      {
        "noteIndices": [
          24,
          36
        ],
        "duration": 0.12,
        "onset": 14.625000000000002
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.12,
        "onset": 14.75
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.12,
        "onset": 14.875000000000002
      },
      {
        "noteIndices": [
          29,
          41
        ],
        "duration": 0.12,
        "onset": 15
      },
      {
        "noteIndices": [
          10,
          22,
          34,
          46
        ],
        "duration": 0.12,
        "onset": 15.125
      },
      {
        "noteIndices": [
          13,
          20,
          25
        ],
        "duration": 2,
        "onset": 16
      },
      {
        "noteIndices": [
          41,
          44
        ],
        "duration": 0.19833333333333333,
        "onset": 17
      },
      {
        "noteIndices": [
          41,
          46
        ],
        "duration": 0.19833333333333333,
        "onset": 17.25
      },
      {
        "noteIndices": [
          41,
          46
        ],
        "duration": 0.19833333333333333,
        "onset": 17.5
      },
      {
        "noteIndices": [
          41,
          46
        ],
        "duration": 0.19833333333333333,
        "onset": 17.75
      },
      {
        "noteIndices": [
          10,
          17,
          22,
          41,
          46
        ],
        "duration": 0.9383333333333332,
        "onset": 18.000000000000004
      }
    ],
    "key": "B♭ major",
    "tonic": 10,
    "scale": "major"
  },
  "P02(F minor)": {
    "notes": [
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 0
      },
      {
        "noteIndices": [
          15,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 0.4994998332777592
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 1.0013337779259752
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 1.3327775925308434
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 1.5008336112037346
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 1.6665555185061687
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 4.0006668889629875,
        "onset": 2.0003334444814937
      },
      {
        "noteIndices": [
          11,
          23
        ],
        "duration": 0.3967989329776592,
        "onset": 2.499833277759253
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 3.001667222407469
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 3.501167055685228
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 4.0006668889629875
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 4.502500833611204
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 5.0020006668889625
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 5.501500500166722
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 6.001000333444482
      },
      {
        "noteIndices": [
          15,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 6.502834278092697
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 7.002334111370456
      },
      {
        "noteIndices": [
          32,
          39,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 7.3361120373457815
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 7.501833944648216
      },
      {
        "noteIndices": [
          32,
          39,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 7.669889963321107
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 4.7522507502500835,
        "onset": 8.003667889296432
      },
      {
        "noteIndices": [
          11,
          23
        ],
        "duration": 0.3967989329776592,
        "onset": 8.50316772257419
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 9.002667555851952
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 9.50216738912971
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 10.004001333777925
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 10.503501167055685
      },
      {
        "noteIndices": [
          1,
          11,
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 11.003001000333445
      },
      {
        "noteIndices": [
          3,
          10,
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 11.504834944981662
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 12.00433477825942
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 12.50383461153718
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 13.003334444814937
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 13.505168389463153
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 14.004668222740912
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 14.338446148716239
      },
      {
        "noteIndices": [
          11,
          23
        ],
        "duration": 0.3967989329776592,
        "onset": 14.504168056018674
      },
      {
        "noteIndices": [
          35,
          47
        ],
        "duration": 0.26608869623207737,
        "onset": 14.672224074691563
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 15.00600200066689
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 15.505501833944647
      },
      {
        "noteIndices": [
          8,
          20,
          35,
          44,
          47
        ],
        "duration": 1.4681560520173391,
        "onset": 16.00500166722241
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 16.504501500500165
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 17.00633544514838
      },
      {
        "noteIndices": [
          16,
          37,
          46,
          49
        ],
        "duration": 0.46915638546182065,
        "onset": 17.50583527842614
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 18.005335111703904
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 18.50716905635212
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 19.00666888962988
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 19.506168722907635
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 20.005668556185395
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 20.50750250083361
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 21.00700233411137
      },
      {
        "noteIndices": [
          16
        ],
        "duration": 0.3967989329776592,
        "onset": 21.50650216738913
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 22.008336112037345
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 22.339779926642212
      },
      {
        "noteIndices": [
          11,
          23
        ],
        "duration": 0.3967989329776592,
        "onset": 22.507835945315104
      },
      {
        "noteIndices": [
          35,
          47
        ],
        "duration": 0.26608869623207737,
        "onset": 22.673557852617538
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 23.00733577859286
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 23.506835611870624
      },
      {
        "noteIndices": [
          8,
          20,
          37,
          46,
          49
        ],
        "duration": 1.4681560520173391,
        "onset": 24.00866955651884
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 24.5081693897966
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 25.00766922307436
      },
      {
        "noteIndices": [
          15,
          40,
          47,
          51
        ],
        "duration": 0.46915638546182065,
        "onset": 25.509503167722574
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "P02 (modified)": {
    "notes": [
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 0
      },
      {
        "noteIndices": [
          15,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 0.4994998332777592
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 1.0013337779259752
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 1.3327775925308434
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 1.5008336112037346
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 1.6665555185061687
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 4.0006668889629875,
        "onset": 2.0003334444814937
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 0.3967989329776592,
        "onset": 2.499833277759253
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 3.001667222407469
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 3.501167055685228
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 4.0006668889629875
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 4.502500833611204
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 5.0020006668889625
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 5.501500500166722
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 6.001000333444482
      },
      {
        "noteIndices": [
          15,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 6.502834278092697
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 7.002334111370456
      },
      {
        "noteIndices": [
          32,
          39,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 7.3361120373457815
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 7.501833944648216
      },
      {
        "noteIndices": [
          32,
          39,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 7.669889963321107
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          39,
          44
        ],
        "duration": 4.7522507502500835,
        "onset": 8.003667889296432
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 0.3967989329776592,
        "onset": 8.50316772257419
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 9.002667555851952
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 9.50216738912971
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 10.004001333777925
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 10.503501167055685
      },
      {
        "noteIndices": [
          1,
          12,
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 11.003001000333445
      },
      {
        "noteIndices": [
          3,
          10,
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 11.504834944981662
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 12.00433477825942
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 12.50383461153718
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 13.003334444814937
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 13.505168389463153
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 14.004668222740912
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 14.338446148716239
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 0.3967989329776592,
        "onset": 14.504168056018674
      },
      {
        "noteIndices": [
          36,
          48
        ],
        "duration": 0.26608869623207737,
        "onset": 14.672224074691563
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 15.00600200066689
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 15.505501833944647
      },
      {
        "noteIndices": [
          8,
          20,
          36,
          44,
          48
        ],
        "duration": 1.4681560520173391,
        "onset": 16.00500166722241
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 16.504501500500165
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 17.00633544514838
      },
      {
        "noteIndices": [
          17,
          37,
          46,
          49
        ],
        "duration": 0.46915638546182065,
        "onset": 17.50583527842614
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 18.005335111703904
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 18.50716905635212
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 19.00666888962988
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 19.506168722907635
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 20.005668556185395
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 20.50750250083361
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.7982660886962322,
        "onset": 21.00700233411137
      },
      {
        "noteIndices": [
          17
        ],
        "duration": 0.3967989329776592,
        "onset": 21.50650216738913
      },
      {
        "noteIndices": [
          8,
          20,
          32,
          44
        ],
        "duration": 0.3967989329776592,
        "onset": 22.008336112037345
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.26608869623207737,
        "onset": 22.339779926642212
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 0.3967989329776592,
        "onset": 22.507835945315104
      },
      {
        "noteIndices": [
          36,
          48
        ],
        "duration": 0.26608869623207737,
        "onset": 22.673557852617538
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 23.00733577859286
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 23.506835611870624
      },
      {
        "noteIndices": [
          8,
          20,
          37,
          46,
          49
        ],
        "duration": 1.4681560520173391,
        "onset": 24.00866955651884
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.3967989329776592,
        "onset": 24.5081693897966
      },
      {
        "noteIndices": [
          8,
          20
        ],
        "duration": 0.3967989329776592,
        "onset": 25.00766922307436
      },
      {
        "noteIndices": [
          15,
          41,
          48,
          51
        ],
        "duration": 0.46915638546182065,
        "onset": 25.509503167722574
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "P03(C minor)": {
    "notes": [],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "P03 (modified)": {
    "notes": [],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "P04(C minor)": {
    "notes": [
      {
        "noteIndices": [
          27
        ],
        "duration": 0.13000000000000003,
        "onset": 0
      },
      {
        "noteIndices": [
          18
        ],
        "duration": 0.13000000000000003,
        "onset": 0.1666666666666667
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.13000000000000003,
        "onset": 0.3333333333333334
      },
      {
        "noteIndices": [
          10
        ],
        "duration": 0.13000000000000003,
        "onset": 0.5000000000000001
      },
      {
        "noteIndices": [
          58,
          63
        ],
        "duration": 2.0000000000000004,
        "onset": 4.000000000000001
      },
      {
        "noteIndices": [
          59,
          65
        ],
        "duration": 5.198333333333335,
        "onset": 6.000000000000002
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.13000000000000003,
        "onset": 12.000000000000004
      },
      {
        "noteIndices": [
          18
        ],
        "duration": 0.13000000000000003,
        "onset": 12.16666666666667
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.13000000000000003,
        "onset": 12.333333333333337
      },
      {
        "noteIndices": [
          10
        ],
        "duration": 0.13000000000000003,
        "onset": 12.500000000000004
      },
      {
        "noteIndices": [
          41,
          58,
          63
        ],
        "duration": 2.7966666666666673,
        "onset": 14.000000000000004
      },
      {
        "noteIndices": [
          42,
          59,
          65
        ],
        "duration": 2.396666666666667,
        "onset": 17.000000000000004
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "P04 (modified)": {
    "notes": [
      {
        "noteIndices": [
          27
        ],
        "duration": 0.13000000000000003,
        "onset": 0
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.13000000000000003,
        "onset": 0.1666666666666667
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.13000000000000003,
        "onset": 0.3333333333333334
      },
      {
        "noteIndices": [
          10
        ],
        "duration": 0.13000000000000003,
        "onset": 0.5000000000000001
      },
      {
        "noteIndices": [
          58,
          63
        ],
        "duration": 2.0000000000000004,
        "onset": 4.000000000000001
      },
      {
        "noteIndices": [
          60,
          65
        ],
        "duration": 5.198333333333335,
        "onset": 6.000000000000002
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.13000000000000003,
        "onset": 12.000000000000004
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.13000000000000003,
        "onset": 12.16666666666667
      },
      {
        "noteIndices": [
          15
        ],
        "duration": 0.13000000000000003,
        "onset": 12.333333333333337
      },
      {
        "noteIndices": [
          10
        ],
        "duration": 0.13000000000000003,
        "onset": 12.500000000000004
      },
      {
        "noteIndices": [
          41,
          58,
          63
        ],
        "duration": 2.7966666666666673,
        "onset": 14.000000000000004
      },
      {
        "noteIndices": [
          43,
          60,
          65
        ],
        "duration": 2.396666666666667,
        "onset": 17.000000000000004
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "P05(D minor)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.25000000000000006,
        "onset": 0
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.25000000000000006,
        "onset": 0.5000000000000001
      },
      {
        "noteIndices": [
          20
        ],
        "duration": 0.25000000000000006,
        "onset": 1.0000000000000002
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.25000000000000006,
        "onset": 1.5000000000000004
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.25000000000000006,
        "onset": 2.0000000000000004
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.25000000000000006,
        "onset": 2.5000000000000004
      },
      {
        "noteIndices": [
          17,
          24
        ],
        "duration": 0.25000000000000006,
        "onset": 3.000000000000001
      },
      {
        "noteIndices": [
          19,
          25
        ],
        "duration": 0.25000000000000006,
        "onset": 3.500000000000001
      },
      {
        "noteIndices": [
          20,
          27
        ],
        "duration": 0.25000000000000006,
        "onset": 4.000000000000001
      },
      {
        "noteIndices": [
          22,
          29
        ],
        "duration": 0.25000000000000006,
        "onset": 4.500000000000001
      },
      {
        "noteIndices": [
          24,
          31
        ],
        "duration": 0.25000000000000006,
        "onset": 5.000000000000001
      },
      {
        "noteIndices": [
          25,
          32
        ],
        "duration": 0.25000000000000006,
        "onset": 5.500000000000001
      },
      {
        "noteIndices": [
          17,
          24,
          29
        ],
        "duration": 0.25000000000000006,
        "onset": 6.000000000000002
      },
      {
        "noteIndices": [
          19,
          25,
          31
        ],
        "duration": 0.25000000000000006,
        "onset": 6.500000000000001
      },
      {
        "noteIndices": [
          20,
          27,
          32
        ],
        "duration": 0.25000000000000006,
        "onset": 7.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34
        ],
        "duration": 0.25000000000000006,
        "onset": 7.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36
        ],
        "duration": 0.25000000000000006,
        "onset": 8.000000000000002
      },
      {
        "noteIndices": [
          25,
          32,
          37
        ],
        "duration": 0.25000000000000006,
        "onset": 8.500000000000002
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          36
        ],
        "duration": 0.25000000000000006,
        "onset": 9.000000000000002
      },
      {
        "noteIndices": [
          19,
          25,
          31,
          37
        ],
        "duration": 0.25000000000000006,
        "onset": 9.500000000000002
      },
      {
        "noteIndices": [
          20,
          27,
          32,
          39
        ],
        "duration": 0.25000000000000006,
        "onset": 10.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41
        ],
        "duration": 0.25000000000000006,
        "onset": 10.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          43
        ],
        "duration": 0.25000000000000006,
        "onset": 11.000000000000002
      },
      {
        "noteIndices": [
          25,
          32,
          37,
          44
        ],
        "duration": 0.25000000000000006,
        "onset": 11.500000000000004
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          41,
          44,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 12.000000000000004
      },
      {
        "noteIndices": [
          19,
          25,
          31,
          41,
          44,
          48
        ],
        "duration": 0.25000000000000006,
        "onset": 12.500000000000004
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 12.66666666666667
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 12.833333333333336
      },
      {
        "noteIndices": [
          20,
          27,
          32,
          41,
          44,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 13.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41,
          44,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 13.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          41,
          44,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 14.000000000000004
      },
      {
        "noteIndices": [
          25,
          32,
          37,
          41,
          44,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 14.500000000000002
      },
      {
        "noteIndices": [
          13,
          20,
          25,
          40,
          44,
          49
        ],
        "duration": 0.25000000000000006,
        "onset": 15.000000000000004
      },
      {
        "noteIndices": [
          40,
          44,
          49
        ],
        "duration": 0.13000000000000003,
        "onset": 15.16666666666667
      },
      {
        "noteIndices": [
          40,
          44,
          49
        ],
        "duration": 0.13000000000000003,
        "onset": 15.333333333333336
      },
      {
        "noteIndices": [
          15,
          21,
          27,
          40,
          44,
          49
        ],
        "duration": 0.3950000000000001,
        "onset": 15.500000000000005
      },
      {
        "noteIndices": [
          16,
          23,
          28,
          40,
          45,
          49
        ],
        "duration": 2.396666666666667,
        "onset": 16.000000000000004
      },
      {
        "noteIndices": [
          18,
          25,
          30
        ],
        "duration": 0.25000000000000006,
        "onset": 16.500000000000004
      },
      {
        "noteIndices": [
          20,
          27,
          32
        ],
        "duration": 0.25000000000000006,
        "onset": 17.000000000000004
      },
      {
        "noteIndices": [
          21,
          28,
          33
        ],
        "duration": 0.25000000000000006,
        "onset": 17.500000000000004
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          41,
          44,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 18.000000000000004
      },
      {
        "noteIndices": [
          19,
          25,
          31,
          41,
          44,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 18.500000000000004
      },
      {
        "noteIndices": [
          20,
          27,
          32,
          41,
          44,
          48
        ],
        "duration": 0.25000000000000006,
        "onset": 19.000000000000004
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 19.16666666666667
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 19.333333333333336
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41,
          44,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 19.500000000000004
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          41,
          44,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 20.000000000000004
      },
      {
        "noteIndices": [
          25,
          32,
          37,
          41,
          44,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 20.500000000000007
      },
      {
        "noteIndices": [
          13,
          20,
          25,
          40,
          44,
          49
        ],
        "duration": 1.1983333333333335,
        "onset": 21.000000000000004
      },
      {
        "noteIndices": [
          15,
          21,
          27
        ],
        "duration": 0.25000000000000006,
        "onset": 21.500000000000007
      },
      {
        "noteIndices": [
          16,
          23,
          28
        ],
        "duration": 0.25000000000000006,
        "onset": 22.000000000000004
      },
      {
        "noteIndices": [
          18,
          25,
          30,
          40,
          44,
          49
        ],
        "duration": 0.25000000000000006,
        "onset": 22.500000000000004
      },
      {
        "noteIndices": [
          40,
          44,
          49
        ],
        "duration": 0.13000000000000003,
        "onset": 22.66666666666667
      },
      {
        "noteIndices": [
          40,
          44,
          49
        ],
        "duration": 0.13000000000000003,
        "onset": 22.833333333333336
      },
      {
        "noteIndices": [
          20,
          27,
          32,
          40,
          45,
          49
        ],
        "duration": 0.3966666666666667,
        "onset": 23.000000000000007
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40,
          45,
          49
        ],
        "duration": 0.3950000000000001,
        "onset": 23.500000000000004
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "P05 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.25000000000000006,
        "onset": 0
      },
      {
        "noteIndices": [
          19
        ],
        "duration": 0.25000000000000006,
        "onset": 0.5000000000000001
      },
      {
        "noteIndices": [
          21
        ],
        "duration": 0.25000000000000006,
        "onset": 1.0000000000000002
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.25000000000000006,
        "onset": 1.5000000000000004
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.25000000000000006,
        "onset": 2.0000000000000004
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.25000000000000006,
        "onset": 2.5000000000000004
      },
      {
        "noteIndices": [
          17,
          24
        ],
        "duration": 0.25000000000000006,
        "onset": 3.000000000000001
      },
      {
        "noteIndices": [
          19,
          26
        ],
        "duration": 0.25000000000000006,
        "onset": 3.500000000000001
      },
      {
        "noteIndices": [
          21,
          28
        ],
        "duration": 0.25000000000000006,
        "onset": 4.000000000000001
      },
      {
        "noteIndices": [
          22,
          29
        ],
        "duration": 0.25000000000000006,
        "onset": 4.500000000000001
      },
      {
        "noteIndices": [
          24,
          31
        ],
        "duration": 0.25000000000000006,
        "onset": 5.000000000000001
      },
      {
        "noteIndices": [
          26,
          33
        ],
        "duration": 0.25000000000000006,
        "onset": 5.500000000000001
      },
      {
        "noteIndices": [
          17,
          24,
          29
        ],
        "duration": 0.25000000000000006,
        "onset": 6.000000000000002
      },
      {
        "noteIndices": [
          19,
          26,
          31
        ],
        "duration": 0.25000000000000006,
        "onset": 6.500000000000001
      },
      {
        "noteIndices": [
          21,
          28,
          33
        ],
        "duration": 0.25000000000000006,
        "onset": 7.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34
        ],
        "duration": 0.25000000000000006,
        "onset": 7.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36
        ],
        "duration": 0.25000000000000006,
        "onset": 8.000000000000002
      },
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 0.25000000000000006,
        "onset": 8.500000000000002
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          36
        ],
        "duration": 0.25000000000000006,
        "onset": 9.000000000000002
      },
      {
        "noteIndices": [
          19,
          26,
          31,
          38
        ],
        "duration": 0.25000000000000006,
        "onset": 9.500000000000002
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40
        ],
        "duration": 0.25000000000000006,
        "onset": 10.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41
        ],
        "duration": 0.25000000000000006,
        "onset": 10.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          43
        ],
        "duration": 0.25000000000000006,
        "onset": 11.000000000000002
      },
      {
        "noteIndices": [
          26,
          33,
          38,
          45
        ],
        "duration": 0.25000000000000006,
        "onset": 11.500000000000004
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          41,
          45,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 12.000000000000004
      },
      {
        "noteIndices": [
          19,
          26,
          31,
          41,
          45,
          48
        ],
        "duration": 0.25000000000000006,
        "onset": 12.500000000000004
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 12.66666666666667
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 12.833333333333336
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          41,
          45,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 13.000000000000002
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41,
          45,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 13.500000000000002
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          41,
          45,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 14.000000000000004
      },
      {
        "noteIndices": [
          26,
          33,
          38,
          41,
          45,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 14.500000000000002
      },
      {
        "noteIndices": [
          14,
          21,
          26,
          40,
          45,
          50
        ],
        "duration": 0.25000000000000006,
        "onset": 15.000000000000004
      },
      {
        "noteIndices": [
          40,
          45,
          50
        ],
        "duration": 0.13000000000000003,
        "onset": 15.16666666666667
      },
      {
        "noteIndices": [
          40,
          45,
          50
        ],
        "duration": 0.13000000000000003,
        "onset": 15.333333333333336
      },
      {
        "noteIndices": [
          16,
          21,
          28,
          40,
          45,
          50
        ],
        "duration": 0.3950000000000001,
        "onset": 15.500000000000005
      },
      {
        "noteIndices": [
          16,
          23,
          28,
          40,
          45,
          50
        ],
        "duration": 2.396666666666667,
        "onset": 16.000000000000004
      },
      {
        "noteIndices": [
          18,
          26,
          30
        ],
        "duration": 0.25000000000000006,
        "onset": 16.500000000000004
      },
      {
        "noteIndices": [
          21,
          28,
          33
        ],
        "duration": 0.25000000000000006,
        "onset": 17.000000000000004
      },
      {
        "noteIndices": [
          21,
          28,
          33
        ],
        "duration": 0.25000000000000006,
        "onset": 17.500000000000004
      },
      {
        "noteIndices": [
          17,
          24,
          29,
          41,
          45,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 18.000000000000004
      },
      {
        "noteIndices": [
          19,
          26,
          31,
          41,
          45,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 18.500000000000004
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          41,
          45,
          48
        ],
        "duration": 0.25000000000000006,
        "onset": 19.000000000000004
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 19.16666666666667
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 0.13000000000000003,
        "onset": 19.333333333333336
      },
      {
        "noteIndices": [
          22,
          29,
          34,
          41,
          45,
          48
        ],
        "duration": 0.3950000000000001,
        "onset": 19.500000000000004
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          41,
          45,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 20.000000000000004
      },
      {
        "noteIndices": [
          26,
          33,
          38,
          41,
          45,
          48
        ],
        "duration": 0.3966666666666667,
        "onset": 20.500000000000007
      },
      {
        "noteIndices": [
          14,
          21,
          26,
          40,
          45,
          50
        ],
        "duration": 1.1983333333333335,
        "onset": 21.000000000000004
      },
      {
        "noteIndices": [
          16,
          21,
          28
        ],
        "duration": 0.25000000000000006,
        "onset": 21.500000000000007
      },
      {
        "noteIndices": [
          16,
          23,
          28
        ],
        "duration": 0.25000000000000006,
        "onset": 22.000000000000004
      },
      {
        "noteIndices": [
          18,
          26,
          30,
          40,
          45,
          50
        ],
        "duration": 0.25000000000000006,
        "onset": 22.500000000000004
      },
      {
        "noteIndices": [
          40,
          45,
          50
        ],
        "duration": 0.13000000000000003,
        "onset": 22.66666666666667
      },
      {
        "noteIndices": [
          40,
          45,
          50
        ],
        "duration": 0.13000000000000003,
        "onset": 22.833333333333336
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40,
          45,
          50
        ],
        "duration": 0.3966666666666667,
        "onset": 23.000000000000007
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40,
          45,
          50
        ],
        "duration": 0.3950000000000001,
        "onset": 23.500000000000004
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "P06(A minor)": {
    "notes": [
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 0
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 0.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 0.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 0.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 1
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 1.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 1.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 1.7504000000000002
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 2
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 2.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 2.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 2.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 3
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 3.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 3.5008000000000004
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 3.7504
      },
      {
        "noteIndices": [
          12,
          24,
          43
        ],
        "duration": 0.9376,
        "onset": 4
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 4.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 4.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 4.7504
      },
      {
        "noteIndices": [
          43,
          62,
          63
        ],
        "duration": 0.1984,
        "onset": 5
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 5.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 5.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 5.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 6
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 6.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 6.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 6.750400000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 7
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 7.249599999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 7.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 7.750400000000001
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          43
        ],
        "duration": 0.9376,
        "onset": 8
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 8.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 8.5008
      },
      {
        "noteIndices": [
          55,
          62,
          63
        ],
        "duration": 0.1984,
        "onset": 8.7504
      },
      {
        "noteIndices": [
          43,
          63,
          65
        ],
        "duration": 0.1984,
        "onset": 9
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 9.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 9.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 9.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 10
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 10.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 10.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 10.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 11
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 11.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 11.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 11.7504
      },
      {
        "noteIndices": [
          12,
          24,
          43
        ],
        "duration": 0.9376,
        "onset": 12
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 12.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 12.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 12.7504
      },
      {
        "noteIndices": [
          43,
          62,
          63
        ],
        "duration": 0.1984,
        "onset": 13
      },
      {
        "noteIndices": [
          55,
          63,
          65
        ],
        "duration": 0.1984,
        "onset": 13.249600000000001
      },
      {
        "noteIndices": [
          43,
          65,
          67
        ],
        "duration": 0.1984,
        "onset": 13.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 13.750399999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 14
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 14.249600000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 14.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 14.750399999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 15
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 15.249600000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 15.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 15.750399999999999
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "P06 (modified)": {
    "notes": [
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 0
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 0.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 0.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 0.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 1
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 1.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 1.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 1.7504000000000002
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 2
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 2.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 2.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 2.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 3
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 3.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 3.5008000000000004
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 3.7504
      },
      {
        "noteIndices": [
          12,
          24,
          43
        ],
        "duration": 0.9376,
        "onset": 4
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 4.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 4.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 4.7504
      },
      {
        "noteIndices": [
          43,
          62,
          64
        ],
        "duration": 0.1984,
        "onset": 5
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 5.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 5.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 5.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 6
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 6.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 6.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 6.750400000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 7
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 7.249599999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 7.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 7.750400000000001
      },
      {
        "noteIndices": [
          24,
          31,
          36,
          43
        ],
        "duration": 0.9376,
        "onset": 8
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 8.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 8.5008
      },
      {
        "noteIndices": [
          55,
          62,
          64
        ],
        "duration": 0.1984,
        "onset": 8.7504
      },
      {
        "noteIndices": [
          43,
          64,
          65
        ],
        "duration": 0.1984,
        "onset": 9
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 9.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 9.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 9.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 10
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 10.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 10.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 10.7504
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 11
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 11.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 11.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 11.7504
      },
      {
        "noteIndices": [
          12,
          24,
          43
        ],
        "duration": 0.9376,
        "onset": 12
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 12.2496
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 12.5008
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 12.7504
      },
      {
        "noteIndices": [
          43,
          62,
          64
        ],
        "duration": 0.1984,
        "onset": 13
      },
      {
        "noteIndices": [
          55,
          64,
          65
        ],
        "duration": 0.1984,
        "onset": 13.249600000000001
      },
      {
        "noteIndices": [
          43,
          65,
          67
        ],
        "duration": 0.1984,
        "onset": 13.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 13.750399999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 14
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 14.249600000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 14.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 14.750399999999999
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 15
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 15.249600000000001
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.1984,
        "onset": 15.500800000000002
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.1984,
        "onset": 15.750399999999999
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "P07(F minor)": {
    "notes": [
      {
        "noteIndices": [
          15,
          27,
          51,
          54,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 0
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 0.24999999999999994
      },
      {
        "noteIndices": [
          18,
          30,
          47,
          51,
          59
        ],
        "duration": 0.1983333333333333,
        "onset": 0.4999999999999999
      },
      {
        "noteIndices": [
          15,
          27,
          46,
          51,
          58
        ],
        "duration": 3.2499999999999996,
        "onset": 0.7499999999999999
      },
      {
        "noteIndices": [
          20,
          32,
          44,
          47,
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 3.999999999999999
      },
      {
        "noteIndices": [
          19,
          31,
          46,
          49,
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 4.333333333333333
      },
      {
        "noteIndices": [
          16,
          28,
          47,
          51,
          59
        ],
        "duration": 2.333333333333333,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          15,
          27,
          51,
          54,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 10.999999999999998
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 11.249999999999998
      },
      {
        "noteIndices": [
          15,
          27,
          51,
          54,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 11.749999999999998
      },
      {
        "noteIndices": [
          18,
          30,
          47,
          51,
          59
        ],
        "duration": 0.1983333333333333,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          15,
          27,
          46,
          51,
          58
        ],
        "duration": 0.4683333333333333,
        "onset": 12.249999999999998
      },
      {
        "noteIndices": [
          20,
          32,
          44,
          47,
          56
        ],
        "duration": 0.1983333333333333,
        "onset": 12.999999999999998
      },
      {
        "noteIndices": [
          22,
          34,
          43,
          46,
          55
        ],
        "duration": 0.1983333333333333,
        "onset": 13.249999999999998
      },
      {
        "noteIndices": [
          23,
          35,
          40,
          44,
          52
        ],
        "duration": 0.1983333333333333,
        "onset": 13.499999999999998
      },
      {
        "noteIndices": [
          25,
          37,
          39,
          44,
          51
        ],
        "duration": 3.6466666666666665,
        "onset": 13.749999999999998
      },
      {
        "noteIndices": [
          23,
          35,
          37,
          40,
          49
        ],
        "duration": 0.1983333333333333,
        "onset": 18
      },
      {
        "noteIndices": [
          22,
          34,
          39,
          42,
          51
        ],
        "duration": 0.1983333333333333,
        "onset": 18.249999999999996
      },
      {
        "noteIndices": [
          20,
          32,
          40,
          44,
          52
        ],
        "duration": 1.2966666666666664,
        "onset": 18.499999999999996
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "P07 (modified)": {
    "notes": [
      {
        "noteIndices": [
          15,
          27,
          51,
          55,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 0
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 0.24999999999999994
      },
      {
        "noteIndices": [
          19,
          31,
          48,
          51,
          60
        ],
        "duration": 0.1983333333333333,
        "onset": 0.4999999999999999
      },
      {
        "noteIndices": [
          15,
          27,
          46,
          51,
          58
        ],
        "duration": 3.2499999999999996,
        "onset": 0.7499999999999999
      },
      {
        "noteIndices": [
          20,
          32,
          44,
          48,
          56
        ],
        "duration": 0.26499999999999996,
        "onset": 3.999999999999999
      },
      {
        "noteIndices": [
          19,
          31,
          46,
          49,
          58
        ],
        "duration": 0.26499999999999996,
        "onset": 4.333333333333333
      },
      {
        "noteIndices": [
          17,
          29,
          48,
          51,
          60
        ],
        "duration": 2.333333333333333,
        "onset": 4.666666666666666
      },
      {
        "noteIndices": [
          15,
          27,
          51,
          55,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 10.999999999999998
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 11.249999999999998
      },
      {
        "noteIndices": [
          15,
          27,
          51,
          55,
          63
        ],
        "duration": 0.1983333333333333,
        "onset": 11.499999999999998
      },
      {
        "noteIndices": [
          17,
          29,
          50,
          53,
          62
        ],
        "duration": 0.1983333333333333,
        "onset": 11.749999999999998
      },
      {
        "noteIndices": [
          19,
          31,
          48,
          51,
          60
        ],
        "duration": 0.1983333333333333,
        "onset": 11.999999999999998
      },
      {
        "noteIndices": [
          15,
          27,
          46,
          51,
          58
        ],
        "duration": 0.4683333333333333,
        "onset": 12.249999999999998
      },
      {
        "noteIndices": [
          20,
          32,
          44,
          48,
          56
        ],
        "duration": 0.1983333333333333,
        "onset": 12.999999999999998
      },
      {
        "noteIndices": [
          22,
          34,
          43,
          46,
          55
        ],
        "duration": 0.1983333333333333,
        "onset": 13.249999999999998
      },
      {
        "noteIndices": [
          24,
          36,
          41,
          44,
          53
        ],
        "duration": 0.1983333333333333,
        "onset": 13.499999999999998
      },
      {
        "noteIndices": [
          25,
          37,
          39,
          44,
          51
        ],
        "duration": 3.6466666666666665,
        "onset": 13.749999999999998
      },
      {
        "noteIndices": [
          24,
          36,
          37,
          41,
          49
        ],
        "duration": 0.1983333333333333,
        "onset": 18
      },
      {
        "noteIndices": [
          22,
          34,
          39,
          43,
          51
        ],
        "duration": 0.1983333333333333,
        "onset": 18.249999999999996
      },
      {
        "noteIndices": [
          20,
          32,
          41,
          44,
          53
        ],
        "duration": 1.2966666666666664,
        "onset": 18.499999999999996
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "P08(C minor)": {
    "notes": [
      {
        "noteIndices": [
          35,
          47,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 0
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 0.1248
      },
      {
        "noteIndices": [
          27,
          39,
          54
        ],
        "duration": 5.9472000000000005,
        "onset": 0.2496
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 0.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 0.5008
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 0.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 0.7504
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 0.8752000000000001
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 1.1663999999999999
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1.3328
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 1.5008
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1.6672
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 1.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 2
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.23359999999999997,
        "onset": 2.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 2.5008
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.23359999999999997,
        "onset": 2.7504
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.7968,
        "onset": 3
      },
      {
        "noteIndices": [
          29,
          41,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 7
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 7.1248000000000005
      },
      {
        "noteIndices": [
          20,
          32,
          54
        ],
        "duration": 5.9472000000000005,
        "onset": 7.249599999999999
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 7.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 7.5008
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 7.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 7.750400000000001
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 7.8751999999999995
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 8.1664
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8.3328
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 8.5008
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8.6672
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 8.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 9
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.23359999999999997,
        "onset": 9.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 9.5008
      },
      {
        "noteIndices": [
          59,
          71
        ],
        "duration": 1.1872,
        "onset": 9.7504
      },
      {
        "noteIndices": [
          23,
          35,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 14
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 14.124799999999999
      },
      {
        "noteIndices": [
          15,
          27,
          54
        ],
        "duration": 0.7504,
        "onset": 14.249600000000001
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 14.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 14.500800000000002
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 14.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 14.750399999999999
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1248,
        "onset": 14.875200000000001
      },
      {
        "noteIndices": [
          17,
          29,
          58
        ],
        "duration": 0.1984,
        "onset": 15
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 15.1664
      },
      {
        "noteIndices": [
          26,
          38
        ],
        "duration": 4.9472000000000005,
        "onset": 15.249600000000001
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 15.3328
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 15.500800000000002
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 15.6672
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.1664,
        "onset": 15.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 16
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.23359999999999997,
        "onset": 16.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 16.5008
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.23359999999999997,
        "onset": 16.7504
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.7968,
        "onset": 17
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "P08 (modified)": {
    "notes": [
      {
        "noteIndices": [
          36,
          48,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 0
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 0.1248
      },
      {
        "noteIndices": [
          27,
          39,
          55
        ],
        "duration": 5.9472000000000005,
        "onset": 0.2496
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 0.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 0.5008
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 0.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 0.7504
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 0.8752000000000001
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 1.1663999999999999
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1.3328
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 1.5008
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 1.6672
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 1.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 2
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.23359999999999997,
        "onset": 2.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 2.5008
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.23359999999999997,
        "onset": 2.7504
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.7968,
        "onset": 3
      },
      {
        "noteIndices": [
          29,
          41,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 7
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 7.1248000000000005
      },
      {
        "noteIndices": [
          20,
          32,
          55
        ],
        "duration": 5.9472000000000005,
        "onset": 7.249599999999999
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 7.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 7.5008
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 7.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 7.750400000000001
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 7.8751999999999995
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 8.1664
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8.3328
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 8.5008
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 8.6672
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 8.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 9
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.23359999999999997,
        "onset": 9.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 9.5008
      },
      {
        "noteIndices": [
          60,
          72
        ],
        "duration": 1.1872,
        "onset": 9.7504
      },
      {
        "noteIndices": [
          24,
          36,
          51,
          63
        ],
        "duration": 0.23359999999999997,
        "onset": 14
      },
      {
        "noteIndices": [
          53
        ],
        "duration": 0.1248,
        "onset": 14.124799999999999
      },
      {
        "noteIndices": [
          15,
          27,
          55
        ],
        "duration": 0.7504,
        "onset": 14.249600000000001
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.1248,
        "onset": 14.3744
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.1248,
        "onset": 14.500800000000002
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 14.6256
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1248,
        "onset": 14.750399999999999
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1248,
        "onset": 14.875200000000001
      },
      {
        "noteIndices": [
          17,
          29,
          58
        ],
        "duration": 0.1984,
        "onset": 15
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 15.1664
      },
      {
        "noteIndices": [
          26,
          38
        ],
        "duration": 4.9472000000000005,
        "onset": 15.249600000000001
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 15.3328
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 15.500800000000002
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.1664,
        "onset": 15.6672
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.1664,
        "onset": 15.8336
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 16
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.23359999999999997,
        "onset": 16.2496
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.23359999999999997,
        "onset": 16.5008
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.23359999999999997,
        "onset": 16.7504
      },
      {
        "noteIndices": [
          58,
          70
        ],
        "duration": 0.7968,
        "onset": 17
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "P10(F minor)": {
    "notes": [
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 0
      },
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 1.0002750022916858
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 1.0002750022916858,
        "onset": 1.999816665138876
      },
      {
        "noteIndices": [
          16,
          28
        ],
        "duration": 1.0002750022916858,
        "onset": 3.0000916674305618
      },
      {
        "noteIndices": [
          16,
          28
        ],
        "duration": 1.0002750022916858,
        "onset": 4.000366669722247
      },
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 4.999908332569437
      },
      {
        "noteIndices": [
          16,
          28
        ],
        "duration": 1.0002750022916858,
        "onset": 6.0001833348611235
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 1.0002750022916858,
        "onset": 6.999724997708314
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 1.0002750022916858,
        "onset": 8
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "P10 (modified)": {
    "notes": [
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 0
      },
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 1.0002750022916858
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 1.0002750022916858,
        "onset": 1.999816665138876
      },
      {
        "noteIndices": [
          17,
          29
        ],
        "duration": 1.0002750022916858,
        "onset": 3.0000916674305618
      },
      {
        "noteIndices": [
          17,
          29
        ],
        "duration": 1.0002750022916858,
        "onset": 4.000366669722247
      },
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 1.0002750022916858,
        "onset": 4.999908332569437
      },
      {
        "noteIndices": [
          17,
          29
        ],
        "duration": 1.0002750022916858,
        "onset": 6.0001833348611235
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 1.0002750022916858,
        "onset": 6.999724997708314
      },
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 1.0002750022916858,
        "onset": 8
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "P11(B minor)": {
    "notes": [
      {
        "noteIndices": [
          12,
          24
        ],
        "duration": 0.46862231534835,
        "onset": 0
      },
      {
        "noteIndices": [
          14,
          26
        ],
        "duration": 0.46862231534835,
        "onset": 0.5001571503404926
      },
      {
        "noteIndices": [
          7,
          14,
          19
        ],
        "duration": 0.9372446306967,
        "onset": 1.0003143006809851
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 1.9998952331063389
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 2.3335777894185443
      },
      {
        "noteIndices": [
          31,
          38,
          43
        ],
        "duration": 0.46862231534835,
        "onset": 2.5000523834468313
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 2.666526977475119
      },
      {
        "noteIndices": [
          10,
          17,
          22,
          34,
          37,
          46
        ],
        "duration": 1.8752226296490313,
        "onset": 3.000209533787324
      },
      {
        "noteIndices": [
          10,
          17,
          22
        ],
        "duration": 0.39601885804085923,
        "onset": 3.5003666841278163
      },
      {
        "noteIndices": [
          10,
          17,
          22
        ],
        "duration": 0.2654793085385019,
        "onset": 4.000523834468309
      },
      {
        "noteIndices": [
          10,
          17,
          22
        ],
        "duration": 0.2654793085385019,
        "onset": 4.333473022524883
      },
      {
        "noteIndices": [
          10,
          17,
          22
        ],
        "duration": 0.2654793085385019,
        "onset": 4.667155578837089
      },
      {
        "noteIndices": [
          16,
          23,
          28,
          31,
          40
        ],
        "duration": 4.000523834468309,
        "onset": 5.000104766893663
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.33368255631220545,
        "onset": 5.333787323205868
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.33368255631220545,
        "onset": 5.666736511262442
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.46862231534835,
        "onset": 6.000419067574648
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.46862231534835,
        "onset": 6.500576217915141
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.9372446306967,
        "onset": 7.000000000000002
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.9372446306967,
        "onset": 8.000314300680987
      }
    ],
    "key": "B minor",
    "tonic": 11,
    "scale": "minor"
  },
  "P11 (modified)": {
    "notes": [
      {
        "noteIndices": [
          13,
          25
        ],
        "duration": 0.46862231534835,
        "onset": 0
      },
      {
        "noteIndices": [
          14,
          26
        ],
        "duration": 0.46862231534835,
        "onset": 0.5001571503404926
      },
      {
        "noteIndices": [
          7,
          14,
          19
        ],
        "duration": 0.9372446306967,
        "onset": 1.0003143006809851
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 1.9998952331063389
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 2.3335777894185443
      },
      {
        "noteIndices": [
          31,
          38,
          43
        ],
        "duration": 0.46862231534835,
        "onset": 2.5000523834468313
      },
      {
        "noteIndices": [
          14,
          19
        ],
        "duration": 0.33368255631220545,
        "onset": 2.666526977475119
      },
      {
        "noteIndices": [
          11,
          18,
          23,
          35,
          37,
          47
        ],
        "duration": 1.8752226296490313,
        "onset": 3.000209533787324
      },
      {
        "noteIndices": [
          11,
          18,
          23
        ],
        "duration": 0.39601885804085923,
        "onset": 3.5003666841278163
      },
      {
        "noteIndices": [
          11,
          18,
          23
        ],
        "duration": 0.2654793085385019,
        "onset": 4.000523834468309
      },
      {
        "noteIndices": [
          11,
          18,
          23
        ],
        "duration": 0.2654793085385019,
        "onset": 4.333473022524883
      },
      {
        "noteIndices": [
          11,
          18,
          23
        ],
        "duration": 0.2654793085385019,
        "onset": 4.667155578837089
      },
      {
        "noteIndices": [
          16,
          23,
          28,
          31,
          40
        ],
        "duration": 4.000523834468309,
        "onset": 5.000104766893663
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.33368255631220545,
        "onset": 5.333787323205868
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.33368255631220545,
        "onset": 5.666736511262442
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.46862231534835,
        "onset": 6.000419067574648
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.46862231534835,
        "onset": 6.500576217915141
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.9372446306967,
        "onset": 7.000000000000002
      },
      {
        "noteIndices": [
          16,
          23
        ],
        "duration": 0.9372446306967,
        "onset": 8.000314300680987
      }
    ],
    "key": "B major",
    "tonic": 11,
    "scale": "major"
  },
  "P12(A minor)": {
    "notes": [
      {
        "noteIndices": [
          17,
          20,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 0
      },
      {
        "noteIndices": [
          17,
          20,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 0.9999797574947875
      },
      {
        "noteIndices": [
          17,
          20,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 1.999959514989575
      },
      {
        "noteIndices": [
          32,
          36,
          44
        ],
        "duration": 0.19749600210522053,
        "onset": 2.999939272484362
      },
      {
        "noteIndices": [
          24,
          29,
          36
        ],
        "duration": 0.19749600210522053,
        "onset": 3.1974352745895827
      },
      {
        "noteIndices": [
          29,
          32,
          41
        ],
        "duration": 0.20249590089269445,
        "onset": 3.396181251391672
      },
      {
        "noteIndices": [
          20,
          29,
          32
        ],
        "duration": 0.19749600210522053,
        "onset": 3.5986771522843664
      },
      {
        "noteIndices": [
          24,
          29,
          36
        ],
        "duration": 0.20374587558956295,
        "onset": 3.797423129086455
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.7962338819052245,
        "onset": 3.99991902997915
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.797483856602093,
        "onset": 4.999898787473938
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.797483856602093,
        "onset": 5.999878544968724
      },
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 6.999858302463512
      },
      {
        "noteIndices": [
          21,
          26,
          33
        ],
        "duration": 0.19749600210522053,
        "onset": 7.197354304568733
      },
      {
        "noteIndices": [
          29,
          33,
          41
        ],
        "duration": 0.20249590089269445,
        "onset": 7.396100281370821
      },
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 7.598596182263516
      },
      {
        "noteIndices": [
          33,
          38,
          45
        ],
        "duration": 0.20374587558956295,
        "onset": 7.796092184368737
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 7.9998380599583
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 8.999817817453087
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 9.999797574947875
      },
      {
        "noteIndices": [
          35,
          38,
          47
        ],
        "duration": 0.19749600210522053,
        "onset": 10.999777332442664
      },
      {
        "noteIndices": [
          26,
          35,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 11.197273334547882
      },
      {
        "noteIndices": [
          30,
          38,
          42
        ],
        "duration": 0.20249590089269445,
        "onset": 11.396019311349972
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.19749600210522053,
        "onset": 11.598515212242665
      },
      {
        "noteIndices": [
          26,
          35,
          38
        ],
        "duration": 0.20249590089269445,
        "onset": 11.797261189044756
      },
      {
        "noteIndices": [
          8,
          15,
          20
        ],
        "duration": 2.3962014938968843,
        "onset": 11.999757089937448
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "P12 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17,
          21,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 0
      },
      {
        "noteIndices": [
          17,
          21,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 0.9999797574947875
      },
      {
        "noteIndices": [
          17,
          21,
          24,
          29
        ],
        "duration": 0.7962338819052245,
        "onset": 1.999959514989575
      },
      {
        "noteIndices": [
          33,
          36,
          45
        ],
        "duration": 0.19749600210522053,
        "onset": 2.999939272484362
      },
      {
        "noteIndices": [
          24,
          29,
          36
        ],
        "duration": 0.19749600210522053,
        "onset": 3.1974352745895827
      },
      {
        "noteIndices": [
          29,
          33,
          41
        ],
        "duration": 0.20249590089269445,
        "onset": 3.396181251391672
      },
      {
        "noteIndices": [
          21,
          29,
          33
        ],
        "duration": 0.19749600210522053,
        "onset": 3.5986771522843664
      },
      {
        "noteIndices": [
          24,
          29,
          36
        ],
        "duration": 0.20374587558956295,
        "onset": 3.797423129086455
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.7962338819052245,
        "onset": 3.99991902997915
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.797483856602093,
        "onset": 4.999898787473938
      },
      {
        "noteIndices": [
          14,
          17,
          21,
          26
        ],
        "duration": 0.797483856602093,
        "onset": 5.999878544968724
      },
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 6.999858302463512
      },
      {
        "noteIndices": [
          21,
          26,
          33
        ],
        "duration": 0.19749600210522053,
        "onset": 7.197354304568733
      },
      {
        "noteIndices": [
          29,
          33,
          41
        ],
        "duration": 0.20249590089269445,
        "onset": 7.396100281370821
      },
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 7.598596182263516
      },
      {
        "noteIndices": [
          33,
          38,
          45
        ],
        "duration": 0.20374587558956295,
        "onset": 7.796092184368737
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 7.9998380599583
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 8.999817817453087
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.7962338819052245,
        "onset": 9.999797574947875
      },
      {
        "noteIndices": [
          35,
          38,
          47
        ],
        "duration": 0.19749600210522053,
        "onset": 10.999777332442664
      },
      {
        "noteIndices": [
          26,
          35,
          38
        ],
        "duration": 0.19749600210522053,
        "onset": 11.197273334547882
      },
      {
        "noteIndices": [
          30,
          38,
          42
        ],
        "duration": 0.20249590089269445,
        "onset": 11.396019311349972
      },
      {
        "noteIndices": [
          23,
          30,
          35
        ],
        "duration": 0.19749600210522053,
        "onset": 11.598515212242665
      },
      {
        "noteIndices": [
          26,
          35,
          38
        ],
        "duration": 0.20249590089269445,
        "onset": 11.797261189044756
      },
      {
        "noteIndices": [
          9,
          16,
          21
        ],
        "duration": 2.3962014938968843,
        "onset": 11.999757089937448
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "P13(C minor)": {
    "notes": [
      {
        "noteIndices": [
          39,
          46,
          61
        ],
        "duration": 4.599451303155006,
        "onset": 0
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 2.6466049382716044,
        "onset": 5.751714677640602
      },
      {
        "noteIndices": [
          15,
          61
        ],
        "duration": 2.3969478737997254,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          54
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          35,
          42,
          47,
          62
        ],
        "duration": 2.3969478737997254,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          61
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.3960905349794238,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "P13 (modified)": {
    "notes": [
      {
        "noteIndices": [
          39,
          46,
          62
        ],
        "duration": 4.599451303155006,
        "onset": 0
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 0.500514403292181
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 0.9998285322359394
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 1.5003429355281204
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 2.0008573388203015
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 2.5001714677640603
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 3.0006858710562407
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 3.5012002743484216
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 4.000514403292181
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 4.501028806584361
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 5.001543209876542
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 5.500857338820301
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 2.6466049382716044,
        "onset": 5.751714677640602
      },
      {
        "noteIndices": [
          15,
          62
        ],
        "duration": 2.3969478737997254,
        "onset": 6.0013717421124815
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 6.501886145404662
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 7.001200274348421
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.3960905349794238,
        "onset": 7.501714677640602
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.3960905349794238,
        "onset": 8.002229080932782
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 8.501543209876543
      },
      {
        "noteIndices": [
          36,
          43,
          48,
          62
        ],
        "duration": 2.3969478737997254,
        "onset": 9.002057613168722
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 9.502572016460903
      },
      {
        "noteIndices": [
          62
        ],
        "duration": 0.3960905349794238,
        "onset": 10.001886145404661
      },
      {
        "noteIndices": [
          57
        ],
        "duration": 0.3960905349794238,
        "onset": 10.502400548696842
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.3960905349794238,
        "onset": 11.002914951989023
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.3960905349794238,
        "onset": 11.502229080932782
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "P14(F minor)": {
    "notes": [
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.19770773638968483,
        "onset": 0
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.19770773638968483,
        "onset": 0.2492836676217765
      },
      {
        "noteIndices": [
          23,
          35
        ],
        "duration": 0.19770773638968483,
        "onset": 0.498567335243553
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.19770773638968483,
        "onset": 0.7507163323782235
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.19770773638968483,
        "onset": 1
      },
      {
        "noteIndices": [
          28,
          40
        ],
        "duration": 0.19770773638968483,
        "onset": 1.2492836676217767
      },
      {
        "noteIndices": [
          30,
          42
        ],
        "duration": 0.19770773638968483,
        "onset": 1.4985673352435531
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.19770773638968483,
        "onset": 1.7478510028653296
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          51,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 2
      },
      {
        "noteIndices": [
          23,
          35,
          47,
          52,
          59
        ],
        "duration": 0.2664756446991404,
        "onset": 2.332378223495702
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.19770773638968483,
        "onset": 8.997134670487107
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.19770773638968483,
        "onset": 9.246418338108883
      },
      {
        "noteIndices": [
          23,
          35
        ],
        "duration": 0.19770773638968483,
        "onset": 9.49570200573066
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.19770773638968483,
        "onset": 9.744985673352435
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.19770773638968483,
        "onset": 9.994269340974213
      },
      {
        "noteIndices": [
          28,
          40
        ],
        "duration": 0.19770773638968483,
        "onset": 10.246418338108883
      },
      {
        "noteIndices": [
          30,
          42
        ],
        "duration": 0.19770773638968483,
        "onset": 10.49570200573066
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.19770773638968483,
        "onset": 10.744985673352437
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          49,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 10.994269340974213
      },
      {
        "noteIndices": [
          23,
          35,
          47,
          59
        ],
        "duration": 0.2664756446991404,
        "onset": 11.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 11.661891117478511
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          51,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 11.994269340974213
      },
      {
        "noteIndices": [
          23,
          35,
          47,
          59
        ],
        "duration": 0.2664756446991404,
        "onset": 12.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 12.66189111747851
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          52,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 12.994269340974213
      },
      {
        "noteIndices": [
          23,
          35,
          47,
          59
        ],
        "duration": 0.2664756446991404,
        "onset": 13.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 13.659025787965618
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 22.988538681948423
      },
      {
        "noteIndices": [
          23,
          35,
          47,
          59
        ],
        "duration": 0.2664756446991404,
        "onset": 23.323782234957022
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 23.656160458452725
      },
      {
        "noteIndices": [
          8,
          15,
          20,
          56,
          63,
          68
        ],
        "duration": 3,
        "onset": 23.988538681948427
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "P14 (modified)": {
    "notes": [
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.19770773638968483,
        "onset": 0
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.19770773638968483,
        "onset": 0.2492836676217765
      },
      {
        "noteIndices": [
          24,
          36
        ],
        "duration": 0.19770773638968483,
        "onset": 0.498567335243553
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.19770773638968483,
        "onset": 0.7507163323782235
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.19770773638968483,
        "onset": 1
      },
      {
        "noteIndices": [
          29,
          41
        ],
        "duration": 0.19770773638968483,
        "onset": 1.2492836676217767
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.19770773638968483,
        "onset": 1.4985673352435531
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.19770773638968483,
        "onset": 1.7478510028653296
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          51,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 2
      },
      {
        "noteIndices": [
          24,
          36,
          48,
          53,
          60
        ],
        "duration": 0.2664756446991404,
        "onset": 2.332378223495702
      },
      {
        "noteIndices": [
          20,
          32
        ],
        "duration": 0.19770773638968483,
        "onset": 8.997134670487107
      },
      {
        "noteIndices": [
          22,
          34
        ],
        "duration": 0.19770773638968483,
        "onset": 9.246418338108883
      },
      {
        "noteIndices": [
          24,
          36
        ],
        "duration": 0.19770773638968483,
        "onset": 9.49570200573066
      },
      {
        "noteIndices": [
          25,
          37
        ],
        "duration": 0.19770773638968483,
        "onset": 9.744985673352435
      },
      {
        "noteIndices": [
          27,
          39
        ],
        "duration": 0.19770773638968483,
        "onset": 9.994269340974213
      },
      {
        "noteIndices": [
          29,
          41
        ],
        "duration": 0.19770773638968483,
        "onset": 10.246418338108883
      },
      {
        "noteIndices": [
          31,
          43
        ],
        "duration": 0.19770773638968483,
        "onset": 10.49570200573066
      },
      {
        "noteIndices": [
          32,
          44
        ],
        "duration": 0.19770773638968483,
        "onset": 10.744985673352437
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          49,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 10.994269340974213
      },
      {
        "noteIndices": [
          24,
          36,
          48,
          60
        ],
        "duration": 0.2664756446991404,
        "onset": 11.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 11.661891117478511
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          51,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 11.994269340974213
      },
      {
        "noteIndices": [
          24,
          36,
          48,
          60
        ],
        "duration": 0.2664756446991404,
        "onset": 12.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 12.66189111747851
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          53,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 12.994269340974213
      },
      {
        "noteIndices": [
          24,
          36,
          48,
          60
        ],
        "duration": 0.2664756446991404,
        "onset": 13.326647564469914
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 13.659025787965618
      },
      {
        "noteIndices": [
          22,
          34,
          46,
          58
        ],
        "duration": 0.2664756446991404,
        "onset": 22.988538681948423
      },
      {
        "noteIndices": [
          24,
          36,
          48,
          60
        ],
        "duration": 0.2664756446991404,
        "onset": 23.323782234957022
      },
      {
        "noteIndices": [
          25,
          37,
          49,
          61
        ],
        "duration": 0.2664756446991404,
        "onset": 23.656160458452725
      },
      {
        "noteIndices": [
          8,
          15,
          20,
          56,
          63,
          68
        ],
        "duration": 3,
        "onset": 23.988538681948427
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "T01(E♭ minor)": {
    "notes": [
      {
        "noteIndices": [
          11
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          42,
          50
        ],
        "duration": 0.9373333333333332,
        "onset": 0.5
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          42,
          50
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          35,
          40,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          38,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          18,
          38,
          47
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          37,
          46
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          30,
          37,
          46
        ],
        "duration": 0.9373333333333332,
        "onset": 4
      },
      {
        "noteIndices": [
          38,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          18,
          40,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 5
      },
      {
        "noteIndices": [
          11
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          40,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 6.5
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.7966666666666667,
        "onset": 7
      },
      {
        "noteIndices": [
          38,
          47
        ],
        "duration": 0.9373333333333332,
        "onset": 7.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.7966666666666667,
        "onset": 8
      }
    ],
    "key": "E♭ minor",
    "tonic": 3,
    "scale": "minor"
  },
  "T01 (modified)": {
    "notes": [
      {
        "noteIndices": [
          11
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.9373333333333332,
        "onset": 0.5
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          42,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          35,
          41,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          39,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          18,
          39,
          47
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          37,
          46
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          30,
          37,
          46
        ],
        "duration": 0.9373333333333332,
        "onset": 4
      },
      {
        "noteIndices": [
          39,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          18,
          41,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 5
      },
      {
        "noteIndices": [
          11
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          41,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 6.5
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.7966666666666667,
        "onset": 7
      },
      {
        "noteIndices": [
          39,
          47
        ],
        "duration": 0.9373333333333332,
        "onset": 7.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.7966666666666667,
        "onset": 8
      }
    ],
    "key": "E♭ major",
    "tonic": 3,
    "scale": "major"
  },
  "T02(E♭ minor)": {
    "notes": [
      {
        "noteIndices": [
          18,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          30,
          45,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 2
      },
      {
        "noteIndices": [
          30,
          45,
          50
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          20,
          47,
          50
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          35,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 4
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          38,
          44,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          32,
          45
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          25,
          42,
          45
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          32,
          41,
          44
        ],
        "duration": 1.198,
        "onset": 7
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.4686666666666666,
        "onset": 8
      },
      {
        "noteIndices": [
          25,
          35,
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      }
    ],
    "key": "E♭ minor",
    "tonic": 3,
    "scale": "minor"
  },
  "T02 (modified)": {
    "notes": [
      {
        "noteIndices": [
          18,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 0
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          30,
          46,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 1
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39599999999999996,
        "onset": 1.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 2
      },
      {
        "noteIndices": [
          30,
          46,
          51
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          20,
          47,
          51
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          35,
          49
        ],
        "duration": 0.9373333333333332,
        "onset": 4
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          39,
          44,
          47
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          32,
          46
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          25,
          42,
          46
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          32,
          41,
          44
        ],
        "duration": 1.198,
        "onset": 7
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.4686666666666666,
        "onset": 8
      },
      {
        "noteIndices": [
          25,
          35,
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      }
    ],
    "key": "E♭ major",
    "tonic": 3,
    "scale": "major"
  },
  "T03(A♭ minor)": {
    "notes": [
      {
        "noteIndices": [
          23,
          54
        ],
        "duration": 0.7966666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          30,
          47,
          55
        ],
        "duration": 0.4686666666666666,
        "onset": 1.5
      },
      {
        "noteIndices": [
          28,
          47,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          30,
          46,
          52
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          18
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          23,
          47,
          50
        ],
        "duration": 3.198,
        "onset": 4
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 6
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          18,
          49
        ],
        "duration": 0.7966666666666667,
        "onset": 8
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          34,
          42
        ],
        "duration": 0.4686666666666666,
        "onset": 9.5
      }
    ],
    "key": "A♭ minor",
    "tonic": 8,
    "scale": "minor"
  },
  "T03 (modified)": {
    "notes": [
      {
        "noteIndices": [
          23,
          54
        ],
        "duration": 0.7966666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          30,
          47,
          56
        ],
        "duration": 0.4686666666666666,
        "onset": 1.5
      },
      {
        "noteIndices": [
          28,
          47,
          54
        ],
        "duration": 0.9373333333333332,
        "onset": 2
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          30,
          46,
          52
        ],
        "duration": 0.9373333333333332,
        "onset": 3
      },
      {
        "noteIndices": [
          18
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          23,
          47,
          51
        ],
        "duration": 3.198,
        "onset": 4
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39599999999999996,
        "onset": 6
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.39599999999999996,
        "onset": 7.5
      },
      {
        "noteIndices": [
          18,
          49
        ],
        "duration": 0.7966666666666667,
        "onset": 8
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39599999999999996,
        "onset": 8.5
      },
      {
        "noteIndices": [
          30
        ],
        "duration": 0.39599999999999996,
        "onset": 9
      },
      {
        "noteIndices": [
          34,
          42
        ],
        "duration": 0.4686666666666666,
        "onset": 9.5
      }
    ],
    "key": "A♭ major",
    "tonic": 8,
    "scale": "major"
  },
  "T04(C minor)": {
    "notes": [
      {
        "noteIndices": [
          15,
          27,
          51
        ],
        "duration": 0.7965796579657966,
        "onset": 0
      },
      {
        "noteIndices": [
          30,
          34,
          39,
          46
        ],
        "duration": 0.7965796579657966,
        "onset": 1
      },
      {
        "noteIndices": [
          30,
          34,
          39,
          54
        ],
        "duration": 0.7965796579657966,
        "onset": 2
      },
      {
        "noteIndices": [
          22,
          54
        ],
        "duration": 0.7965796579657966,
        "onset": 3
      },
      {
        "noteIndices": [
          29,
          34,
          39,
          53
        ],
        "duration": 1.198019801980198,
        "onset": 4
      },
      {
        "noteIndices": [
          29,
          34,
          38
        ],
        "duration": 0.7965796579657966,
        "onset": 5.000900090009001
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39603960396039606,
        "onset": 5.5004500450045
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 4.5994599459945995,
        "onset": 6.000900090009001
      },
      {
        "noteIndices": [
          30,
          35,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 7.000900090009001
      },
      {
        "noteIndices": [
          30,
          35,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 8.000900090009
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 0.7965796579657966,
        "onset": 9.000900090009
      },
      {
        "noteIndices": [
          30,
          34,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 10.000900090009
      }
    ],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "T04 (modified)": {
    "notes": [
      {
        "noteIndices": [
          15,
          27,
          51
        ],
        "duration": 0.7965796579657966,
        "onset": 0
      },
      {
        "noteIndices": [
          31,
          34,
          39,
          46
        ],
        "duration": 0.7965796579657966,
        "onset": 1
      },
      {
        "noteIndices": [
          31,
          34,
          39,
          55
        ],
        "duration": 0.7965796579657966,
        "onset": 2
      },
      {
        "noteIndices": [
          22,
          55
        ],
        "duration": 0.7965796579657966,
        "onset": 3
      },
      {
        "noteIndices": [
          29,
          34,
          39,
          53
        ],
        "duration": 1.198019801980198,
        "onset": 4
      },
      {
        "noteIndices": [
          29,
          34,
          38
        ],
        "duration": 0.7965796579657966,
        "onset": 5.000900090009001
      },
      {
        "noteIndices": [
          46
        ],
        "duration": 0.39603960396039606,
        "onset": 5.5004500450045
      },
      {
        "noteIndices": [
          27,
          51
        ],
        "duration": 4.5994599459945995,
        "onset": 6.000900090009001
      },
      {
        "noteIndices": [
          31,
          36,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 7.000900090009001
      },
      {
        "noteIndices": [
          31,
          36,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 8.000900090009
      },
      {
        "noteIndices": [
          15,
          27
        ],
        "duration": 0.7965796579657966,
        "onset": 9.000900090009
      },
      {
        "noteIndices": [
          31,
          34,
          39
        ],
        "duration": 0.7965796579657966,
        "onset": 10.000900090009
      }
    ],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "T05(D minor)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.792,
        "onset": 0
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.792,
        "onset": 1
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 2
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 3
      },
      {
        "noteIndices": [
          36,
          48
        ],
        "duration": 0.792,
        "onset": 4
      },
      {
        "noteIndices": [
          24,
          49
        ],
        "duration": 0.792,
        "onset": 5
      },
      {
        "noteIndices": [
          17,
          51
        ],
        "duration": 3.792,
        "onset": 6
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.792,
        "onset": 7
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 8
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 9
      },
      {
        "noteIndices": [
          36,
          49
        ],
        "duration": 0.792,
        "onset": 10
      },
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 0.792,
        "onset": 11
      },
      {
        "noteIndices": [
          17,
          49
        ],
        "duration": 3.792,
        "onset": 12
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.792,
        "onset": 13
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 14
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 15
      },
      {
        "noteIndices": [
          36,
          43,
          46
        ],
        "duration": 0.792,
        "onset": 16
      },
      {
        "noteIndices": [
          24,
          41,
          48
        ],
        "duration": 0.792,
        "onset": 17
      },
      {
        "noteIndices": [
          17,
          40,
          49
        ],
        "duration": 1.876,
        "onset": 18
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.792,
        "onset": 19
      },
      {
        "noteIndices": [
          29,
          41,
          48
        ],
        "duration": 1.876,
        "onset": 20
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 21
      },
      {
        "noteIndices": [
          36,
          43,
          46
        ],
        "duration": 1.876,
        "onset": 22
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.792,
        "onset": 23
      },
      {
        "noteIndices": [
          17,
          44,
          48
        ],
        "duration": 0.792,
        "onset": 24
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "T05 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.792,
        "onset": 0
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.792,
        "onset": 1
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 2
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 3
      },
      {
        "noteIndices": [
          36,
          48
        ],
        "duration": 0.792,
        "onset": 4
      },
      {
        "noteIndices": [
          24,
          50
        ],
        "duration": 0.792,
        "onset": 5
      },
      {
        "noteIndices": [
          17,
          52
        ],
        "duration": 3.792,
        "onset": 6
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.792,
        "onset": 7
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 8
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 9
      },
      {
        "noteIndices": [
          36,
          50
        ],
        "duration": 0.792,
        "onset": 10
      },
      {
        "noteIndices": [
          24,
          48
        ],
        "duration": 0.792,
        "onset": 11
      },
      {
        "noteIndices": [
          17,
          50
        ],
        "duration": 3.792,
        "onset": 12
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.792,
        "onset": 13
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.792,
        "onset": 14
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 15
      },
      {
        "noteIndices": [
          36,
          43,
          46
        ],
        "duration": 0.792,
        "onset": 16
      },
      {
        "noteIndices": [
          24,
          41,
          48
        ],
        "duration": 0.792,
        "onset": 17
      },
      {
        "noteIndices": [
          17,
          40,
          50
        ],
        "duration": 1.876,
        "onset": 18
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.792,
        "onset": 19
      },
      {
        "noteIndices": [
          29,
          41,
          48
        ],
        "duration": 1.876,
        "onset": 20
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.792,
        "onset": 21
      },
      {
        "noteIndices": [
          36,
          43,
          46
        ],
        "duration": 1.876,
        "onset": 22
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.792,
        "onset": 23
      },
      {
        "noteIndices": [
          17,
          45,
          48
        ],
        "duration": 0.792,
        "onset": 24
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "T06(D minor)": {
    "notes": [
      {
        "noteIndices": [
          29,
          48,
          56
        ],
        "duration": 0.7964772435073285,
        "onset": 0
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 0.5003857032656212
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 1.197865775263564,
        "onset": 0.9998714322447931
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 1.5002571355104142
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 1.9997428644895863
      },
      {
        "noteIndices": [
          27,
          46,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 2.5001285677552074
      },
      {
        "noteIndices": [
          25,
          48,
          56
        ],
        "duration": 0.7964772435073285,
        "onset": 2.9996142967343795
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39598868603754184,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 1.197865775263564,
        "onset": 3.9994857289791725
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39598868603754184,
        "onset": 4.4998714322447935
      },
      {
        "noteIndices": [
          25
        ],
        "duration": 0.39598868603754184,
        "onset": 5.000257135510415
      },
      {
        "noteIndices": [
          24,
          44,
          48
        ],
        "duration": 0.39598868603754184,
        "onset": 5.499742864489587
      },
      {
        "noteIndices": [
          22,
          46,
          49
        ],
        "duration": 3.5000000000000004,
        "onset": 6.000128567755207
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 6.49961429673438
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39598868603754184,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 7.499485728979173
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39598868603754184,
        "onset": 7.9998714322447935
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.39598868603754184,
        "onset": 8.499357161223967
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39598868603754184,
        "onset": 8.999742864489587
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "T06 (modified)": {
    "notes": [
      {
        "noteIndices": [
          29,
          48,
          57
        ],
        "duration": 0.7964772435073285,
        "onset": 0
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 0.5003857032656212
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 1.197865775263564,
        "onset": 0.9998714322447931
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 1.5002571355104142
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 1.9997428644895863
      },
      {
        "noteIndices": [
          28,
          46,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 2.5001285677552074
      },
      {
        "noteIndices": [
          26,
          48,
          57
        ],
        "duration": 0.7964772435073285,
        "onset": 2.9996142967343795
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39598868603754184,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 1.197865775263564,
        "onset": 3.9994857289791725
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39598868603754184,
        "onset": 4.4998714322447935
      },
      {
        "noteIndices": [
          26
        ],
        "duration": 0.39598868603754184,
        "onset": 5.000257135510415
      },
      {
        "noteIndices": [
          24,
          45,
          48
        ],
        "duration": 0.39598868603754184,
        "onset": 5.499742864489587
      },
      {
        "noteIndices": [
          22,
          46,
          50
        ],
        "duration": 3.5000000000000004,
        "onset": 6.000128567755207
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 6.49961429673438
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39598868603754184,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 7.499485728979173
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39598868603754184,
        "onset": 7.9998714322447935
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.39598868603754184,
        "onset": 8.499357161223967
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39598868603754184,
        "onset": 8.999742864489587
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "T08(D minor)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.2652668416447944,
        "onset": 0
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 0.3331583552055993
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.2652668416447944,
        "onset": 0.6663167104111986
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.2652668416447944,
        "onset": 1.000174978127734
      },
      {
        "noteIndices": [
          32,
          44,
          48
        ],
        "duration": 0.2652668416447944,
        "onset": 1.3333333333333335
      },
      {
        "noteIndices": [
          41,
          43,
          46
        ],
        "duration": 0.2652668416447944,
        "onset": 1.6664916885389325
      },
      {
        "noteIndices": [
          41,
          44,
          48
        ],
        "duration": 0.2652668416447944,
        "onset": 1.9996500437445321
      },
      {
        "noteIndices": [
          36,
          44,
          53
        ],
        "duration": 0.2652668416447944,
        "onset": 2.3328083989501316
      },
      {
        "noteIndices": [
          29,
          48,
          56
        ],
        "duration": 0.2652668416447944,
        "onset": 2.666666666666667
      },
      {
        "noteIndices": [
          17,
          48,
          56
        ],
        "duration": 0.7965004374453193,
        "onset": 2.9998250218722657
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 3.332983377077865
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 3.666141732283465
      },
      {
        "noteIndices": [
          37,
          44,
          53
        ],
        "duration": 0.7965004374453193,
        "onset": 3.9993000874890643
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.2652668416447944,
        "onset": 4.332458442694664
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.2652668416447944,
        "onset": 4.666316710411198
      },
      {
        "noteIndices": [
          44,
          46,
          55
        ],
        "duration": 0.7965004374453193,
        "onset": 4.999475065616798
      },
      {
        "noteIndices": [
          37
        ],
        "duration": 0.2652668416447944,
        "onset": 5.332633420822397
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 5.665791776027997
      },
      {
        "noteIndices": [
          24,
          44,
          53
        ],
        "duration": 0.7965004374453193,
        "onset": 5.998950131233595
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.2652668416447944,
        "onset": 6.332808398950132
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 6.66596675415573
      },
      {
        "noteIndices": [
          36,
          43,
          52
        ],
        "duration": 0.7965004374453193,
        "onset": 6.99912510936133
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 7.33228346456693
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.2652668416447944,
        "onset": 7.6654418197725285
      },
      {
        "noteIndices": [
          41,
          46,
          55
        ],
        "duration": 0.7965004374453193,
        "onset": 7.999300087489064
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.2652668416447944,
        "onset": 8.332458442694662
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 8.665616797900263
      },
      {
        "noteIndices": [
          17,
          44,
          48
        ],
        "duration": 0.7965004374453193,
        "onset": 8.998775153105862
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "T08 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17
        ],
        "duration": 0.2652668416447944,
        "onset": 0
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 0.3331583552055993
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.2652668416447944,
        "onset": 0.6663167104111986
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.2652668416447944,
        "onset": 1.000174978127734
      },
      {
        "noteIndices": [
          33,
          45,
          48
        ],
        "duration": 0.2652668416447944,
        "onset": 1.3333333333333335
      },
      {
        "noteIndices": [
          41,
          43,
          46
        ],
        "duration": 0.2652668416447944,
        "onset": 1.6664916885389325
      },
      {
        "noteIndices": [
          41,
          45,
          48
        ],
        "duration": 0.2652668416447944,
        "onset": 1.9996500437445321
      },
      {
        "noteIndices": [
          36,
          45,
          53
        ],
        "duration": 0.2652668416447944,
        "onset": 2.3328083989501316
      },
      {
        "noteIndices": [
          29,
          48,
          57
        ],
        "duration": 0.2652668416447944,
        "onset": 2.666666666666667
      },
      {
        "noteIndices": [
          17,
          48,
          57
        ],
        "duration": 0.7965004374453193,
        "onset": 2.9998250218722657
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 3.332983377077865
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 3.666141732283465
      },
      {
        "noteIndices": [
          38,
          45,
          53
        ],
        "duration": 0.7965004374453193,
        "onset": 3.9993000874890643
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.2652668416447944,
        "onset": 4.332458442694664
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.2652668416447944,
        "onset": 4.666316710411198
      },
      {
        "noteIndices": [
          45,
          46,
          55
        ],
        "duration": 0.7965004374453193,
        "onset": 4.999475065616798
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.2652668416447944,
        "onset": 5.332633420822397
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.2652668416447944,
        "onset": 5.665791776027997
      },
      {
        "noteIndices": [
          24,
          45,
          53
        ],
        "duration": 0.7965004374453193,
        "onset": 5.998950131233595
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.2652668416447944,
        "onset": 6.332808398950132
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 6.66596675415573
      },
      {
        "noteIndices": [
          36,
          43,
          52
        ],
        "duration": 0.7965004374453193,
        "onset": 6.99912510936133
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 7.33228346456693
      },
      {
        "noteIndices": [
          43
        ],
        "duration": 0.2652668416447944,
        "onset": 7.6654418197725285
      },
      {
        "noteIndices": [
          41,
          46,
          55
        ],
        "duration": 0.7965004374453193,
        "onset": 7.999300087489064
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.2652668416447944,
        "onset": 8.332458442694662
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.2652668416447944,
        "onset": 8.665616797900263
      },
      {
        "noteIndices": [
          17,
          45,
          48
        ],
        "duration": 0.7965004374453193,
        "onset": 8.998775153105862
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "T09(D minor)": {
    "notes": [
      {
        "noteIndices": [
          17,
          53
        ],
        "duration": 0.39598868603754184,
        "onset": 0
      },
      {
        "noteIndices": [
          29,
          56
        ],
        "duration": 0.39598868603754184,
        "onset": 0.5003857032656212
      },
      {
        "noteIndices": [
          32,
          56
        ],
        "duration": 0.39598868603754184,
        "onset": 0.9998714322447931
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 1.5002571355104142
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.937773206479815,
        "onset": 1.9997428644895863
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.39598868603754184,
        "onset": 2.5001285677552074
      },
      {
        "noteIndices": [
          17,
          55
        ],
        "duration": 1.5992543070197995,
        "onset": 2.9996142967343795
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39598868603754184,
        "onset": 3.9994857289791725
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 4.4998714322447935
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.937773206479815,
        "onset": 5.000257135510415
      },
      {
        "noteIndices": [
          17,
          53,
          56
        ],
        "duration": 0.39598868603754184,
        "onset": 6.000128567755207
      },
      {
        "noteIndices": [
          29,
          56,
          60
        ],
        "duration": 0.39598868603754184,
        "onset": 6.49961429673438
      },
      {
        "noteIndices": [
          32,
          56,
          60
        ],
        "duration": 0.39598868603754184,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          36,
          55,
          58
        ],
        "duration": 0.39598868603754184,
        "onset": 7.499485728979173
      },
      {
        "noteIndices": [
          41,
          53,
          56
        ],
        "duration": 0.937773206479815,
        "onset": 7.9998714322447935
      },
      {
        "noteIndices": [
          52,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 8.499357161223967
      },
      {
        "noteIndices": [
          17,
          55,
          58
        ],
        "duration": 0.5003857032656212,
        "onset": 8.999742864489587
      }
    ],
    "key": "D minor",
    "tonic": 2,
    "scale": "minor"
  },
  "T09 (modified)": {
    "notes": [
      {
        "noteIndices": [
          17,
          53
        ],
        "duration": 0.39598868603754184,
        "onset": 0
      },
      {
        "noteIndices": [
          29,
          57
        ],
        "duration": 0.39598868603754184,
        "onset": 0.5003857032656212
      },
      {
        "noteIndices": [
          33,
          57
        ],
        "duration": 0.39598868603754184,
        "onset": 0.9998714322447931
      },
      {
        "noteIndices": [
          36,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 1.5002571355104142
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.937773206479815,
        "onset": 1.9997428644895863
      },
      {
        "noteIndices": [
          52
        ],
        "duration": 0.39598868603754184,
        "onset": 2.5001285677552074
      },
      {
        "noteIndices": [
          17,
          55
        ],
        "duration": 1.5992543070197995,
        "onset": 2.9996142967343795
      },
      {
        "noteIndices": [
          29
        ],
        "duration": 0.39598868603754184,
        "onset": 3.5000000000000004
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.39598868603754184,
        "onset": 3.9994857289791725
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39598868603754184,
        "onset": 4.4998714322447935
      },
      {
        "noteIndices": [
          41,
          53
        ],
        "duration": 0.937773206479815,
        "onset": 5.000257135510415
      },
      {
        "noteIndices": [
          17,
          53,
          57
        ],
        "duration": 0.39598868603754184,
        "onset": 6.000128567755207
      },
      {
        "noteIndices": [
          29,
          57,
          60
        ],
        "duration": 0.39598868603754184,
        "onset": 6.49961429673438
      },
      {
        "noteIndices": [
          33,
          57,
          60
        ],
        "duration": 0.39598868603754184,
        "onset": 7.000000000000001
      },
      {
        "noteIndices": [
          36,
          55,
          58
        ],
        "duration": 0.39598868603754184,
        "onset": 7.499485728979173
      },
      {
        "noteIndices": [
          41,
          53,
          57
        ],
        "duration": 0.937773206479815,
        "onset": 7.9998714322447935
      },
      {
        "noteIndices": [
          52,
          55
        ],
        "duration": 0.39598868603754184,
        "onset": 8.499357161223967
      },
      {
        "noteIndices": [
          17,
          55,
          58
        ],
        "duration": 0.5003857032656212,
        "onset": 8.999742864489587
      }
    ],
    "key": "D major",
    "tonic": 2,
    "scale": "major"
  },
  "T10(F minor)": {
    "notes": [
      {
        "noteIndices": [
          25,
          49
        ],
        "duration": 0.7966666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.4686666666666666,
        "onset": 1.5
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7966666666666667,
        "onset": 2
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.7966666666666667,
        "onset": 3
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          20,
          51
        ],
        "duration": 0.7966666666666667,
        "onset": 4
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.9373333333333332,
        "onset": 5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          36,
          52
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          20
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "T10 (modified)": {
    "notes": [
      {
        "noteIndices": [
          25,
          49
        ],
        "duration": 0.7966666666666667,
        "onset": 0
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 0.5
      },
      {
        "noteIndices": [
          41
        ],
        "duration": 0.39599999999999996,
        "onset": 1
      },
      {
        "noteIndices": [
          32,
          49
        ],
        "duration": 0.4686666666666666,
        "onset": 1.5
      },
      {
        "noteIndices": [
          39,
          51
        ],
        "duration": 0.7966666666666667,
        "onset": 2
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 2.5
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7966666666666667,
        "onset": 3
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39599999999999996,
        "onset": 3.5
      },
      {
        "noteIndices": [
          20,
          51
        ],
        "duration": 0.7966666666666667,
        "onset": 4
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 4.5
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.9373333333333332,
        "onset": 5
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 5.5
      },
      {
        "noteIndices": [
          36,
          53
        ],
        "duration": 0.7966666666666667,
        "onset": 6
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39599999999999996,
        "onset": 6.5
      },
      {
        "noteIndices": [
          20
        ],
        "duration": 0.39599999999999996,
        "onset": 7
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  },
  "T11(B minor)": {
    "notes": [
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 3.1976,
        "onset": 0
      },
      {
        "noteIndices": [
          43,
          52
        ],
        "duration": 0.396,
        "onset": 1
      },
      {
        "noteIndices": [
          41,
          50
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          40,
          45
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.396,
        "onset": 2.5
      },
      {
        "noteIndices": [
          38,
          48
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          40,
          46
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          22,
          29,
          38,
          41,
          45
        ],
        "duration": 1.8752,
        "onset": 4
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 1.5992000000000002,
        "onset": 6
      },
      {
        "noteIndices": [
          22
        ],
        "duration": 0.7968,
        "onset": 7
      },
      {
        "noteIndices": [
          19,
          26,
          34
        ],
        "duration": 1.8752,
        "onset": 8
      },
      {
        "noteIndices": [
          43,
          46
        ],
        "duration": 0.396,
        "onset": 9
      },
      {
        "noteIndices": [
          41,
          45
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40,
          43
        ],
        "duration": 0.9376,
        "onset": 10
      },
      {
        "noteIndices": [
          38,
          41
        ],
        "duration": 0.396,
        "onset": 10.5
      }
    ],
    "key": "B minor",
    "tonic": 11,
    "scale": "minor"
  },
  "T11 (modified)": {
    "notes": [
      {
        "noteIndices": [
          26,
          33,
          38
        ],
        "duration": 3.1976,
        "onset": 0
      },
      {
        "noteIndices": [
          43,
          52
        ],
        "duration": 0.396,
        "onset": 1
      },
      {
        "noteIndices": [
          42,
          50
        ],
        "duration": 0.396,
        "onset": 1.5
      },
      {
        "noteIndices": [
          40,
          45
        ],
        "duration": 0.396,
        "onset": 2
      },
      {
        "noteIndices": [
          38,
          42
        ],
        "duration": 0.396,
        "onset": 2.5
      },
      {
        "noteIndices": [
          38,
          49
        ],
        "duration": 0.396,
        "onset": 3
      },
      {
        "noteIndices": [
          40,
          47
        ],
        "duration": 0.396,
        "onset": 3.5
      },
      {
        "noteIndices": [
          23,
          30,
          38,
          42,
          45
        ],
        "duration": 1.8752,
        "onset": 4
      },
      {
        "noteIndices": [
          38,
          43
        ],
        "duration": 1.5992000000000002,
        "onset": 6
      },
      {
        "noteIndices": [
          23
        ],
        "duration": 0.7968,
        "onset": 7
      },
      {
        "noteIndices": [
          19,
          26,
          35
        ],
        "duration": 1.8752,
        "onset": 8
      },
      {
        "noteIndices": [
          43,
          47
        ],
        "duration": 0.396,
        "onset": 9
      },
      {
        "noteIndices": [
          42,
          45
        ],
        "duration": 0.396,
        "onset": 9.5
      },
      {
        "noteIndices": [
          21,
          28,
          33,
          40,
          43
        ],
        "duration": 0.9376,
        "onset": 10
      },
      {
        "noteIndices": [
          38,
          42
        ],
        "duration": 0.396,
        "onset": 10.5
      }
    ],
    "key": "B major",
    "tonic": 11,
    "scale": "major"
  },
  "T12(C minor)": {
    "notes": [],
    "key": "C minor",
    "tonic": 0,
    "scale": "minor"
  },
  "T12 (modified)": {
    "notes": [],
    "key": "C major",
    "tonic": 0,
    "scale": "major"
  },
  "T13(A minor)": {
    "notes": [
      {
        "noteIndices": [
          12
        ],
        "duration": 0.792,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 1
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.792,
        "onset": 2
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 3
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 4
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.792,
        "onset": 5
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.792,
        "onset": 6
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 7
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.792,
        "onset": 8
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 9
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 10
      },
      {
        "noteIndices": [
          27,
          55
        ],
        "duration": 0.792,
        "onset": 11
      },
      {
        "noteIndices": [
          24,
          56
        ],
        "duration": 4.594,
        "onset": 12
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.792,
        "onset": 13
      },
      {
        "noteIndices": [
          39
        ],
        "duration": 0.792,
        "onset": 14
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 15
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.792,
        "onset": 16
      },
      {
        "noteIndices": [
          27,
          48
        ],
        "duration": 0.792,
        "onset": 17
      },
      {
        "noteIndices": [
          24,
          47
        ],
        "duration": 3,
        "onset": 18
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 19
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.792,
        "onset": 20
      }
    ],
    "key": "A minor",
    "tonic": 9,
    "scale": "minor"
  },
  "T13 (modified)": {
    "notes": [
      {
        "noteIndices": [
          12
        ],
        "duration": 0.792,
        "onset": 0
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 1
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.792,
        "onset": 2
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 3
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 4
      },
      {
        "noteIndices": [
          28
        ],
        "duration": 0.792,
        "onset": 5
      },
      {
        "noteIndices": [
          24
        ],
        "duration": 0.792,
        "onset": 6
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 7
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.792,
        "onset": 8
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 9
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 10
      },
      {
        "noteIndices": [
          28,
          55
        ],
        "duration": 0.792,
        "onset": 11
      },
      {
        "noteIndices": [
          24,
          57
        ],
        "duration": 4.594,
        "onset": 12
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.792,
        "onset": 13
      },
      {
        "noteIndices": [
          40
        ],
        "duration": 0.792,
        "onset": 14
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.792,
        "onset": 15
      },
      {
        "noteIndices": [
          33
        ],
        "duration": 0.792,
        "onset": 16
      },
      {
        "noteIndices": [
          28,
          48
        ],
        "duration": 0.792,
        "onset": 17
      },
      {
        "noteIndices": [
          24,
          47
        ],
        "duration": 3,
        "onset": 18
      },
      {
        "noteIndices": [
          31
        ],
        "duration": 0.792,
        "onset": 19
      },
      {
        "noteIndices": [
          38
        ],
        "duration": 0.792,
        "onset": 20
      }
    ],
    "key": "A major",
    "tonic": 9,
    "scale": "major"
  },
  "T14(F minor)": {
    "notes": [
      {
        "noteIndices": [
          20
        ],
        "duration": 0.39590950639853745,
        "onset": 0
      },
      {
        "noteIndices": [
          27,
          59
        ],
        "duration": 0.39590950639853745,
        "onset": 0.49988574040219375
      },
      {
        "noteIndices": [
          35,
          58
        ],
        "duration": 0.9373857404021936,
        "onset": 0.9997714808043875
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39590950639853745,
        "onset": 1.499657221206581
      },
      {
        "noteIndices": [
          39,
          58
        ],
        "duration": 0.4686928702010968,
        "onset": 1.999542961608775
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39590950639853745,
        "onset": 2.4994287020109685
      },
      {
        "noteIndices": [
          59
        ],
        "duration": 0.2343464351005484,
        "onset": 2.7497714808043874
      },
      {
        "noteIndices": [
          25,
          59
        ],
        "duration": 0.7966179159049359,
        "onset": 2.999314442413162
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39590950639853745,
        "onset": 3.499200182815356
      },
      {
        "noteIndices": [
          40,
          49
        ],
        "duration": 0.9373857404021936,
        "onset": 3.99908592321755
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39590950639853745,
        "onset": 4.498971663619743
      },
      {
        "noteIndices": [
          37,
          52
        ],
        "duration": 0.7966179159049359,
        "onset": 4.998857404021937
      },
      {
        "noteIndices": [
          35
        ],
        "duration": 0.39590950639853745,
        "onset": 5.498743144424131
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39590950639853745,
        "onset": 5.998628884826324
      },
      {
        "noteIndices": [
          27,
          58
        ],
        "duration": 0.39590950639853745,
        "onset": 6.498514625228518
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.9373857404021936,
        "onset": 6.998400365630712
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39590950639853745,
        "onset": 7.498286106032906
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 0.4686928702010968,
        "onset": 7.9981718464351
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39590950639853745,
        "onset": 8.498057586837293
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.2343464351005484,
        "onset": 8.748400365630712
      },
      {
        "noteIndices": [
          20,
          58
        ],
        "duration": 0.7966179159049359,
        "onset": 8.997943327239486
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39590950639853745,
        "onset": 9.49782906764168
      },
      {
        "noteIndices": [
          35,
          51
        ],
        "duration": 0.9373857404021936,
        "onset": 9.997714808043874
      }
    ],
    "key": "F minor",
    "tonic": 5,
    "scale": "minor"
  },
  "T14 (modified)": {
    "notes": [
      {
        "noteIndices": [
          20
        ],
        "duration": 0.39590950639853745,
        "onset": 0
      },
      {
        "noteIndices": [
          27,
          60
        ],
        "duration": 0.39590950639853745,
        "onset": 0.49988574040219375
      },
      {
        "noteIndices": [
          36,
          58
        ],
        "duration": 0.9373857404021936,
        "onset": 0.9997714808043875
      },
      {
        "noteIndices": [
          56
        ],
        "duration": 0.39590950639853745,
        "onset": 1.499657221206581
      },
      {
        "noteIndices": [
          39,
          58
        ],
        "duration": 0.4686928702010968,
        "onset": 1.999542961608775
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39590950639853745,
        "onset": 2.4994287020109685
      },
      {
        "noteIndices": [
          60
        ],
        "duration": 0.2343464351005484,
        "onset": 2.7497714808043874
      },
      {
        "noteIndices": [
          25,
          60
        ],
        "duration": 0.7966179159049359,
        "onset": 2.999314442413162
      },
      {
        "noteIndices": [
          32
        ],
        "duration": 0.39590950639853745,
        "onset": 3.499200182815356
      },
      {
        "noteIndices": [
          41,
          49
        ],
        "duration": 0.9373857404021936,
        "onset": 3.99908592321755
      },
      {
        "noteIndices": [
          51
        ],
        "duration": 0.39590950639853745,
        "onset": 4.498971663619743
      },
      {
        "noteIndices": [
          37,
          53
        ],
        "duration": 0.7966179159049359,
        "onset": 4.998857404021937
      },
      {
        "noteIndices": [
          36
        ],
        "duration": 0.39590950639853745,
        "onset": 5.498743144424131
      },
      {
        "noteIndices": [
          34
        ],
        "duration": 0.39590950639853745,
        "onset": 5.998628884826324
      },
      {
        "noteIndices": [
          27,
          58
        ],
        "duration": 0.39590950639853745,
        "onset": 6.498514625228518
      },
      {
        "noteIndices": [
          39,
          56
        ],
        "duration": 0.9373857404021936,
        "onset": 6.998400365630712
      },
      {
        "noteIndices": [
          55
        ],
        "duration": 0.39590950639853745,
        "onset": 7.498286106032906
      },
      {
        "noteIndices": [
          37,
          56
        ],
        "duration": 0.4686928702010968,
        "onset": 7.9981718464351
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39590950639853745,
        "onset": 8.498057586837293
      },
      {
        "noteIndices": [
          58
        ],
        "duration": 0.2343464351005484,
        "onset": 8.748400365630712
      },
      {
        "noteIndices": [
          20,
          58
        ],
        "duration": 0.7966179159049359,
        "onset": 8.997943327239486
      },
      {
        "noteIndices": [
          27
        ],
        "duration": 0.39590950639853745,
        "onset": 9.49782906764168
      },
      {
        "noteIndices": [
          36,
          51
        ],
        "duration": 0.9373857404021936,
        "onset": 9.997714808043874
      }
    ],
    "key": "F major",
    "tonic": 5,
    "scale": "major"
  }
} as const;
