import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import $ from "jquery";
import songActions from "../../Store/Actions/songActions";

function CreateSong({ doCreateSong }) {
  const [song, setSong] = useState(null);
  return (
    <div className="row">
      <div className="col-lg-6 col-12 mb-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            doCreateSong({
              song: song,
              songName: document.querySelector("#song_name").value,
            });
          }}
        >
          <input
            type="file"
            name="song"
            id="song"
            onChange={(e) => setSong(e.target.files)}
          />
          <input type="text" name="song_name" id="song_name" />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}
export default connect(
  (state) => {
    return {
      success: state.main.success,
    };
  },
  (dispatch) => {
    return {
      doCreateSong: (payload) => dispatch({ type: songActions.CREATE_SONG, payload }),
    };
  }
)(CreateSong);
