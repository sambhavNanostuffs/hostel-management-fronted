import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
  UncontrolledCollapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./leftNav.css";

function Carrot({ open }) {
  if (open === true) {
    return <i className="fa fa-caret-up float-right" aria-hidden="true"></i>;
  } else {
    return <i className="fa fa-caret-down float-right"></i>;
  }
}

export default class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      dropdownOpen: false,
      ismealmanageopen: false,
      isstudentmanageopen: false,
      isemployeemanageopen: false,
      issettingsopen: false,
      issetupopen: false,
      isstudentmanagepaymentopen: false,
      isemployeemanagepaymentopen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleManageMeal = this.toggleManageMeal.bind(this);

    this.toggleStudentManage = this.toggleStudentManage.bind(this);
    this.toggleEmployeeManage = this.toggleEmployeeManage.bind(this);

    this.toggleSettings = this.toggleSettings.bind(this);
    this.toggleStudentManagePayment =
      this.toggleStudentManagePayment.bind(this);
    this.toggleEmployeeManagePayment =
      this.toggleEmployeeManagePayment.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleManageMeal() {
    this.setState({ ismealmanageopen: !this.state.ismealmanageopen });
  }

  toggleStudentManage() {
    this.setState({ isstudentmanageopen: !this.state.isstudentmanageopen });
  }

  toggleEmployeeManage() {
    this.setState({ isemployeemanageopen: !this.state.isemployeemanageopen });
  }

  toggleSettings() {
    this.setState({ issettingsopen: !this.state.issettingsopen });
  }

  toggleStudentManagePayment() {
    this.setState({
      isstudentmanagepaymentopen: !this.state.isstudentmanagepaymentopen,
    });
  }

  toggleEmployeeManagePayment() {
    this.setState({
      isemployeemanagepaymentopen: !this.state.isemployeemanagepaymentopen,
    });
  }

  render() {
    return (
      <div className="leftNav">
        <Navbar light expand="md" className="me">
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="flex-column">
              <NavItem>
                <Link className="nav-link" to="/admin/dashboard">
                  <div className="row">
                    <div className="col-2">
                      <i
                        className="fa fa-tachometer-alt"
                        aria-hidden="true"
                      ></i>{" "}
                    </div>
                    <div className="col-8">Dashboard</div>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  id="toggler"
                  onClick={this.toggleManageMeal}
                  className="nav-link"
                  to="/admin/MealManage"
                >
                  {" "}
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-utensils" aria-hidden="true"></i>{" "}
                    </div>
                    <div className="col-8">
                      <span className="navItem">Meal Manage</span>
                    </div>
                    <div className="col-2 mt-1">
                      <Carrot open={this.state.ismealmanageopen} />
                    </div>
                  </div>
                </Link>
              </NavItem>
              <div>
                <UncontrolledCollapse toggler="#toggler">
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/MealManage/add"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Add</div>
                      </div>
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/MealManage/view"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="col-8"> View</div>
                      </div>
                    </Link>
                  </NavItem>
                </UncontrolledCollapse>
              </div>

              <NavItem>
                <Link
                  className="nav-link"
                  id="toggler1"
                  onClick={this.toggleStudentManage}
                  to="/admin/StudentsManage"
                >
                  {" "}
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-child" aria-hidden="true"></i>
                    </div>
                    <div className="col-8">Students Manage</div>
                    <div className="col-2">
                      <Carrot open={this.state.isstudentmanageopen} />
                    </div>
                  </div>
                </Link>
              </NavItem>
              <div>
                <UncontrolledCollapse toggler="#toggler1">
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/StudentManage/addnew"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Add New</div>
                      </div>
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/StudentManage/view"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">View</div>
                      </div>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      id="toggler4"
                      onClick={this.toggleStudentManagePayment}
                      to="/admin/StudentManage/payment"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Payment</div>
                        <div className="col-2">
                          <Carrot
                            open={this.state.isstudentmanagepaymentopen}
                          />
                        </div>
                      </div>
                    </Link>
                  </NavItem>
                  <div>
                    <UncontrolledCollapse toggler="#toggler4">
                      <NavItem>
                        <Link
                          className="nav-link offset-4"
                          to="/admin/StudentManagePayment/Add Bill"
                        >
                          <div className="row">
                            <div className="col-2">
                              <i className="fas fa-money-check-alt"></i>
                            </div>
                            <div className="col-8">Add Bill</div>
                          </div>
                        </Link>
                      </NavItem>
                      <NavItem>
                        <Link
                          className="nav-link offset-4"
                          to="/admin/StudentManagePayment/MessBill"
                        >
                          <div className="row">
                            <div className="col-2">
                              <i className="fas fa-receipt"></i>
                            </div>
                            <div className="col-8">Mess Bill</div>
                          </div>
                        </Link>
                      </NavItem>
                    </UncontrolledCollapse>
                  </div>
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/StudentManage/seatallocation"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-building" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Seat Allocation</div>
                      </div>
                    </Link>
                  </NavItem>
                </UncontrolledCollapse>
              </div>
              <NavItem>
                <Link
                  className="nav-link"
                  id="toggler2"
                  onClick={this.toggleEmployeeManage}
                  to="/admin/EmployeeManage"
                >
                  {" "}
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-users" aria-hidden="true"></i>
                    </div>
                    <div className="col-8">Employee Manage</div>
                    <div className="col-2">
                      <Carrot open={this.state.isemployeemanageopen} />
                    </div>
                  </div>
                </Link>
              </NavItem>

              <div>
                <UncontrolledCollapse toggler="#toggler2">
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/EmployeeManage/addnew"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Add New</div>
                      </div>
                    </Link>
                  </NavItem>

                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      to="/admin/EmployeeManage/view"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-eye" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">View</div>
                      </div>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link
                      className="nav-link offset-2"
                      id="toggler5"
                      onClick={this.toggleEmployeeManagePayment}
                      to="/admin/EmployeeManage/payment"
                    >
                      <div className="row">
                        <div className="col-2">
                          <i className="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <div className="col-8">Payment</div>
                        <div className="col-2">
                          <Carrot
                            open={this.state.isemployeemanagepaymentopen}
                          />
                        </div>
                      </div>
                    </Link>
                  </NavItem>
                  <div>
                    <UncontrolledCollapse toggler="#toggler5">
                      <NavItem>
                        <Link
                          className="nav-link offset-4"
                          to="/admin/EmployeeManagePayment/Add Salary"
                        >
                          <div className="row">
                            <div className="col-2">
                              <i className="fas fa-money-check-alt"></i>
                            </div>
                            <div className="col-8">Add Salary</div>
                          </div>
                        </Link>
                      </NavItem>

                      <NavItem>
                        <Link
                          className="nav-link offset-4"
                          to="/admin/EmployeeManagePayment/Salary"
                        >
                          <div className="row">
                            <div className="col-2">
                              <i className="fas fa-receipt"></i>
                            </div>
                            <div className="col-8">Salary</div>
                          </div>
                        </Link>
                      </NavItem>
                    </UncontrolledCollapse>
                  </div>
                </UncontrolledCollapse>
              </div>
              <NavItem>
                <Link className="nav-link" to="/admin/NoticeBoard">
                  {" "}
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                    </div>
                    <div className="col-8">Notice Board</div>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/admin/Architecture">
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-server" aria-hidden="true"></i>
                    </div>
                    <div className="col-8">Architecture</div>
                  </div>
                </Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/admin/Complaints">
                  <div className="row">
                    <div className="col-2">
                      <i className="fa fa-book" aria-hidden="true"></i>
                    </div>
                    <div className="col-8">Complaints</div>
                  </div>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
