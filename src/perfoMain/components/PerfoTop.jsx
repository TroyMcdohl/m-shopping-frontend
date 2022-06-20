import { motion } from "framer-motion";
import "./perfoTop.css";

const PerfoTop = () => {
  return (
    <motion.div className="perfo_top_container">
      <div className="perfo_top_wrapper">
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          className="perfo_top_left"
        >
          <div className="perfo_top_left_caption">
            <h4 className="perfo_top_left_title">
              I' am
              <div className="perfo_top_left_title_varies">
                <span className="perfo_top_left_title_vary">MERN</span>
                <span className="perfo_top_left_title_vary">MongoDb</span>
                <span className="perfo_top_left_title_vary">Express</span>
                <span className="perfo_top_left_title_vary">React</span>
                <span className="perfo_top_left_title_vary">Node</span>
              </div>
              Stack Developer
            </h4>
          </div>
          <div className="perfo_top_left_des">
            <p className="perfo_top_left_para">
              Hello I am Thar Nyi Kaung Set(Troy Mcdohl).I was studying in UCSY
              for a year.And then I started to learn my self to be mern stack
              developer.I study some of them from my sch and Udemy Courses.I
              will do my best if You give me a project.That's my few
              detail,thanks for reading.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="perfo_top_right"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <div className="perfo_top_right_photo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADdCAMAAABzPkXkAAAASFBMVEX39/eenp7d3d3HxcWZmZn7+/vf39+YmJjb29vz8/OioqKtra3Nzc2ysrLJx8fv7++/v7+np6fo6OjS0tK4uLi7u7vq6uqSkpIcO13aAAAJiUlEQVR4nO2d6ZqsKAyGXVjcqyytOvd/p4PigoBVgKixx+/HzJzz9ChvJyQRxATBrVu3bt26devWrR31eKQBZjp7HHsKk38UhXVZRenfA52AcB72QojmTfp3OJlzpq9k/EODwkkIvV9/gxNjEueIDjT4Ey6EaPu5PidOq4xNQ0pGlCyURZ/BtTlx+qS9g+aDJdNagWT2zMiFMTEuEJ+EqOkx8Eu1JDdnfFlM/KnHQIM6Y+GgQnpI9gPl2aN1lBhM0YuF2SJbhWQ/UV8yqeCYCgxxkdMvjJ2yx/Uw8ZuKCOgHYo+Znj1oW+HWAEtWffaoLYWfDpAhai9V2eKC/mbSiZbJZTgXpaotZ3YNTvzJ3SGZUH6BAp7VO1sYe3tW4DFLxym5NCfoEoFV45st2WNmgB/H8GOlGncQXMx0G2R5CUy8Kbiitl38GWjB51bwzFQkX1LnEI2Jk03RNUuItI6ACoiYWxhRnRCZMqSfs5EUbfFXFD4JiYgSu+D57MfVXxGqnxGJIg0lTYBhmjxQol78v7NOdV2X76ohHaOOMqyBUX6+QTK0LC/fcVU0TZMkCYeaFEVrlDQChYnj9eU5lD+LhBCFSpYSfZhKWJSrjHUcfSFbUOaa//1xNpkgHOlNierGCJBTlpoLQMqZ+K2lRE9zRkbZai4BKf6sOGxjwcgodRmXAqpmX7pkyWo2G8iI6FYZEJyUqV0FqSM7yIgkOsonHErNjLKG1CZMSFUeVjNdZg+pDbIhAkMZqK5mOSc5pa60oGAyplKpo8IBMiK61WoKZXUWE2l0qHWB1Nd4YIKssmOQOTHqM+awWX++5ESCYjdTanMJmBpPfiDJHCG1BTuCsp0gLYaw6tWZUi0vEJTXR2RKlywyYirxBypl7g4ZEeVlGaCUzrFHb0w483JhgC0Oq5mZcGLsYmTuEZZjSsUsnHy5qArKjZSJRAmm9hErvG3TMlJ8FkwdGzzEl9HslkF0mIsFbEBLIuIvf1Pw4ZiLfVAopgywEDE2Bh+OKaQTQGsFQiFb+6AUItAbDqXwLLExxA6Yk3OASZfBIvy8vVBOzgEmkTDhafVtwwOJSDllYEj70fNSpduKzzoloCU8ofrxTQlpnyR4TZSbi4IFJaCldSY8Rwu/lFBq9V6PacEm8QApUIKpYple8xqjH8qpYo/glLFBIgzLK2VNyNlskx5RNNZkrgvOK5QtSeDsk8wFto9ifaZEFYleZ9ONerFxvXehZBEbjMuSeVx+KfurnU03qhtYMoYLn5Td3lny+/7HqB9Y7Z+Sl4tAcknaD+y9A2WffEFR8oFt2T5QKPnFIFFG/CU1L0sFAyV/Vk1AUfK9R8e9dj0lf745G2/QQPnsKL0siAzV+pCVzsYblM6/fz8LIpwS8d8YmKpgGFroYf9guFS3KDg4LBjK4b3z3NeCCNOclMDUsQMle8b0syDS/8ZG5weziPfiI2OTyU8Zyxdkh7UVME9ej2FoIa08UbKCcagvwJSxQTqcnWi9QXZ4wzw4G27WAGfzlvpPDdcCE3zGibmLgNR3nVIvK3danY0myqerLgTIYaco61+AHDbYzZigTMmMuc/MhGXKAO9iTDDV3ah0B0hAFcEo/z4LELKPsx9vfkteMCE7+ZudoL926K3UA5ZClvJWHYCm9BZpwTw7a+WLElg5IMlX+Dmb47s+fiDBZhEuTxMTXGknyY/Lwp6WnjImcIf1lDGhO6wflz2b4bc8uCzowodre5SFsvv8VdvPk5xNYKLNj9Owa9hRWw96nT1+M21LJpeYlZ02GfMiptwWZi9jyk058wK5cpK7z549chu5+iyc97eN5Pg0fZnQw+VYGlwn9PR6uLz4Q5rLUdpjkiS+GmVU2Z74YpDXo0xiW8jqgpSkqGy+FtdZ8oKUURRbOC2HvCAlaeLYNAR1P3tNSuazcVyYvLVGoiIeKCFvWyri27UdpoHXjobsVFyi00wvnJbDe59VN/DvnH1sHVTVtIba5UEWJiEaz5X0BN3Hq1cQSVLMhmSU0I5CrwpXdD49MxiqaDSvlbK/aapYVNWdSaHt2QQmaunijNDIUTTJ+B1y/u9EQhwpL9BzD6e5fBJKmHbDV+XZPwuFcKYMwwzS0XZV+DE0RhQoSaED0qqaPggA+U2YuXGQeKpNzBSmlAguptBad3F2T0wWhpTQWiDMEvsHSycUDc0pUELFXPS5ks9hLvOiCSVQp130uVJPmxI1cXynhPURkVGL72hqztSyGuAnpfT5RnBNXHGJflD2nN/tKVNC6+klN0daOR9Nvs9PmRJYTy+le+n6KXBmUH3h00luNYBaQJiYyN+V/3rWnVlUqfGqqit0lR4BFM738HCqfHT613cLhoK9K2l5w6T+Lxr5MqHQ5/5UYfZ0r/mAuOkBabGpkO7b+V2gPXn9gN3/0zy1nT2R/VlMUuouxB7E2uZ1Fim776N5Z3StrbftoX6yAtlfi4Zt8zmclN3wVdWrhHxopdWqc/Sjeyai2ZMEx4GyO5FnZtCaPTPfESKNQR9Udss2OQYUY4ZIzRokotbsEDEh+lZZukseAMqiTWyK2I8pM1h2JqTIbNpKdo0k9+PEOG1qC0Q+pPyX25LGup8tm6PVYxdQ5qlvg7moGVL7bdmZRAY9JXVXRSXzXN+Mgb0ZpwGF653oSBU690BFfg3KMuPTfTAhn556Q67nSKProvbliZOlxtbVjPN4dNHWKH38EM0TD5wYR7mHBvR9F2HFWz01fW82TlCMk9oHYye5u6C2R6KT2ITYwIlx440xlDH9QYZdgHPl9GlHLvGTgNp2cxuEQie/xS8v83Exkvk7ctpmlxuvnll/gR6nPh1qGsiYUOReK35ES7uNbJxsyo/rGk2pawLpQTZtE3Da+nbWcRQt2clfxxsYv5eAidUjgt0o+jirX+DxdAez9xK0XWa9jaH7YKGncmBF1OR7+/i5k7dyZTubMuwe9n7nlG318+8hVGS/WTneI/v1+oX1E62tSrJXgBWUfd0twztbslP/Ecq99W23bKUfu1ehZm+H7VWvQ8o7V3sIxXtUVept1nbLsLYdu3e1mk7hO4iu5c19A/yoXN072kVIe85o12pAUHbML3PFZ9Njbh5m2xd7zKRrt3iUKQ+Uxpj4qF/xcUJq0jwmwB4q9fHkDzqsxmWPKHsOl9LZDe9fQh8vpUsfPihXHyp6U/4Z3ZR/Rzfl39FN+Xf0f6Xs3h38a/qnUJL9OjacJnXbFv9FyZC3bt26devWrVu3bt2Cpv8AsJSzwcAWJcMAAAAASUVORK5CYII="
              alt=""
              className="perfo_top_right_img"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PerfoTop;
