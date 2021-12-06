import classes from "../styles/Search.module.css";

export default function Search() {
  return (
    <section id={classes.showcase}>
      <div className="container text-center p-5">
        <div className={`${classes.overlay} p-5`}>
          <h1 className="display-4 mb-4">
            Property Searching Just Got So Easy
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae
            quas, asperiores eveniet vel nostrum magnam voluptatum tempore!
            Consectetur, id commodi!
          </p>
          <div className="search">
            <form action="/SearchedProducts">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="sr-only">Keywords</label>
                  <input
                    type="text"
                    name="keywords"
                    className="form-control"
                    placeholder="Keyword (Pool, Garage, etc)"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="sr-only">State</label>
                  <select name="state" className="form-control">
                    <option selected="true" disabled="disabled">
                      City (All)
                    </option>
                    <option value="AL">Dhaka</option>
                    <option value="AK">Chattogram</option>
                    <option value="AZ">Chandpur</option>
                    <option value="AR">Sylhet</option>
                    <option value="CA">Rajshahi</option>
                    <option value="CO">Barisal</option>
                  </select>
                </div>
                <div className="col-md-4 mb-3">
                  <select name="price" className="form-control" id="type">
                    <option selected="true" disabled="disabled">
                      Max Price (Any)
                    </option>
                    <option value="100000">$100,000</option>
                    <option value="200000">$200,000</option>
                    <option value="300000">$300,000</option>
                    <option value="400000">$400,000</option>
                    <option value="500000">$500,000</option>
                    <option value="1000000">$1M+</option>
                  </select>
                </div>
              </div>

              <div class="d-grid gap-2">
                <button class="btn btn-success btn-block mt-2" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
