import React, { useState } from "react";
import DatePicker from "react-date-picker";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetProductReport } from "../redux/thunks/reporteThunk";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const initialValues = {
  startDate: null,
  endDate: null,
};

const formatDateToString = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const ProductReportPage = () => {
  const [formState, setFormState] = useState(initialValues);
  const dispatcher = useDispatch();
  const reportData = useSelector((state) => state.reports.data);

  const updateState = (attrib, value) => {
    setFormState({
      ...formState,
      [attrib]: value,
    });
  };

  const onChangeDateHandler = (attrib) => (value) => {
    if (!value) {
      updateState(attrib, value);
      return;
    }
    updateState(attrib, formatDateToString(value));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatcher(fetchGetProductReport({ ...formState }));
  };

  //if (!reportData || reportData?.length === 0) {
  //  return <div>No se encontraron resultados</div>;
  //}

  return (
    <div style={{ position: "relative" }}>
      <div className="table-title">
        <div className="row">
          <div className="col-6">
            <h2>Reporte de productos mas vendidos en un periodo</h2>
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label className="label">Fecha Inicio</label>
            <DatePicker
              value={formState.startDate}
              onChange={onChangeDateHandler("startDate")}
              format="yyyy-MM-dd"
            />
          </div>
          <div className="form-group">
            <label className="label">Fecha Fin</label>
            <DatePicker
              value={formState.endDate}
              onChange={onChangeDateHandler("endDate")}
              format="yyyy-MM-dd"
            />
          </div>
          <div className="form-group t-align-center">
            <button type="submit" className="button button--primary ">
              Buscar
            </button>
          </div>
        </form>
        <div>
          {!reportData || reportData?.length === 0 ? (
            <div>No se encontraron resultados</div>
          ) : (
            <BarChart
              width={500}
              height={300}
              data={reportData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="nombre" />
              <YAxis dataKey="sumcantidad" />
              <Tooltip />
              <Legend />
              <Bar dataKey="sumcantidad" fill="#8884d8" />
            </BarChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductReportPage;
