import React from "react";
import {Link} from "react-router";

class Banner extends React.Component {

    // RENDER
	render() {

		return (
            <div id="banner-dialog" className="modal fade">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h3 className="modal-title">Thanks for stopping by!</h3>
                  </div>
                  <div className="modal-body">
                    <p>
                        The <b>Two aboard Tuuli crew</b> created this website in their sparetime for you.
                    </p>
                    <p>
                        If you like it, we would be very pleased if you return the favour and subscribe to our YouTube channel!
                    </p>
					<center className="banner-channel">
						<div className="g-ytsubscribe" data-channelid="UCZbZeC2OfdVMwm9AR_zu0_g" data-layout="full" data-count="default"></div>
					</center>
                  </div>
                </div>
              </div>
            </div>
		);
	}
}

export default Banner;