import { connect } from "react-redux";
import { getWeather } from "../../store/actions/weatherActions";
import WeatherView from "./WeatherView";
import selector from "../../selectors/weatherSelector";

const mapStateToProps = state => ({
  weather: selector(state),
  isLoading: state.isLoading,
  error: state.error
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getWeather() {
    dispatch(getWeather(ownProps.city));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(WeatherView);
