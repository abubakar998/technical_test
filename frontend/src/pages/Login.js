export default function Login() {
  return (
    <section id="login" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h4>
                  <i className="fas fa-sign-in-alt"></i> Login
                </h4>
              </div>
              <div className="card-body">
                <form action="index.html">
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control mt-1"
                      required
                    />
                  </div>

                  <div className="form-group py-3">
                    <label for="password2">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control mt-1 "
                      required
                    />
                  </div>

                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">
                      Button
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}