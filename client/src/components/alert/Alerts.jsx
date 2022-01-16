import React from "react";

const Alerts = (msg, alertShow) => {
	return (
		<div class="position-fixed top-0 start-0 p-3" style={{ "z-index": 300 }}>
			<div
				id="liveToast"
				className={alertShow ? "toast show" : "toast hide"}
				role="alert"
				aria-live="assertive"
				aria-atomic="true"
			>
				<div class="toast-header">
					<img
						src="/images/logo/favicon.png"
						height="20px"
						width="20px"
						class="rounded me-2"
						alt="..."
					/>
					<strong class="me-auto">Alert!</strong>

					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="toast"
						aria-label="Close"
					></button>
				</div>
				<div class="toast-body">{msg}</div>
			</div>
		</div>
	);
};

export default Alerts;
