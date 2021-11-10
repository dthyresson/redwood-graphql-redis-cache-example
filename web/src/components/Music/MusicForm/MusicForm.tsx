import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const MusicForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.music?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="artistFamiliarity"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist familiarity
        </Label>
        <TextField
          name="artistFamiliarity"
          defaultValue={props.music?.artistFamiliarity}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistFamiliarity" className="rw-field-error" />

        <Label
          name="artistHotttnesss"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist hotttnesss
        </Label>
        <TextField
          name="artistHotttnesss"
          defaultValue={props.music?.artistHotttnesss}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistHotttnesss" className="rw-field-error" />

        <Label
          name="artistId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist id
        </Label>
        <TextField
          name="artistId"
          defaultValue={props.music?.artistId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="artistId" className="rw-field-error" />

        <Label
          name="artistLatitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist latitude
        </Label>
        <TextField
          name="artistLatitude"
          defaultValue={props.music?.artistLatitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistLatitude" className="rw-field-error" />

        <Label
          name="artistLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist location
        </Label>
        <NumberField
          name="artistLocation"
          defaultValue={props.music?.artistLocation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="artistLocation" className="rw-field-error" />

        <Label
          name="artistLongitude"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist longitude
        </Label>
        <TextField
          name="artistLongitude"
          defaultValue={props.music?.artistLongitude}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistLongitude" className="rw-field-error" />

        <Label
          name="artistName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist name
        </Label>
        <TextField
          name="artistName"
          defaultValue={props.music?.artistName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="artistName" className="rw-field-error" />

        <Label
          name="artistSimilar"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist similar
        </Label>
        <TextField
          name="artistSimilar"
          defaultValue={props.music?.artistSimilar}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistSimilar" className="rw-field-error" />

        <Label
          name="artistTerms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist terms
        </Label>
        <TextField
          name="artistTerms"
          defaultValue={props.music?.artistTerms}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="artistTerms" className="rw-field-error" />

        <Label
          name="artistTermsFreq"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Artist terms freq
        </Label>
        <TextField
          name="artistTermsFreq"
          defaultValue={props.music?.artistTermsFreq}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="artistTermsFreq" className="rw-field-error" />

        <Label
          name="releaseId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Release id
        </Label>
        <NumberField
          name="releaseId"
          defaultValue={props.music?.releaseId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="releaseId" className="rw-field-error" />

        <Label
          name="releaseName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Release name
        </Label>
        <NumberField
          name="releaseName"
          defaultValue={props.music?.releaseName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="releaseName" className="rw-field-error" />

        <Label
          name="songArtistMbtags"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song artist mbtags
        </Label>
        <TextField
          name="songArtistMbtags"
          defaultValue={props.music?.songArtistMbtags}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songArtistMbtags" className="rw-field-error" />

        <Label
          name="songArtistMbtagsCount"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song artist mbtags count
        </Label>
        <TextField
          name="songArtistMbtagsCount"
          defaultValue={props.music?.songArtistMbtagsCount}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songArtistMbtagsCount" className="rw-field-error" />

        <Label
          name="songBarsConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song bars confidence
        </Label>
        <TextField
          name="songBarsConfidence"
          defaultValue={props.music?.songBarsConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songBarsConfidence" className="rw-field-error" />

        <Label
          name="songBarsStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song bars start
        </Label>
        <TextField
          name="songBarsStart"
          defaultValue={props.music?.songBarsStart}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songBarsStart" className="rw-field-error" />

        <Label
          name="songBeatsConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song beats confidence
        </Label>
        <TextField
          name="songBeatsConfidence"
          defaultValue={props.music?.songBeatsConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songBeatsConfidence" className="rw-field-error" />

        <Label
          name="songBeatsStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song beats start
        </Label>
        <TextField
          name="songBeatsStart"
          defaultValue={props.music?.songBeatsStart}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songBeatsStart" className="rw-field-error" />

        <Label
          name="songDuration"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song duration
        </Label>
        <TextField
          name="songDuration"
          defaultValue={props.music?.songDuration}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songDuration" className="rw-field-error" />

        <Label
          name="songEndOfFadeIn"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song end of fade in
        </Label>
        <TextField
          name="songEndOfFadeIn"
          defaultValue={props.music?.songEndOfFadeIn}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songEndOfFadeIn" className="rw-field-error" />

        <Label
          name="songHotttnesss"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song hotttnesss
        </Label>
        <TextField
          name="songHotttnesss"
          defaultValue={props.music?.songHotttnesss}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songHotttnesss" className="rw-field-error" />

        <Label
          name="songId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song id
        </Label>
        <TextField
          name="songId"
          defaultValue={props.music?.songId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="songId" className="rw-field-error" />

        <Label
          name="songKey"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song key
        </Label>
        <TextField
          name="songKey"
          defaultValue={props.music?.songKey}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songKey" className="rw-field-error" />

        <Label
          name="songKeyConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song key confidence
        </Label>
        <TextField
          name="songKeyConfidence"
          defaultValue={props.music?.songKeyConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songKeyConfidence" className="rw-field-error" />

        <Label
          name="songLoudness"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song loudness
        </Label>
        <TextField
          name="songLoudness"
          defaultValue={props.music?.songLoudness}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songLoudness" className="rw-field-error" />

        <Label
          name="songMode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song mode
        </Label>
        <NumberField
          name="songMode"
          defaultValue={props.music?.songMode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="songMode" className="rw-field-error" />

        <Label
          name="songModeConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song mode confidence
        </Label>
        <TextField
          name="songModeConfidence"
          defaultValue={props.music?.songModeConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songModeConfidence" className="rw-field-error" />

        <Label
          name="songStartOfFadeOut"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song start of fade out
        </Label>
        <TextField
          name="songStartOfFadeOut"
          defaultValue={props.music?.songStartOfFadeOut}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songStartOfFadeOut" className="rw-field-error" />

        <Label
          name="songTatumsConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song tatums confidence
        </Label>
        <TextField
          name="songTatumsConfidence"
          defaultValue={props.music?.songTatumsConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songTatumsConfidence" className="rw-field-error" />

        <Label
          name="songTatumsStart"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song tatums start
        </Label>
        <TextField
          name="songTatumsStart"
          defaultValue={props.music?.songTatumsStart}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songTatumsStart" className="rw-field-error" />

        <Label
          name="songTempo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song tempo
        </Label>
        <TextField
          name="songTempo"
          defaultValue={props.music?.songTempo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songTempo" className="rw-field-error" />

        <Label
          name="songTimeSignature"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song time signature
        </Label>
        <TextField
          name="songTimeSignature"
          defaultValue={props.music?.songTimeSignature}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songTimeSignature" className="rw-field-error" />

        <Label
          name="songTimeSignatureConfidence"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song time signature confidence
        </Label>
        <TextField
          name="songTimeSignatureConfidence"
          defaultValue={props.music?.songTimeSignatureConfidence}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ valueAsNumber: true, required: true }}
        />
        <FieldError name="songTimeSignatureConfidence" className="rw-field-error" />

        <Label
          name="songTitle"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song title
        </Label>
        <NumberField
          name="songTitle"
          defaultValue={props.music?.songTitle}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="songTitle" className="rw-field-error" />

        <Label
          name="songYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Song year
        </Label>
        <NumberField
          name="songYear"
          defaultValue={props.music?.songYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="songYear" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MusicForm
