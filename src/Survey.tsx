import { useState } from "react";
import { downloadFormJson } from "./AppRoutes";

export function Survey() {
  const [saved, setSaved] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    downloadFormJson("chromatone-survey.json", event.currentTarget);
    setSaved(true);
  };
  return (
    <section className="page-section narrow">
      <form className="data-form" onSubmit={submit}>
        <fieldset>
          <legend>About you</legend>
          <label>
            Age range
            <select name="ageRange" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Under 18</option>
              <option>18–29</option>
              <option>30–49</option>
              <option>50–69</option>
              <option>70+</option>
              <option>Prefer not to say</option>
            </select>
          </label>
          <label>
            How do you describe your hearing experience?
            <select name="hearingExperience" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Cochlear implant user</option>
              <option>Hearing aid user</option>
              <option>Hard of hearing</option>
              <option>Prefer not to say</option>
            </select>
          </label>
        </fieldset>
        <fieldset>
          <legend>Your musical experience</legend>
          <label>
            Have you studied music before?
            <select name="musicExperience" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>None</option>
              <option>A little</option>
              <option>Some lessons</option>
              <option>Formal training</option>
            </select>
          </label>
          <label>
            How easy is it to recognize emotions in music today?
            <span className="radio-row">
              <label>
                <input
                  type="radio"
                  name="emotionRecognition"
                  value="not-easy"
                  required
                />{" "}
                Not easy
              </label>
              <label>
                <input
                  type="radio"
                  name="emotionRecognition"
                  value="sometimes"
                />{" "}
                Sometimes
              </label>
              <label>
                <input type="radio" name="emotionRecognition" value="easy" />{" "}
                Usually easy
              </label>
            </span>
          </label>
          <label>
            What do you hope to learn?
            <textarea
              name="learningGoal"
              rows={3}
              placeholder="A few words is enough."
            />
          </label>
        </fieldset>
        <button className="primary-button" type="submit">
          Download survey JSON
        </button>
        {saved && <p className="success-message">Your survey JSON is ready.</p>}
      </form>
    </section>
  );
}
