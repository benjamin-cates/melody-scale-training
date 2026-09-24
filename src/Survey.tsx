import { useState } from "react";
import { downloadJson } from "./AppRoutes";

interface SurveyData {
  exportedAt: string;
  surveyVersion: string;
  studyCondition: "cochlear_implant" | "normal_hearing" | "ineligible" | "undetermined";
  hearingProfile: {
      studyEar: string;
      leftEar: {
          ciDetails?: CIEarDetails | undefined;
          status: HearingStatus;
      };
      rightEar: {
          ciDetails?: CIEarDetails | undefined;
          status: HearingStatus;
      };
        additionalComments: string;
  };
  participantInfo: {
      currentAge: number | null;
      gender: string;
      colorBlindType: ColorBlindType;
  };
  musicalExperience: {
      hasMusicalTraining: boolean;
      instrument: string | null;
      trainingStartAge: number | null;
      trainingEndAge: number | null;
      trainingTimingRelativeToHearingLoss: "before" | "after" | "spanned" | "unknown";
      trainingAdditionalComments: string;
      listeningFrequency: string;
      genres: string[];
  }
};

type ColorBlindType = "" | "no" | "red_green" | "blue_yellow" | "total" | "not_sure";
type HearingStatus = "" | "ci" | "normal" | "hearing_aid" | "impaired";

interface CIEarDetails {
  manufacturer: string;
  manufacturerOther: string;
  internalImplant: string;
  audioProcessor: string;
  processorPlacement: string;
  retainedHearing: string;
  hearingLossCause: string;
  causeOther: string;
  ageStartedNeedingCI: string;
  ageReceivedCI: string;
}

const initialCIEarDetails: CIEarDetails = {
  manufacturer: "",
  manufacturerOther: "",
  internalImplant: "",
  audioProcessor: "",
  processorPlacement: "",
  retainedHearing: "",
  hearingLossCause: "",
  causeOther: "",
  ageStartedNeedingCI: "",
  ageReceivedCI: "",
};

const MUSIC_GENRES = [
  "Classical",
  "Pop",
  "Rock",
  "Jazz",
  "Blues",
  "Electronic / Dance",
  "Folk / Acoustic",
  "Hip-Hop / Rap",
  "R&B / Soul",
  "Country",
  "Metal",
  "World / Traditional",
  "Ambient / Instrumental",
];

export function Survey() {
  const [saved, setSaved] = useState(false);

  // Hearing profile state
  const [hasCIForAtLeastOneYear, setHasCIForAtLeastOneYear] = useState<string>("");
  const [leftEarStatus, setLeftEarStatus] = useState<HearingStatus>("");
  const [rightEarStatus, setRightEarStatus] = useState<HearingStatus>("");
  const [hearingAdditionalComments, setHearingAdditionalComments] = useState<string>("");

  const [leftCI, setLeftCI] = useState<CIEarDetails>(initialCIEarDetails);
  const [rightCI, setRightCI] = useState<CIEarDetails>(initialCIEarDetails);

  // General survey state
  const [colorBlind, setColorBlind] = useState<ColorBlindType>("");
  const [currentAge, setCurrentAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [genderOther, setGenderOther] = useState<string>("");
  const [hasMusicalTraining, setHasMusicalTraining] = useState<string>("");
  const [instrument, setInstrument] = useState<string>("");
  const [trainingStartAge, setTrainingStartAge] = useState<string>("");
  const [trainingEndAge, setTrainingEndAge] = useState<string>("");
  const [trainingAdditionalComments, setTrainingAdditionalComments] = useState<string>("");
  const [listenFrequency, setListenFrequency] = useState<string>("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [genreOther, setGenreOther] = useState<string>("");

  const leftIsCI = hasCIForAtLeastOneYear === "yes" && leftEarStatus === "ci";
  const rightIsCI = hasCIForAtLeastOneYear === "yes" && rightEarStatus === "ci";

  const updateLeftCI = (field: keyof CIEarDetails, value: string) => {
    setLeftCI((prev) => ({ ...prev, [field]: value }));
  };

  const updateRightCI = (field: keyof CIEarDetails, value: string) => {
    setRightCI((prev) => ({ ...prev, [field]: value }));
  };

  const copyLeftToRight = () => {
    setRightCI({ ...leftCI });
  };

  // Determine study ear and study condition based on hearing profile
  let studyEar = "Undetermined";
  let studyCondition: "cochlear_implant" | "normal_hearing" | "ineligible" | "undetermined" = "undetermined";
  let studyNotice: string | null = null;

  if (hasCIForAtLeastOneYear === "yes") {
    if (leftIsCI && rightIsCI) {
      studyEar = "Bilateral Cochlear Implants (Both ears)";
      studyCondition = "cochlear_implant";
      studyNotice = "Study assignment: You will participate using your cochlear implants.";
    } else if (leftIsCI) {
      studyEar = "Left Ear (Cochlear Implant)";
      studyCondition = "cochlear_implant";
      studyNotice = "Study assignment: You will participate using your Left ear (cochlear implant).";
    } else if (rightIsCI) {
      studyEar = "Right Ear (Cochlear Implant)";
      studyCondition = "cochlear_implant";
      studyNotice = "Study assignment: You will participate using your Right ear (cochlear implant).";
    }
  } else if (hasCIForAtLeastOneYear === "no") {
    const leftNormal = leftEarStatus === "normal";
    const rightNormal = rightEarStatus === "normal";
    if (leftNormal && rightNormal) {
      studyEar = "Bilateral Normal Hearing";
      studyCondition = "normal_hearing";
      studyNotice = "Study assignment: You will participate using your normal hearing ears with the vocoder simulation.";
    } else if (leftNormal) {
      studyEar = "Left Ear (Normal Hearing)";
      studyCondition = "normal_hearing";
      studyNotice = "Study assignment: You will participate using your normal hearing Left ear with the vocoder simulation.";
    } else if (rightNormal) {
      studyEar = "Right Ear (Normal Hearing)";
      studyCondition = "normal_hearing";
      studyNotice = "Study assignment: You will participate using your normal hearing Right ear with the vocoder simulation.";
    } else if (leftEarStatus && rightEarStatus) {
      studyEar = "None (Ineligible)";
      studyCondition = "ineligible";
      studyNotice = "Study notice: To be eligible for this study, participants must either have a cochlear implant for at least one year or an ear with normal hearing.";
    }
  }

  // Determine relationship between musical training and hearing loss onset
  const ciOnsetAges: number[] = [];
  if (leftIsCI) {
    if (leftCI.ageStartedNeedingCI) ciOnsetAges.push(Number(leftCI.ageStartedNeedingCI));
    if (leftCI.ageReceivedCI) ciOnsetAges.push(Number(leftCI.ageReceivedCI));
  }
  if (rightIsCI) {
    if (rightCI.ageStartedNeedingCI) ciOnsetAges.push(Number(rightCI.ageStartedNeedingCI));
    if (rightCI.ageReceivedCI) ciOnsetAges.push(Number(rightCI.ageReceivedCI));
  }

  const validAges = ciOnsetAges.filter((a) => !isNaN(a) && a > 0);
  const earliestLossAge = validAges.length > 0 ? Math.min(...validAges) : null;

  let trainingTimingCode: "before" | "after" | "spanned" | "unknown" = "unknown";

  const startAgeNum = Number(trainingStartAge);
  const endAgeNum = Number(trainingEndAge);
  if (hasMusicalTraining === "yes" && !isNaN(startAgeNum) && !isNaN(endAgeNum) && startAgeNum > 0 && endAgeNum >= startAgeNum) {
    if (earliestLossAge !== null) {
      if (endAgeNum <= earliestLossAge) {
        trainingTimingCode = "before";
      } else if (startAgeNum >= earliestLossAge) {
        trainingTimingCode = "after";
      } else {
        trainingTimingCode = "spanned";
      }
    }
  }

  const toggleGenre = (genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const surveyData = {
      exportedAt: new Date().toISOString(),
      surveyVersion: "2.0",
      studyCondition,
      hearingProfile: {
        studyEar,
        leftEar: {
          status: leftEarStatus,
          ...(leftIsCI ? { ciDetails: leftCI } : {}),
        },
        rightEar: {
          status: rightEarStatus,
          ...(rightIsCI ? { ciDetails: rightCI } : {}),
        },
        additionalComments: hearingAdditionalComments,
      },
      participantInfo: {
        currentAge: currentAge ? Number(currentAge) : null,
        gender: gender === "self_describe" ? genderOther : gender,
        colorBlindType: colorBlind,
      },
      musicalExperience: {
        hasMusicalTraining: hasMusicalTraining === "yes",
        instrument: hasMusicalTraining === "yes" ? instrument : null,
        trainingStartAge: hasMusicalTraining === "yes" && trainingStartAge ? Number(trainingStartAge) : null,
        trainingEndAge: hasMusicalTraining === "yes" && trainingEndAge ? Number(trainingEndAge) : null,
        trainingTimingRelativeToHearingLoss: trainingTimingCode,
        trainingAdditionalComments,
        listeningFrequency: listenFrequency,
        genres: selectedGenres.concat(genreOther ? [`Other: ${genreOther}`] : []),
      },
    } satisfies SurveyData;

    downloadJson("chromatone-survey.json", surveyData);
    setSaved(true);
  };

  const renderCIEarFields = (
    sideLabel: "Left" | "Right",
    details: CIEarDetails,
    update: (field: keyof CIEarDetails, val: string) => void
  ) => {
    return (
      <div className="ear-block">
        <div className="ear-header">
          <span>{sideLabel} Ear</span>
        </div>

        <label>
          What <b>manufacturer of cochlear implant</b> do you use?
          <select
            value={details.manufacturer}
            onChange={(e) => update("manufacturer", e.target.value)}
            required
          >
            <option value="" disabled>
              Select manufacturer of cochlear implant
            </option>
            <option value="cochlear">Cochlear</option>
            <option value="medel">MED-EL</option>
            <option value="advanced_bionics">Advanced Bionics</option>
            <option value="oticon_medical">Oticon Medical</option>
            <option value="other">Other (specify)</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        {details.manufacturer === "other" && (
          <label>
            Please specify manufacturer name
            <input
              type="text"
              value={details.manufacturerOther}
              onChange={(e) => update("manufacturerOther", e.target.value)}
              placeholder="Manufacturer"
              required
            />
          </label>
        )}
        <label>
          What <b>internal implant</b> do you have in the {sideLabel.toLowerCase()} ear? Write "unknown" if unsure.
          <input
            type="text"
            value={details.internalImplant}
            onChange={(e) => update("internalImplant", e.target.value)}
            placeholder="e.g. Nucleus CI612, Sonata, HiRes Ultra 3D"
            required
          />
        </label>

        <label>
          What <b>external audio processor</b> do you use on the {sideLabel.toLowerCase()} ear? Write "unknown" if unsure.
          <input
            type="text"
            value={details.audioProcessor}
            onChange={(e) => update("audioProcessor", e.target.value)}
            placeholder="e.g. Nucleus 8, Kanso 2, Sonnet 2, Rondo 3, Naida CI M90"
            required
          />
        </label>

        <label>
          Is the audio processor <b>behind-the-ear</b> or <b>off-the-ear</b>?
          <select
            value={details.processorPlacement}
            onChange={(e) => update("processorPlacement", e.target.value)}
            required
          >
            <option value="" disabled>
              Select processor placement
            </option>
            <option value="behind_the_ear">Behind-the-ear (BTE)</option>
            <option value="off_the_ear">Off-the-ear (OTE / single-unit)</option>
            <option value="other">Other / Body-worn</option>
          </select>
        </label>

        <label>
          How much <b>normal hearing</b> have you retained in the {sideLabel.toLowerCase()} ear?
          <select
            value={details.retainedHearing}
            onChange={(e) => update("retainedHearing", e.target.value)}
            required
          >
            <option value="" disabled>
              Select retained hearing level
            </option>
            <option value="none">None (profound loss / no residual acoustic hearing)</option>
            <option value="minimal">Minimal residual hearing (low frequencies only)</option>
            <option value="moderate">Moderate residual hearing</option>
            <option value="significant">Significant residual hearing (e.g. EAS / hybrid acoustic-electric)</option>
            <option value="unknown">Not sure / not tested</option>
          </select>
        </label>

        <label>
          What is the <b>cause</b> of your hearing difficulty for the {sideLabel.toLowerCase()} ear?
          <select
            value={details.hearingLossCause}
            onChange={(e) => update("hearingLossCause", e.target.value)}
            required
          >
            <option value="" disabled>
              Select cause
            </option>
            <optgroup label="Degenerative conditions">
              <option value="presbycusis">Presbycusis</option>
              <option value="menieres_disease">Menieres Disease</option>
              <option value="otosclerosis">Otosclerosis</option>
            </optgroup>
            <optgroup label="Congenital and infectious">
              <option value="congenital_cytomegalovirus">Congenital Cytomegalovirus</option>
              <option value="bacterial_meningitis">Bacterial Meningitis</option>
              <option value="maternal_rubella">Maternal Rubella</option>
              <option value="autoimmune_inner_ear_disease">Autoimmune Inner Ear Disease</option>
            </optgroup>
            <optgroup label="Genetic">
              <option value="gjb2_connexin_26">GJB2-Related (Connexin 26)</option>
              <option value="slc26a4_evas">SLC26A4-Related (EVAS)</option>
              <option value="usher_syndrome">Usher Syndrome</option>
              <option value="waardenburg_syndrome">Waardenburg Syndrome</option>
            </optgroup>
            <optgroup label="Toxicity / Trauma">
              <option value="ototoxicity">Ototoxicity</option>
              <option value="acoustic_trauma">Acoustic trauma</option>
              <option value="head_trauma">Head trauma</option>
            </optgroup>
            <optgroup label="Other / Unknown">
              <option value="other">Other (specify)</option>
              <option value="unknown">Unknown / Idiopathic</option>
            </optgroup>
          </select>
        </label>
        {details.hearingLossCause === "other" && (
          <label>
            Please specify cause of hearing difficulty
            <input
              type="text"
              value={details.causeOther}
              onChange={(e) => update("causeOther", e.target.value)}
              placeholder="Describe condition"
              required
            />
          </label>
        )}

        <div className="form-row">
          <label>
            Age when you <b>had severe to profound hearing loss</b> in the {sideLabel.toLowerCase()} ear
            <span className="field-hint">Approximation is okay for progressive conditions. Enter 0 if since birth.</span>
            <input
              type="number"
              min="0"
              max="120"
              value={details.ageStartedNeedingCI}
              onChange={(e) => update("ageStartedNeedingCI", e.target.value)}
              required
            />
          </label>
          <label>
            Age when you <b>received</b> the implant in the {sideLabel.toLowerCase()} ear
            <span className="field-hint">Needed to compare to music history.</span>
            <input
              type="number"
              min="0"
              max="120"
              value={details.ageReceivedCI}
              onChange={(e) => update("ageReceivedCI", e.target.value)}
              required
            />
          </label>
        </div>
      </div>
    );
  };

  return (
    <section className="page-section narrow">
      <form className="data-form" onSubmit={submit}>
        <fieldset>
          <legend>Hearing Profile</legend>

          <label>
            Do you have a <b>cochlear implant that you have had for at least one year</b>?
            <select
              value={hasCIForAtLeastOneYear}
              onChange={(e) => {
                setHasCIForAtLeastOneYear(e.target.value);
                setLeftEarStatus("");
                setRightEarStatus("");
              }}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="yes">Yes, I have had a cochlear implant for at least one year</option>
              <option value="no">No</option>
            </select>
          </label>

          {hasCIForAtLeastOneYear && (
            <div className="form-row">
              <label>
                <b>Left</b> ear hearing status
                <select
                  value={leftEarStatus}
                  onChange={(e) => setLeftEarStatus(e.target.value as HearingStatus)}
                  required
                >
                  <option value="" disabled>
                    Select left ear status
                  </option>
                  <option value="ci">Cochlear implant</option>
                  <option value="normal">Normal hearing</option>
                  <option value="impaired">Impaired hearing (unaided)</option>
                  <option value="hearing_aid">Hearing aid</option>
                </select>
              </label>

              <label>
                <b>Right</b> ear hearing status
                <select
                  value={rightEarStatus}
                  onChange={(e) => setRightEarStatus(e.target.value as HearingStatus)}
                  required
                >
                  <option value="" disabled>
                    Select right ear status
                  </option>
                  <option value="ci">Cochlear implant</option>
                  <option value="normal">Normal hearing</option>
                  <option value="impaired">Impaired hearing (unaided)</option>
                  <option value="hearing_aid">Hearing aid</option>
                </select>
              </label>
            </div>
          )}

          {studyNotice && (
            <div className="timing-badge" style={{ marginTop: "8px", display: "block" }}>
              {studyNotice}
            </div>
          )}

          {hasCIForAtLeastOneYear === "yes" && leftEarStatus && rightEarStatus && !leftIsCI && !rightIsCI && (
            <p className="field-hint" style={{ color: "#ef8a5b" }}>
              Note: You indicated you have a cochlear implant for at least one year. Please specify which ear (or both) has a cochlear implant above.
            </p>
          )}

          {leftIsCI && hasCIForAtLeastOneYear === "yes" && renderCIEarFields("Left", leftCI, updateLeftCI)}
          {rightIsCI && hasCIForAtLeastOneYear === "yes" && renderCIEarFields("Right", rightCI, updateRightCI)}

          {leftEarStatus && rightEarStatus && (
            <label className="form-row">
              Additional comments about your hearing status
              <span className="field-hint">
                Please describe any hearing-related details that are not captured by this survey.
              </span>
              <textarea
                value={hearingAdditionalComments}
                onChange={(e) => setHearingAdditionalComments(e.target.value)}
                rows={4}
                placeholder=""
              />
            </label>
          )}

          {studyCondition === "ineligible" && (
            <div className="warning-banner" role="alert">
              <strong>Participant Eligibility Notice:</strong> To participate in this study, you must either have either had a cochlear implant for at least one year or have an ear with normal hearing.
            </div>
          )}
        </fieldset>

        <fieldset>
          <legend>Demographic Information</legend>

          <label>
            Are you color blind?
            <select
              value={colorBlind}
              onChange={(e) => setColorBlind(e.target.value as any)}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="no">No (standard color vision)</option>
              <option value="red_green">Yes -- Red-Green (Deuteranopia / Protanopia)</option>
              <option value="blue_yellow">Yes -- Blue-Yellow (Tritanopia)</option>
              <option value="total">Yes -- Total color blindness (Achromatopsia)</option>
              <option value="not_sure">Not sure</option>
            </select>
          </label>

          <div className="form-row">
            <label>
              What is your current <b>age</b>?
              <input
                type="number"
                min="1"
                max="120"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                placeholder=""
                required
              />
            </label>

            <label>
              What is your <b>gender</b>?
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="non_binary">Non-binary</option>
                <option value="self_describe">Prefer to self-describe</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
            </label>
          </div>

          {gender === "self_describe" && (
            <label>
              Please describe your gender
              <input
                type="text"
                value={genderOther}
                onChange={(e) => setGenderOther(e.target.value)}
                placeholder="Your self-description"
                required
              />
            </label>
          )}
        </fieldset>

        <fieldset>
          <legend>Musical Experience</legend>

          <label>
            Do you have a background of <b>musical training</b> beyond standard secondary school education?
            <select
              value={hasMusicalTraining}
              onChange={(e) => setHasMusicalTraining(e.target.value)}
              required
            >
              <option value="" disabled>
                Select one
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>

          {hasMusicalTraining === "yes" && (
            <>
              <label>
                What <b>instrument(s)</b> did or do you play?
                <input
                  type="text"
                  value={instrument}
                  onChange={(e) => setInstrument(e.target.value)}
                  placeholder="e.g. Piano, violin, voice, guitar"
                  required
                />
              </label>

              <div className="form-row">
                <label>
                  <b>Starting age</b> of musical training
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={trainingStartAge}
                    onChange={(e) => setTrainingStartAge(e.target.value)}
                    placeholder="e.g. 7"
                    required
                  />
                </label>

                <label>
                  <b>Ending age</b> of musical training
                  <input
                    type="number"
                    min="1"
                    max="120"
                    value={trainingEndAge}
                    onChange={(e) => setTrainingEndAge(e.target.value)}
                    placeholder="Use current age if training is ongoing"
                    required
                  />
                </label>
              </div>

              <label>
                Additional comments about your musical training
                <span className="field-hint">
                  If the above questions do not capture your musical training experience, please describe multiple periods of training, breaks, or how your training relates to the timeline of your hearing loss.
                </span>
                <textarea
                  value={trainingAdditionalComments}
                  onChange={(e) => setTrainingAdditionalComments(e.target.value)}
                  rows={4}
                  placeholder=""
                />
              </label>

            </>
          )}

          <label style={{ marginTop: "20px" }}>
            <b>How often</b> do you listen to music?
            <select
              value={listenFrequency}
              onChange={(e) => setListenFrequency(e.target.value)}
              required
            >
              <option value="" disabled>
                Select listening frequency
              </option>
              <option value="daily_multiple_hours">Daily (multiple hours)</option>
              <option value="daily_under_hour">Daily (up to 1 hour)</option>
              <option value="several_times_a_week">Several times a week</option>
              <option value="once_or_twice_a_week">Once or twice a week</option>
              <option value="rarely">Rarely</option>
              <option value="never">Never</option>
            </select>
          </label>

          <label>
            What <b>genres</b> of music have you listened to recently? (select all that apply)
            <div className="checkbox-grid">
              {MUSIC_GENRES.map((genre) => (
                <label key={genre} className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={selectedGenres.includes(genre)}
                    onChange={() => toggleGenre(genre)}
                  />
                  <span>{genre}</span>
                </label>
              ))}
            </div>
          </label>

          <label>
            Other genre(s)
            <input
              type="text"
              value={genreOther}
              onChange={(e) => setGenreOther(e.target.value)}
              placeholder="e.g. Opera, Video Game OST, Reggae"
            />
          </label>
        </fieldset>

        <button className="primary-button" type="submit">
          Download survey JSON
        </button>

        {saved && (
          <p className="success-message">
            Your survey JSON has been downloaded successfully.
          </p>
        )}
      </form>
    </section>
  );
}
