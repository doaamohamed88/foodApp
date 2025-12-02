import AppModal from "../../componets/modals/AppModal";
import Button from "../../componets/ui/Button";
import useCheckoutForm from "../../hooks/useCheckoutForm";
import styles from "../../componets/modals/modal.module.css"
const Checkout = () => {
const {formik,closeModal}=useCheckoutForm()
  return (
    <AppModal title={"Checkout"}>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name && (
          <p className={styles.error}>{formik.errors.name}</p>
        )}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles.error}>{formik.errors.email}</p>
        )}

        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.street}
        />
        {formik.touched.street && formik.errors.street && (
          <p className={styles.error}>{formik.errors.street}</p>
        )}

        <div className={styles.row}>
          <div >
            <label htmlFor="postcode">Postcode</label>
            <input
              id="postcode"
              name="postcode"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.postcode}
            />
            {formik.touched.postcode && formik.errors.postcode && (
              <p className={styles.error}>{formik.errors.postcode}</p>
            )}
          </div>

          <div>
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && (
              <p className={styles.error}>{formik.errors.city}</p>
            )}
          </div>
        </div>

        <div  className={styles.actions}>
        <Button onClick={closeModal} varient="close">Close</Button>
        <Button type="submit"  varient="submit">
          submit
        </Button>
        </div>
      </form>
    </AppModal>
  );
};

export default Checkout;
